//RTable.js-таблиця:пошук(фільтр) по всіх полях/сортування/select.
//Select: selectedRows- масив індексів(_nrow) вибраних рядків  )
//==== на базі RTable.js==========================================================
//https://flowbite.com/docs/components/tables/#striped-rows\\Table pagination
//Creating a React sortable table //https://blog.logrocket.com/creating-react-sortable-table/
//---
//https://dev.to/franciscomendes10866/react-basic-search-filter-1fkh
//Step-by-Step Guide: Building a Simple Search Filter with React
//--------------------------------------------------------------------

// Поля задаються в const initialСolumns = [
//  {label: "ШтрихКод", //Що буде відображатись в заголовку <th>
//   accessor: "skod",//-значення з БД, (Якщо accessor: "index", то іде нумерація рядків на основі index)
//   type: "date", //Для фільтру і вирівнюванню в рядку(string-вліво, numeric-вправо,date-по центу)
//   sortable: true,//чи буде сортуватись колонка
//   filtered: true,//чи буде фільтруватись
//   align: "center",//Додпткове вирівнбвання в стстовбцю(має перевагу над type)
//   minWith: "100px",//Ще не прпцює
//   With: "200px",}//Ще не прпцює
// ];
//     { label: "Назва товару"-Заголовок
//       accessor: "name"-значення з data,
//       sortable: true- чи буде сортуватись колонка
//       with: "200px"-???
//
//сортування/
//  Створення className для сортування(bg-color+bg-icon)
// 20231105-фіксовані <thead> i <tfoot> з вертикальним скролом
// Таблиця з фіксованим заголовком і прокручуваним тілом//https://www.w3docs.com/snippets/html/how-to-create-a-table-with-a-fixed-header-and-scrollable-body.html
// <th colspan="2">-обєднання колонок в заголовку і tfoot
// 20231110 //Поділ на сторінки:вибір к-сті рядків на сторінці/переміщення по сторінках
// - TableFooter.js,useTable.js://https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd
//  - інфа: які рядки зараз відображені на сторінці і рядків всього
// 20231111 // вибір шрифтіф таблиці (T)
// 20231114 // Видалив з таблиці select ( тепер видідення  цілим рядком)
// 20231117 // Щвидкий пошук по всіх полях(одне значення,пошуковий рядок)/Відновлення даних при стиранні у рядку/ Працює разом з сортуванням
// 20231120 // Добавив вікна фільтрів по заданих полях:DropdownFilter.js+DroopFifterForm.js
// 20231127 // Фільтрування по багатьох полях/Відновлення БД до фільтрування/ При фівльтруванні для порівняння дані перетворюються у ті типи, які задані в initialСolumns.type
// 20231128 // Вирівнювання даних в стовбцях згідно даних (initialСolumns.align)/по замовчуванню згідно типів даних (initialСolumns.type: numeric+boll=right/ date=center/ решта=left)/Якщо не заданий тип, то =left
// 20231215 // ВІдмітити(зняти) всі/
// 20231217 ////<th>i<td>-whitespace-nowrap-щоб текст у комірці таблиці не переносився(довгий рядок)
// 20231222 //Нижній рядок сумування/Працює на основі параметрів initialСolumns(sum: "sum","max","min","mean" \\можна відключити (p_sum=false)-небуде ні нижньоо рядка ні кнопки обчислення Sum
//---------------------------------------------------------------------------------------------------------
//!! Доробити:    table: Фільтри по даті / Суми по стовбцях
//--------------------------------------------------------------------------------------------------------------------

//*** Типи даних ******* */(string,number,boolean,date-це об'єкт,але треба вказувати)
// Для кращого відображення і фільтрування потрібно вказувати такі
// Якщо тип не вказаний, то він прирівнюється до (string)

"use client"
import { useState, useMemo, useCallback } from "react"
import { useRouter } from "next/navigation"
import TableFooter from "./TableFooter"
import useTable from "./useTable"
import DropdownFilter from "./DropdownFilter"

export default function Rtable({
  initialData, //початкові дані (з БД) - обов'язково
  initialСolumns, //поля(задаються в ...) - обов'язково
  title, //(значення)заголовок - не обов'язково
  //   p_selected, //???Завжди(true/false)вибір рядків-не обов'язково
  p_searchAllRows, //(true/false)пошук по всіх полях-не обов'язково
  p_filtered, //(true/false)Фільтр по всіх полях-не обов'язково
  p_sum, //(true/false)рядок сумування
}) {
  const router = useRouter() //для переходу на сторінки
  const [menuOpen, setMenuOpen] = useState(false)
  const [sumRow, setSumRow] = useState({})
  const [selectedRows, setSelectedRows] = useState([])
  const [selectedAllRows, setSelectedAllRows] = useState(false)
  const [sortField, setSortField] = useState("") //Поле(колонка) по якій сортується
  const [order, setOrder] = useState("asc") //Сортування в яку сторону(верх/вниз)
  const [rowsPerPage, setRowsPerPage] = useState(10) //К-сть рядків на сторінку
  const [tableFontSize, setTableFontSize] = useState("sm") //Шрифти таблиці(font-size )
  const [lengthSearhValue, setLengthSearhValue] = useState(0) //Попереднє значення рядка пошуку(Для відкату пошуку)
  const [beforSeachData, setBeforSeachData] = useState([]) //Зберігається БД перед пошуком (Для відкату пошуку)
  const [beforFilterData, setBeforFilterData] = useState([]) //Зберігається БД перед фільтруванням (Для відкату)
  const [isDropdownFilter, setIsDropdownFilter] = useState(false) //вікно фільтру
  const [filteredState, setFilteredState] = useState(0) //Стан фільтрування (0-незаповнений фільтр і не було фільтрування/ 1-заповнений фільтр, але не було фільтрування / 2- було фільтрування)

  // Стилі таблиці
  //Величина щрифта основних компонентів таблиці(надбудова(пошук+ітфо)/шапка/чаклунки/footer(підсумки)/нижній інфорядок з вибором сторінок (МОЖЛИВИЙ ВИБІР)
  //em-Відносно розміру шрифту даного елемента(=em*text-xs)
  const styleTableText =
    tableFontSize === "xs"
      ? " text-xs p-[0.2em]"
      : tableFontSize === "sm"
      ? " text-sm p-[0.2em]"
      : tableFontSize === "base"
      ? " text-base p-[0.2em]"
      : " text-lg p-[0.2em]"

  const styleTitleText =
    tableFontSize === "xs"
      ? " text-lg p-[0.1em]"
      : tableFontSize === "sm"
      ? " text-xl p-[0.1em]"
      : tableFontSize === "base"
      ? " text-2xl p-[0.1em]"
      : " text-3xl p-[0.1em]"

  //   const styleTableRowsColor = row._selected
  //     ? "bg-tabTrBgSel dark:tabTrBgSelD"
  //     : " odd:bg-tabTrBg even:bg-tabTrBgEve hover:bg-tabTrBgHov dark:odd:bg-tabTrBgD dark:even:bg-tabTrBgEveD dark:hover:bg-tabTrBgHovD";
  //   const styleTableRowsColor = row._selected
  //     ? "bg-tabTrBgSel dark:tabTrBgSelD"
  //     : " odd:bg-tabTrBg even:bg-tabTrBgEve hover:bg-tabTrBgHov dark:odd:bg-tabTrBgD dark:even:bg-tabTrBgEveD dark:hover:bg-tabTrBgHovD";
  // }  hover:bg-tabTrBgHov dark:odd:bg-tabTrBgD dark:even:bg-tabTrBgEveD dark:hover:bg-tabTrBgHovD`}

  // className =
  //   "odd:bg-tabTrBg even:bg-tabTrBgEve hover:bg-tabTrBgHov dark:odd:bg-tabTrBgD dark:even:bg-tabTrBgEveD dark:hover:bg-tabTrBgHovD";
  //-----------------------------------------------------------------------------------------

  //== Підготовка робочої структури workData */   //https://habr.com/ru/companies/otus/articles/696610/
  const preparedData = useMemo(() => {
    console.log("FRtable.js/preparedData= useMemo/")
    // const start = Date.now(); //Час початку
    const temp = initialData.map((data, idx) => {
      let tempData = { ...data } // Copy object()
      tempData._nrow = idx // Set new field/Встановити нове поле
      // if (typeof p_selected !== "undefined") tempData._selected = false; // Set new field
      tempData._selected = false // Set new field/Встановити нове поле
      return tempData //Новий масис з добавленмим полями tempData._nrow/tempData._selected
    })
    // const millis = Date.now() - start; //Час виконання
    // console.log("FRtable.js/preparedData/Час виконання : ", millis + "ms");
    return temp
  }, [initialData]) //Змінюється тільки при зміні 2-го аргумента

  //==  Робоча таблиця*/
  const [workData, setWorkData] = useState(preparedData) //РОбоча таьлиця
  //--------------------------------------------------------------------

  //== Підготовка масиву фільтрів по полях (filterData) */
  const preparedFilterData = useMemo(() => {
    console.log("FRtable.js/preparedFilterData = useMemo/")
    let resData = [] //масив об'єктів
    let nR = -1
    const temp = initialСolumns.map((data, idx) => {
      let tempData = {} // об’єкта
      if (data.filtered != undefined && data.filtered) {
        nR = nR + 1
        tempData._nrow = nR
        tempData.name = data.label
        tempData.accessor = data.accessor
        if (data.type != undefined) tempData.type = data.type
        else tempData.type = "string"
        tempData.comparisonFirst = ""
        tempData.filterFirst = ""
        tempData.logical = ""
        tempData.comparisonTwo = ""
        tempData.filterTwo = ""
        resData.push(tempData) //Додаємо в масив
      }
    })
    return resData
  }, [initialСolumns]) //Змінюється тільки при зміні 2-го аргумента

  const [filterData, setFilterData] = useState(preparedFilterData) //Фільтер для всіх полів

  //** Сторінки */ //https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd
  const [page, setPage] = useState(1) //Номер текучої сторінки
  const { slice, range } = useTable(workData, page, rowsPerPage) //
  //   console.log("RTable/slice=", slice);

  //==*п Сортування */
  const handleSorting = (sortField, sortOrder) => {
    console.log("FRtable.js/handleSorting/")
    //--- Для встановлення початкового сортування
    if (sortOrder === "default") {
      sortOrder = "asc"
      sortField = "_nrow"
    }
    //--- Саме сортування
    if (sortField) {
      const sorted = [...workData].sort((a, b) => {
        if (a[sortField] === null) return 1
        if (b[sortField] === null) return -1
        if (a[sortField] === null && b[sortField] === null) return 0
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        )
      })
      setWorkData(sorted)
    }
  }

  //--- Задає режим сортування
  const handleSortingChange = (accessor) => {
    console.log("FRtable.js/handleSortingChange/")
    // console.log("RTable.js/handleSortingChange/accessor=", accessor)
    const sortOrder =
      //   accessor === sortField && order === "asc" ? "desc" : "asc";
      accessor === sortField && order === "asc" ? "desc" : order === "desc" ? "default" : "asc"
    setSortField(accessor)
    setOrder(sortOrder)
    // console.log("RTable.js/handleSortingChange/sortOrder=", sortOrder);
    handleSorting(accessor, sortOrder)
  }
  //==*к Сортування */

  //== Пошук(search)/фільтер-по всіх полях зразу */
  const seachAllFilds = (e) => {
    console.log("FRtable.js/seachAllFilds/")
    const searchValue = e.target.value
    if (lengthSearhValue === 0) {
      setBeforSeachData(workData)
    }
    const rows = beforSeachData

    // console.log("seachAllFilds/searchValue=", searchValue + "/ rows", rows);
    if (rows.length > 0) {
      const attributes = Object.keys(rows[0]) //Це рядок заголовку

      const nowData = []
      //-- Цикл по рядках
      for (const current of rows) {
        //Цикл по колонках
        for (const attribute of attributes) {
          //Відсіюємо поля по яких не робиться пошук
          if (attribute === "id" || attribute === "_nrow" || attribute === "_selected") {
            continue //пропустити поле
          }
          //   const value = current[attribute];
          const value = String(current[attribute]).toLowerCase() //переводимо значення поля у нижній регістр
          //порівнюємо значення поля із пошуком, переводеним у нижній регістр
          if (value.includes(searchValue.toLowerCase())) {
            nowData.push(current)
            break //вихід з внутрішнього циклу
          }
        }
      }
      setLengthSearhValue(searchValue.length)
      setWorkData(nowData)
    }
  }

  //== Вибір/Selected / Записуємо селект(true/false) в _selected роточого масиву(workData) */
  const selectRows = (e) => {
    console.log("FRtable.js/selectRows/")
    // console.log("RTable.js/selectRows/e.target=", e.target);
    const nRow = Number(e.target.id) //id-Це DOM(<td id="1"> Я йому присвоюю значення БД=_nrow)

    //--- Формуємо масив з індексами відмічених записів (setSelectedRow) --------------------
    let copyArray = [...selectedRows] //Копія робочого масиву обєктів
    const selectIndex = copyArray.findIndex((item) => item === nRow) //id-це id HTML DOM елемента (в нашому випадку:id={_nrow})
    // console.log("RTable.js.js/selectRows/selectIndex=", selectIndex);
    if (selectIndex === -1) {
      copyArray.push(nRow) //Додаємо в масив
      //   console.log("RTable.js.js/addSelecrToRbTable/nRow=", nRow);
    } else copyArray.splice(selectIndex, 1) //Якщо вже є в масиві то видаляємо
    // console.log("RTable.js.js/selectRows/copyArray=", copyArray);
    //
    setSelectedRows(copyArray) //Запмс в масив

    //--- Запишемо селект(true/false) в _selected роточого масиву(workData) --------
    let selectData = [...workData] //Копія робочого масиву обєктів

    //https://www.geeksforgeeks.org/how-to-modify-an-objects-property-in-an-array-of-objects-in-javascript/
    const targetObj = selectData.find((obj) => obj._nrow === nRow) //Шукажмо запис по _nrow=nRow
    // console.log("RTable.js.js/selectRows/targetObj=", targetObj);
    if (targetObj) {
      const newSelect = !targetObj._selected
      targetObj._selected = newSelect
      setWorkData(selectData)
    }
  }

  //--- Вибір/Selected (всі)
  const onSelectAll = () => {
    console.log("FRtable.js/onSelectAll/")
    let selectData = [...workData] //Копія робочого масиву обєктів
    const temp = selectData.map((data, idx) => {
      if (selectedAllRows) data._selected = false
      else data._selected = true
      setWorkData(selectData)
    })
    //
    setSelectedAllRows(!selectedAllRows)
    setSelectedRows([])
  }

  //== Фільтр множинний */
  //--- Формує (true/false) для стилю шоб показувати іконку фільтру біля назви в шапці, якщо є заданий фільтр по цьому полю
  const clasThFilter = useCallback(
    (accessor) => {
      console.log("FRtable.js/clasThFilterl/")
      const targetObj = filterData.find((obj) => obj.accessor === accessor) //Шукажмо запис
      // console.log("RTable.js.js/applyFilters/targetObj ==", targetObj)
      if (targetObj && targetObj.filterFirst.length > 0) {
        return true
      } else return false
    },
    [filterData]
  )

  //---*** Сам фільтр/Apply/Застосувати //Визначає масив даних, які відповідають фільтрам по всіх полях (filterData)
  const applyFilters = () => {
    console.log("FRtable.js/applyFilters/")
    setIsDropdownFilter(false) //Закриваєм випадаюче вікно фільтрів
    if (filteredState === 0) return
    //--- Додаткові ф-ції
    //Як реалізувати оператор змінної в JavaScript? // https://stackoverflow.com/questions/66267093/how-to-implement-a-variable-operator-in-javascript
    //--- Об'єкт(набір змінних), що імітує оператори
    const operators = {
      ">": (a, b) => a > b,
      ">=": (a, b) => a >= b,
      "<": (a, b) => a < b,
      "<=": (a, b) => a <= b,
      "==": (a, b) => a == b,
      "!=": (a, b) => a != b,
    }
    //--- Ф-ція порівняння 2-х змінних з операторм,який є в змінній
    function doCompare(x, y, op) {
      const check = operators[op] ?? (() => false)
      if (check(x, y)) {
        return true
      } else {
        return false
      }
    }
    //*-- Ф-ція перетворення типів у відповідності до заданих типиві таблиці і у нижній регістр
    const valToType = (value, type = "string") => {
      // console.log("RTable.js.js/applyFilters/value=", value + "/type=", type)
      if (type === "number") return parseFloat(value)
      if (type === "date") return Date.parse(value)
      return String(value).toLowerCase() //переводимо значення поля у нижній регістр
    }

    //--- Початок фільтруівання
    // console.log("RTable.js.js/applyFilters/filterData=", filterData);
    // console.log("RTable.js.js/applyFilters/filteredState=", filteredState)
    let tempWorkData = []
    if (filteredState === 2) {
      tempWorkData = [...beforFilterData] //Повертаємо початкове значення workData
    } else {
      setBeforFilterData(workData) //Для відкату(Початкове значення фільтру)
      tempWorkData = [...workData] //Перший раз починаємо фільтрування з workData}
    }
    // console.log("RTable.js.js/applyFilterstempWorkData=", tempWorkData)

    const nowData = []
    //*** Цикл по рядках
    // const attributes = Object.keys(tempWorkData[0]); //Це рядок заголовку(масив)
    // console.log("RTable.js.js/ApplyFilters/attributes=", attributes);
    // console.log("RTable.js.js/ApplyFilters/for2/filterData=", filterData)
    for (const current of tempWorkData) {
      // console.log("RTable.js.js/ApplyFilters/for1/currentRow=", current)
      //++++ Принцип виходу з атрибуту(for2) при невідповідностях
      //Цикл по колонках \\ Щоб не бігти по масиву ро
      let rowFilterted = false
      for (const column of filterData) {
        const attribute = column.accessor
        // console.log("RTable.js.js/ApplyFilters/for2/rowColumn=", column)
        // console.log("RTable.js.js/ApplyFilters/for2/attribute=", attribute)
        // Чи є не пустий фільтр по цьоиу полю в масиві фільтрів
        const targetObj = filterData.find((obj) => obj.accessor === attribute)
        //===============================
        if (targetObj.filterFirst.length > 0) {
          //   console.log("RTable.js.js/ApplyFilters/for2/attribute=", attribute);
          const filterRow = `${targetObj.comparisonFirst}/${targetObj.filterFirst}/${targetObj.logical}/${targetObj.comparisonTwo}/${targetObj.filterTwo}`
          //   console.log("RTable.js.js/ApplyFilters/for2/targetObj: ", targetObj);
          //   console.log("RTable.js.js/ApplyFilters/for2/filterRow: ", filterRow);

          //--- Задаєм змінну типу поля //Тип змінної, якщо не заданий то "string"
          const valueType = targetObj.type === undefined ? "string" : targetObj.type //Ф-ція що задає типи
          //--- Перетворюємо у робочі змінні у вказаний тип і у нижній регістр
          const valueData = valToType(current[attribute], valueType) //Значення поля робочої БД
          const filterFirst = valToType(targetObj.filterFirst, valueType) //Значення фільтру1
          console.log("RTable.js.js/ApplyFilters/typeof /valueData=", valueData + "/", typeof valueData)
          console.log("RTable.js.js/ApplyFilters/filterFirst=", filterFirst + "/", typeof filterFirst)

          //https://stackoverflow.com/questions/66267093/how-to-implement-a-variable-operator-in-javascript
          //doCompare-ф-ція що повертає результат порівняння 2-х змінних де третя є самим оператор порівняння("><=...")
          //filterFirst

          let compareFirst = false
          if (valueType === "number" || valueType === "date") {
            compareFirst = doCompare(valueData, filterFirst, targetObj.comparisonFirst) //   doStuff(4, 2, ">")=true
          } else compareFirst = valueData.includes(filterFirst.toLowerCase()) //Порівняння (чивходить)
          //
          //   if (compareFirst) {
          //     rowFilterted = true
          //     // console.log("RTable.js/applyFilters/iFcompareFirst/current._nRow:", current._nrow)
          //   }

          //--- Якщо є filterTwo.length
          if (targetObj.filterTwo.length > 0) {
            // console.log("RTable.js/applyFilters/iFfilterTwo/current._nRow:", current._nrow + "/valueData", valueData)
            //   console.log("RTable.js.js/applyFilters/Two/filterRow=", filterRow);
            const filterTwo = valToType(targetObj.filterTwo, valueType) //Значення фільтру1
            let compareTwo = false
            if (valueType === "number" || valueType === "date") {
              compareTwo = doCompare(valueData, filterTwo, targetObj.comparisonTwo)
            } else compareTwo = valueData.includes(filterTwo.toLowerCase())

            //1-a умова
            if (compareFirst && compareTwo) {
              rowFilterted = true
            } else {
              //2a
              if (compareFirst != compareTwo && targetObj.logical != "&&") {
                rowFilterted = true
              } else {
                // console.log("RTable.js/ApplyFilte/!(compareTwo)lseIfEls(compareFirst&&/_nRow:", current._nrow)
                rowFilterted = false //Якщо "&&"" то при First = true і Two = false- викидаємоні
                break //Бо filterFirct=true але при "&&" filterTwo=false, отже це поле випадає а значить і весь запис
              }
            }
          } else if (compareFirst) {
            // console.log("RTable.js/applyFilters/elseIf(ост)/current._nRow:", current._nrow)
            rowFilterted = true
          } else {
            rowFilterted = false
            break
          }
        }
        //-- fEndor2
        // console.log("RTable.js/ApplyFilters/Endfor2/_nRow: ", current._nrow + " /attribute:", attribute)
      }
      //--- Endfor1
      //   console.log("RTable.js.js/ApplyFilters/Endfor1*/_nRow: ", current._nrow);
      if (rowFilterted) {
        nowData.push(current) // Добавляємо текучий рядок в новий масив
        // console.log("RTable.js.js/ApplyFilters/Endfor1/if(rowFilterted)***/_nRow: ", current._nrow)
      }
    }
    // console.log("RTable.js.js/ApplyFilters/Endfor1/")
    setWorkData(nowData)
    setFilteredState(2) //Колір заповнення іконки фільтру
  }

  //--- Очищаємо фільтр/Відкат даних до фільтру/Закриваємо випадаюче вікно
  const deleteFilterAll = () => {
    console.log("RTable.js/deleteFilterAll/")
    let tempFilterData = [...filterData]
    const temp = tempFilterData.map((data) => {
      data.comparisonFirst = ""
      data.filterFirst = ""
      data.logical = ""
      data.comparisonTwo = ""
      data.filterTwo = ""
    })
    setFilterData(tempFilterData) //Перезаписуєм масив фільтрів
    // setWorkData(beforSeachData) //Відкат даних до фільтру
    setIsDropdownFilter(false) //Закриваємо випадаюче вікно
    if (filteredState === 2) setWorkData(beforFilterData) //Відновлюємо робочу БД до фільтрування
    setFilteredState(0) //Іконка
  }

  //-- рядок сумування
  //--Обчислення сум
  const applySum = () => {
    console.log("FRtable.js/applySum/")
    let tRow = {} //об'єкт
    const temp1 = initialСolumns.map((item) => {
      //   let tempSumRow = { ...sumRow }
      // console.log("RTable.js/applySum/ workData.map/accessor=", item.accessor + "/знач:", trow[item.accessor])
      if (item.sum === "sum" || item.sum === "mean" || item.sum === "max" || item.sum === "min") {
        let tSum = Number(0)
        let kZap = 0
        const temp = workData.map((trow, idx) => {
          kZap += 1
          // console.log("RTable.js/applySum/ workData.map/accessor=", item.accessor + "/знач:", trow[item.accessor])
          if (item.sum === "max") {
            if (idx === 0) tSum = trow[item.accessor]
            tSum = Math.max(tSum, Number(trow[item.accessor]))
          } else if (item.sum === "min") {
            if (idx === 0) tSum = trow[item.accessor]
            tSum = Math.min(tSum, Number(trow[item.accessor]))
          } else {
            tSum += Number(trow[item.accessor])
          }
        })
        //середнє ариіметичне
        if (item.sum === "mean") {
          tSum = tSum / kZap
        }
        console.log("RTable.js/applySum/accessor", item.accessor + "/tSum=", tSum)
        tRow[item.accessor] = tSum //Додавання нової властивості до оь'якту
      }
      //******************************
    })
    // console.log("RTable.js/applySum/tRow=", tRow)
    setSumRow(tRow)
  }

  // Вихід з форми
  const onCancel = () => {
    //якщо не довідник
    router.push("/") //перехід на сторінку
    // if (!isDovidnuk) router.push("/") //перехід на сторінку
    // // if (!isDovidnuk) router.back() //повернутись
    // else setDovActive("")
  }
  //-------------------------------------------------
  return (
    //align-middle-текст по вертикалі посередині
    <div className={`${styleTableText} px-1 align-middle bg-bodyBg dark:bg-bodyBgD`}>
      {/* title- Заголовок вікна таблиці */}
      {typeof title !== "undefined" && (
        <div className="flex justify-between dark:text-hTextD  items-center rounded-3xl align-middle border border-tabThBorder dark:border-tabThBorderD font-bold bg-hBg text-hText  dark:bg-hBgD">
          <button
            // className="flex h-6 w-6 items-center justify-center rounded-full align-middle    transition-colors hover:bg-hBgHov dark:hover:bg-hBgHovD"
            className="h-6 w-6 flex mx-1 justify-between dark:text-hTextD rounded-3xl align-middle border border-tabThBorder dark:border-tabThBorderD font-bold bg-hBg text-hText  dark:bg-hBgD hover:bg-hBgHov dark:hover:bg-hBgHovD"
            onClick={() => setMenuOpen(!menuOpen)}
            title="меню"
          >
            {/* іконка мобільного меню */}
            <svg
              //   className="h-6 w-6 text-iconT dark:text-iconTD"
              className="h-6 w-6 text-iconT dark:text-iconTD"
              //   className="h-6 w-6  hover:text-hTextHov text-hText dark:text-hTextD dark:hover:text-hTextHovD"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <line x1="8" y1="6" x2="21" y2="6" /> <line x1="8" y1="12" x2="21" y2="12" />{" "}
              <line x1="8" y1="18" x2="21" y2="18" /> <line x1="3" y1="6" x2="3.01" y2="6" />{" "}
              <line x1="3" y1="12" x2="3.01" y2="12" /> <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <h1 className={`${styleTitleText}  text-center  `}>{title}</h1>
          <button
            className="h-6 w-6 flex mx-1 justify-between dark:text-hTextD rounded-3xl align-middle border border-tabThBorder dark:border-tabThBorderD font-bold bg-hBg text-hText  dark:bg-hBgD hover:bg-hBgHov dark:hover:bg-hBgHovD"
            onClick={onCancel}
            title="Вийти"
          >
            {/* відмова(помножити) */}
            <svg
              className="h-6 w-6 text-iconT dark:text-iconTD"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

      {/*  */}
      {/* Надбудова таблиці з елементами управління (пошук+...) */}
      {/* <div className="mb flex border-3 border-green-300 p-1 dark:bg-gray-900"> */}
      <div className="my-1 flex flex-wrap items-center justify-start">
        {/*  */}

        {/* Блок:селект/фільтер/шрифт */}
        <div className="flex flex-wrap items-center justify-start">
          {/*Інформація про вибрані рядки  */}
          {/* {typeof p_selected !== "undefined" && p_selected && ( */}
          <button
            className="ml-1 flex items-center rounded-lg border border-tabThBorder dark:border-tabThBorderD bg-tabTrBg text-tabTrText dark:text-tabTrTextD p-1 dark:bg-tabTrBgD"
            onClick={onSelectAll}
            title="Вибрати всі"
          >
            {/* галочка */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-5 w-5 text-iconT dark:text-iconTD"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <p title="Відмічено">: {selectedAllRows ? workData.length : selectedRows.length}</p>
          </button>

          {/* Вибір шрифта */}
          <div className="ml-1 flex items-center rounded-lg border border-tabThBorder dark:border-tabThBorderD bg-tabTrBg text-tabTrText dark:text-tabTrTextD p-1 dark:bg-tabTrBgD">
            {/* іконка T */}
            <svg
              className="h-5 w-5 text-iconT dark:text-iconTD"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="4 7 4 4 20 4 20 7" /> <line x1="9" y1="20" x2="15" y2="20" />{" "}
              <line x1="12" y1="4" x2="12" y2="20" />
              <title>Шрифти</title>
            </svg>
            <p>:</p>
            <select
              className="mx-1 block w-full  items-center border-tabThBorder bg-tabTrBg align-middle  text-gray-900 hover:cursor-pointer focus:border-blue-500 focus:ring-blue-500 dark:border-tabThBorderD dark:bg-tabTrBgD dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              defaultValue={tableFontSize}
              onChange={(e) => setTableFontSize(e.target.value)}
              //   id="page-size"
              title="Величина шрифту"
            >
              <option value={tableFontSize} disabled>
                {tableFontSize}
              </option>
              <option value="xs">xs</option>
              <option value="sm">sm</option>
              <option value="base">base</option>
              <option value="lg">lg</option>
              {/* <option value="xs">дрібний</option>
              <option value="sm">середній</option>
              <option value="base">базовий</option>
              <option value="lg">великий</option> */}
            </select>
          </div>
        </div>

        {/* Фільтр: Інфа відфільтровані/ вся БД  */}
        {typeof (p_filtered !== "undefined") && p_filtered && (
          <div>
            <button
              //   className="ml-1 flex items-center rounded-lg border border-gray-300 bg-gray-50 p-1 dark:bg-gray-700"
              className="ml-1 flex items-center rounded-lg border border-tabThBorder dark:border-tabThBorderD bg-tabTrBg text-tabTrText dark:text-tabTrTextD p-1 dark:bg-tabTrBgD"
              onClick={() => setIsDropdownFilter(!isDropdownFilter)}
            >
              {/* Лійка */}
              <svg
                className="h-5 w-5 text-iconT dark:text-iconTD"
                viewBox="0 0 24 24"
                fill={filteredState === 2 ? "currentColor" : filteredState === 1 ? "green" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                <title>Фільтр</title>
              </svg>

              <p title="Відфільтровано">: {workData.length}</p>
              <p title="Вся БД">/ {initialData.length}</p>
            </button>

            {/* Dropdown menu */}
            {isDropdownFilter && (
              <DropdownFilter
                filterData={filterData} //Дані фільтру(тільки ті поля по яких задано )
                setFilterData={setFilterData}
                setIsDropdownFilter={setIsDropdownFilter}
                styleTableText={styleTableText}
                applyFilters={applyFilters} //Застосувати фільтр
                deleteFilterAll={deleteFilterAll}
                filteredState={filteredState} //Що у фільтрі є непусті записи
                setFilteredState={setFilteredState} //Що у фільтрі є непусті записи
              />
            )}
          </div>
        )}

        {/* Рядок сум */}
        {typeof (p_sum !== "undefined") && p_sum && (
          <div>
            <button
              className="ml-1 flex items-center rounded-lg border border-tabThBorder dark:border-tabThBorderD bg-tabTrBg text-tabTrText dark:text-tabTrTextD p-1 dark:bg-tabTrBgD"
              onClick={applySum}
              title="Рядок сум"
            >
              {/* suma */}
              <svg
                className="h-5 w-5 text-iconT dark:text-iconTD"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M18 16v2a1 1 0 0 1 -1 1h-11l6-7l-6-7h11a1 1 0 0 1 1 1v2" />
                <title>Рядок сум</title>
              </svg>
            </button>
          </div>
        )}

        {/*Пошук швидкий/фільтр (рядок пощуку по всіх полях) */}
        {typeof p_searchAllRows !== "undefined" && p_searchAllRows && (
          <div className="relative ml-1 w-full items-center md:w-80">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  pl-3">
              {/* Лупа */}
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                // className="h-4 w-4 text-gray-500 dark:text-red-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              size="lg"
              placeholder="Пошук..."
              // value={searchValue}
              //   onChange={(e) =>p_filterededp_searchAllRows onChangeSearch(e)} //Для Enter
              onChange={(e) => seachAllFilds(e)} //Пошук
              type="text"
              className="block w-full items-center rounded-lg border border-tabThBorder bg-tabTrBg p-1 pl-10 text-tabTrText dark:border-tabThBorderD dark:bg-tabTrBgD dark:text-tabTrTextD"
            />
          </div>
        )}
      </div>

      {/* Обгортка(Wraper)таблиці (для проокрутки і...)   border-3 border-green-300 */}
      <div
        className=" max-h-[--sH] w-full overflow-auto border border-tabThBorder dark:border-tabThBorderD"
        style={{ "--sH": "calc(100vh - 250px)" }} //Створення style для h-
      >
        {/*border-collapse- обєднання границь ячейок "> */}
        <table className=" w-full table-auto">
          <thead
            className={`${styleTableText} sticky top-0  border-b border-tabThBorder bg-tabThBg text-tabThText dark:border-tabThBorderD dark:bg-tabThBgD dark:text-tabThTextD`}
          >
            <tr>
              {/*
              label - назва поля в шапці
              accessor-справжня назва поля */}

              {initialСolumns.map(({ label, accessor, sortable, filtered }) => {
                //  Створення className для сортування(bg-color+bg-url)
                const clasSort = sortable
                  ? sortField === accessor && order === "asc"
                    ? "up"
                    : sortField === accessor && order === "desc"
                    ? "down"
                    : "default"
                  : ""

                //  Створення className для фільтрування(іконка біля назви в шапці)
                const clasFilter = clasThFilter(accessor)

                return (
                  <th
                    //whitespace-nowrap-щоб текст у комірці таблиці не переносився
                    className={`${styleTableText} border-r dark:border-tabThBorderD border-tabThBorder whitespace-nowrap`}
                    key={accessor}
                  >
                    {/* // uppercase- текст у верхній регістр */}
                    <div className="flex justify-center text-center align-middle uppercase ">
                      <div className="flex uppercase ">
                        <button className="flex" onClick={sortable ? () => handleSortingChange(accessor) : null}>
                          <p className="px-1"> {label}</p>
                          {clasSort === "up" ? (
                            <span> &#8593;</span>
                          ) : clasSort === "down" ? (
                            <span> &#8595;</span>
                          ) : (
                            clasSort === "default" && ""
                          )}
                        </button>
                      </div>

                      {/* filter */}
                      {typeof filtered !== "undefined" && filtered && (
                        <div className="flex text-center align-middle">
                          {clasFilter && (
                            <svg
                              //   className="h-4 w-4 "
                              className="h-4 w-4 text-iconInfo dark:text-iconInfoD"
                              viewBox="0 0 24 24"
                              fill="none"
                              // fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                            </svg>
                          )}
                        </div>
                      )}
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>

          {/* рядки */}
          <tbody>
            {/* перебір рядків */}
            {/* slice-це кусок вибраного для рендерінгу масиву (сторінка/відфільтроване і...) */}
            {slice.map((row, rowIndex) => (
              <tr
                id={row._nrow} //Початкова нумерація рядків/додано програмно
                key={row._nrow} //Початкова нумерація рядків/додано програмно
                // key={row.id}
                className={`${
                  row._selected
                    ? "bg-tabTrBgSel hover:bg-tabTrBgSelHov dark:bg-tabTrBgSelD dark:hover:bg-tabTrBgSelHovD"
                    : "odd:bg-tabTrBg even:bg-tabTrBgEve hover:bg-tabTrBgHov dark:odd:bg-tabTrBgD dark:even:bg-tabTrBgEveD dark:hover:bg-tabTrBgHovD"
                }`}
                onClick={(e) => selectRows(e)}
              >
                {/* перебір полів */}
                {initialСolumns.map(({ accessor, type = "", align = "" }) => {
                  const tData = accessor === "index" ? rowIndex : row[accessor]
                  //   console.log("RTable.js/tbody/Сolumns.map/type=", type);

                  const clasTextAlign =
                    align == "right"
                      ? "text-right"
                      : align == "center"
                      ? "text-center"
                      : align == "left"
                      ? "text-left"
                      : type == "number"
                      ? "text-right"
                      : type == "date"
                      ? "text-center"
                      : "text-left"

                  return (
                    <td
                      id={row._nrow}
                      key={accessor}
                      ///whitespace-nowrap-щоб текст у комірці таблиці не переносився
                      className={`${styleTableText} ${clasTextAlign} text-tabTrText dark:text-tabTrTextD  whitespace-nowrap`}
                    >
                      {tData}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>

          {/* Нижній рядок сум */}
          {typeof (p_sum !== "undefined") && p_sum && (
            <tfoot
              className={`${styleTableText} sticky bottom-0 border-t border-tabThBorder bg-tabThBg text-tabThText dark:border-tabThBorderD dark:bg-tabThBgD dark:text-tabThTextD`}
            >
              <tr>
                {/* <th colSpan="8" className="text-center">
                Всього
              </th> */}
                {initialСolumns.map(({ accessor, _nrow, sum, align, type, index }) => {
                  const clasFlexJustify =
                    align == "right"
                      ? "justify-end "
                      : align == "center"
                      ? "justify-center"
                      : align == "left"
                      ? "justify-start"
                      : type == "number"
                      ? "justify-end "
                      : type == "date"
                      ? "justify-center"
                      : "justify-start"
                  const tIcon =
                    sum === "sum" ? (
                      // suma
                      <svg
                        className="h-4 w-4 text-iconInfo dark:text-iconInfoD"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M18 16v2a1 1 0 0 1 -1 1h-11l6-7l-6-7h11a1 1 0 0 1 1 1v2" />
                        <title>suma</title>
                      </svg>
                    ) : sum === "min" ? (
                      <>
                        <svg
                          className="h-4 w-4 text-iconInfo dark:text-iconInfoD"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" /> <path d="M3 12h7l-3 -3m0 6l3 -3" />{" "}
                          <path d="M21 12h-7l3 -3m0 6l-3 -3" /> <path d="M9 6v-3h6v3" /> <path d="M9 18v3h6v-3" />
                          <title>min</title>
                        </svg>
                      </>
                    ) : sum === "max" ? (
                      <>
                        {/*>max  */}
                        <svg
                          className="h-4 w-4 text-iconInfo dark:text-iconInfoD"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" /> <path d="M10 12h-7l3 -3m0 6l-3 -3" />{" "}
                          <path d="M14 12h7l-3 -3m0 6l3 -3" /> <path d="M3 6v-3h18v3" /> <path d="M3 18v3h18v-3" />
                          <title>max</title>
                        </svg>
                      </>
                    ) : sum === "mean" ? (
                      <svg
                        className="h-4 w-4 text-iconInfo dark:text-iconInfoD"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="12" r="9" />{" "}
                        <line x1="12" y1="3" x2="12" y2="7" /> <line x1="12" y1="21" x2="12" y2="18" />{" "}
                        <line x1="3" y1="12" x2="7" y2="12" /> <line x1="21" y1="12" x2="18" y2="12" />{" "}
                        <line x1="12" y1="12" x2="12" y2="12.01" />
                        <title>середнє</title>
                      </svg>
                    ) : (
                      ""
                    )
                  return (
                    <th
                      key={accessor}
                      className={`${styleTableText} border-r dark:border-tabThBorderD border-tabThBorder whitespace-nowrap`}
                    >
                      <div
                        id={_nrow}
                        key={accessor}
                        className={`${styleTableText} ${clasFlexJustify} flex items-center text-tabTrText dark:text-tabTrTextD  whitespace-nowrap text-left`}
                      >
                        <p className="flex align-bottom">{tIcon}</p>
                        <p>{sumRow[accessor]}</p>
                      </div>
                    </th>
                  )
                })}
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      {/* footer */}
      <TableFooter
        range={range}
        slice={slice}
        setPage={setPage}
        page={page}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        maxRow={workData.length}
      />
    </div>
  )
}
