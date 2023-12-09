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
//   { label: "In", accessor: "index", sortable: false, with: "15px" },
//    { label: "Id", accessor: "id", sortable: true, with: "20px" },
// ];
//     { label: "Назва товару"-Заголовок
//       accessor: "name"-значення з data,
//       sortable: true- чи буде сортуватись колонка
//       with: "200px"-???
// Якщо accessor: "index", то іде нумерація рядків на основі index
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
//          // ВІдмітити(зняти) всі/
//--------------------------------------------------------------------------------------------------------------------

//*** Типи даних ******* */(string,number,boolean,date-це об'єкт,але треба вказувати)
// Для кращого відображення і фільтрування потрібно вказувати такі
// Якщо тип не вказаний, то він прирівнюється до (string)

"use client";
import { useState, useMemo, useEffect } from "react";
import TableFooter from "./TableFooter";
import useTable from "./useTable";
import DropdownFilter from "./DropdownFilter";

export default function DProductTable({
  initialData, //початкові дані (з БД) - обов'язково
  initialСolumns, //поля(задаються в ...) - обов'язково
  title, //(значення)заголовок - не обов'язково
  //   p_StripedRows, //Смугасті ряди
  //   p_selected, //???Завжди(true/false)вибір рядків-не обов'язково
  p_searchAllRows, //(true/false)пошук по всіх полях-не обов'язково
  p_filtered, //(true/false)Фільтр по всіх полях-не обов'язково
}) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedAllRows, setSelectedAllRows] = useState(false);
  const [sortField, setSortField] = useState(""); //Поле(колонка) по якій сортується
  const [order, setOrder] = useState("asc"); //Сортування в яку сторону(верх/вниз)
  const [rowsPerPage, setRowsPerPage] = useState(10); //К-сть рядків на сторінку
  const [tableFontSize, setTableFontSize] = useState("sm"); //Шрифти таблиці(font-size )
  const [lengthSearhValue, setLengthSearhValue] = useState(0); //Попереднє значення рядка пошуку(Для відкату пошуку)
  const [beforSeachData, setBeforSeachData] = useState([]); //Зберігається БД перед пошуком (Для відкату пошуку)
  const [beforFilterData, setBeforFilterData] = useState([]); //Зберігається БД перед фільтруванням (Для відкату фільтрування)
  const [isDropdownFilter, setIsDropdownFilter] = useState(false); //Зберігається перед селектом
  const [filteredIcon, setFilteredIcon] = useState("none"); //Заповнення іконки фільтру(лійки)("none- не фільтрувалось/"carentColor- фільтрувалось )

  // Стилі таблиці
  //Величина щрифта основних компонентів таблиці(надбудова(пошук+ітфо)/шапка/чаклунки/footer(підсумки)/нижній інфорядок з вибором сторінок (МОЖЛИВИЙ ВИБІР)
  //em-Відносно розміру шрифту даного елемента(=em*text-xs)
  const styleTableText =
    tableFontSize === "xs"
      ? " text-xs p-[0.5em]"
      : tableFontSize === "sm"
      ? " text-sm p-[0.5em]"
      : tableFontSize === "base"
      ? " text-base p-[0.5em]"
      : " text-lg p-[0.5em]";

  const styleTitleText =
    tableFontSize === "xs"
      ? " text-lg p-[0.1em]"
      : tableFontSize === "sm"
      ? " text-xl p-[0.1em]"
      : tableFontSize === "base"
      ? " text-2xl p-[0.1em]"
      : " text-3xl p-[0.1em]";

  //   const styleTableRowsColor = row._selected
  //     ? "bg-tabTrBgSelCol dark:tabTrBgSelColD"
  //     : " odd:bg-tabTrBgCol even:bg-tabTrBgEveCol hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD";
  //   const styleTableRowsColor = row._selected
  //     ? "bg-tabTrBgSelCol dark:tabTrBgSelColD"
  //     : " odd:bg-tabTrBgCol even:bg-tabTrBgEveCol hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD";
  // }  hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD`}

  // className =
  //   "odd:bg-tabTrBgCol even:bg-tabTrBgEveCol hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD";
  //-----------------------------------------------------------------------------------------

  //== Підготовка робочої структури workData */   //https://habr.com/ru/companies/otus/articles/696610/
  const preparedData = useMemo(() => {
    // const start = Date.now(); //Час початку
    const temp = initialData.map((data, idx) => {
      let tempData = { ...data }; // Copy object()
      tempData._nrow = idx; // Set new field/Встановити нове поле
      // if (typeof p_selected !== "undefined") tempData._selected = false; // Set new field
      tempData._selected = false; // Set new field/Встановити нове поле
      return tempData; //Новий масис з добавленмим полями tempData._nrow/tempData._selected
    });
    // const millis = Date.now() - start; //Час виконання
    // console.log("FRtable.js/preparedData/Час виконання : ", millis + "ms");
    return temp;
  }, [initialData]); //Змінюється тільки при зміні 2-го аргумента

  //==  Робоча таблиця*/
  const [workData, setWorkData] = useState(preparedData); //РОбоча таьлиця
  //--------------------------------------------------------------------

  //== Підготовка масиву фільтрів по полях (filterData) */
  const preparedFilterData = useMemo(() => {
    let resData = [];
    let nR = -1;
    const temp = initialСolumns.map((data, idx) => {
      let tempData = [];
      if (data.filtered != undefined && data.filtered) {
        nR = nR + 1;
        tempData._nrow = nR;
        tempData.name = data.label;
        tempData.accessor = data.accessor;
        if (data.type != undefined) tempData.type = data.type;
        else tempData.type = "string";
        tempData.comparisonFirst = "";
        tempData.filterFirst = "";
        tempData.logical = "";
        tempData.comparisonLast = "";
        tempData.filterLast = "";
        resData.push(tempData); //Додаємо в масив
      }
    });
    return resData;
  }, [initialСolumns]); //Змінюється тільки при зміні 2-го аргумента

  const [filterData, setFilterData] = useState(preparedFilterData); //Фільтер для всіх полів
  //   console.log("FRtable.js/preparedFilterData= ", preparedFilterData);

  //** Сторінки */ //https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd
  const [page, setPage] = useState(1); //Номер текучої сторінки
  const { slice, range } = useTable(workData, page, rowsPerPage); //
  //   console.log("RTable/slice=", slice);

  //==*п Сортування */
  const handleSorting = (sortField, sortOrder) => {
    //--- Для встановлення початкового сортування
    if (sortOrder === "default") {
      sortOrder = "asc";
      sortField = "_nrow";
    }
    //--- Саме сортування
    if (sortField) {
      const sorted = [...workData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setWorkData(sorted);
    }
  };

  //--- Задає режим сортування
  const handleSortingChange = (accessor) => {
    console.log("RTable.js/handleSortingChange/accessor=", accessor);
    const sortOrder =
      //   accessor === sortField && order === "asc" ? "desc" : "asc";
      accessor === sortField && order === "asc"
        ? "desc"
        : order === "desc"
        ? "default"
        : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    // console.log("RTable.js/handleSortingChange/sortOrder=", sortOrder);
    handleSorting(accessor, sortOrder);
  };
  //==*к Сортування */

  //== Пошук(search)/фільтер-по всіх полях зразу */
  const seachAllFilds = (e) => {
    const searchValue = e.target.value;
    if (lengthSearhValue === 0) {
      setBeforSeachData(workData);
    }
    const rows = beforSeachData;

    // console.log("seachAllFilds/searchValue=", searchValue + "/ rows", rows);
    if (rows.length > 0) {
      const attributes = Object.keys(rows[0]); //Це рядок заголовку

      const nowData = [];
      //-- Цикл по рядках
      for (const current of rows) {
        //Цикл по колонках
        for (const attribute of attributes) {
          //Відсіюємо поля по яких не робиться пошук
          if (
            attribute === "id" ||
            attribute === "_nrow" ||
            attribute === "_selected"
          ) {
            continue; //пропустити поле
          }
          //   const value = current[attribute];
          const value = String(current[attribute]).toLowerCase(); //переводимо значення поля у нижній регістр
          //порівнюємо значення поля із пошуком, переводеним у нижній регістр
          if (value.includes(searchValue.toLowerCase())) {
            nowData.push(current);
            break; //вихід з внутрішнього циклу
          }
        }
      }
      setLengthSearhValue(searchValue.length);
      setWorkData(nowData);
    }
  };

  //== Вибір/Selected / Записуємо селект(true/false) в _selected роточого масиву(workData) */
  const selectRows = (e) => {
    // console.log("RTable.js/selectRows/e.target=", e.target);
    const nRow = Number(e.target.id); //id-Це DOM(<td id="1"> Я йому присвоюю значення БД=_nrow)

    //--- Формуємо масив з індексами відмічених записів (setSelectedRow) --------------------
    let copyArray = [...selectedRows]; //Копія робочого масиву обєктів
    const selectIndex = copyArray.findIndex((item) => item === nRow); //id-це id HTML DOM елемента (в нашому випадку:id={_nrow})
    // console.log("RTable.js.js/selectRows/selectIndex=", selectIndex);
    if (selectIndex === -1) {
      copyArray.push(nRow); //Додаємо в масив
      //   console.log("RTable.js.js/addSelecrToRbTable/nRow=", nRow);
    } else copyArray.splice(selectIndex, 1); //Якщо вже є в масиві то видаляємо
    // console.log("RTable.js.js/selectRows/copyArray=", copyArray);
    //
    setSelectedRows(copyArray); //Запмс в масив

    //--- Запишемо селект(true/false) в _selected роточого масиву(workData) --------
    let selectData = [...workData]; //Копія робочого масиву обєктів

    //https://www.geeksforgeeks.org/how-to-modify-an-objects-property-in-an-array-of-objects-in-javascript/
    const targetObj = selectData.find((obj) => obj._nrow === nRow); //Шукажмо запис по _nrow=nRow
    // console.log("RTable.js.js/selectRows/targetObj=", targetObj);
    if (targetObj) {
      const newSelect = !targetObj._selected;
      targetObj._selected = newSelect;
      setWorkData(selectData);
    }
  };

  //--- Вибір/Selected (всі)
  const onSelectAll = () => {
    let selectData = [...workData]; //Копія робочого масиву обєктів
    const temp = selectData.map((data, idx) => {
      if (selectedAllRows) data._selected = false;
      else data._selected = true;
      setWorkData(selectData);
    });
    //
    setSelectedAllRows(!selectedAllRows);
    setSelectedRows([]);
  };

  //== Фільтр множинний */
  //--- Формує (true/false) для стилю шоб показувати іконку фільтру біля назви в шапці, якщо є заданий фільтр по цьому полю
  const clasThFilter = (accessor) => {
    let tempFilterData = [...filterData]; //Копія робочого масиву обєктів
    const targetObj = tempFilterData.find((obj) => obj.accessor === accessor); //Шукажмо запис
    //
    if (targetObj && targetObj.filterFirst.length > 0) {
      return true;
    } else return false;
  };

  //--- Apply/Застосувати //Визначає масив даних, які відповідають фільтрам по всіх полях (filterData)
  const applyFilters = () => {
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
    };
    //--- Ф-ція порівняння 2-х змінних з операторм,який є в змінній
    function doCompare(x, y, op) {
      const check = operators[op] ?? (() => false);

      if (check(x, y)) {
        return true;
      } else {
        return false;
      }
    }
    //--- Ф-ція перетворення типів у відповідності до заданих типиві таблиці і у нижній регістр
    const valToType = (value, type = "string") => {
      if (type == "number") return parseFloat(value);
      if (type == "date") return Date.parse(value);
      return String(value).toLowerCase(); //переводимо значення поля у нижній регістр
    };

    //--- Початок фільтруівання
    setIsDropdownFilter(false); //Закриваєм випадаюче вікно фільтрів
    // console.log("RTable.js.js/applyFilters/filterData=", filterData);
    if (filteredIcon === "none") {
      setBeforFilterData(workData); //Для відкату
    }
    //
    const tempWorkData = [...workData];
    // console.log("RTable.js.js/applyFilters/workData=", workData);
    const nowData = [];
    //*** Цикл по рядках
    // const attributes = Object.keys(tempWorkData[0]); //Це рядок заголовку(масив)
    // console.log("RTable.js.js/ApplyFilters/attributes=", attributes);
    let tempFilterData = [...filterData]; //Копія робочого масиву обєктів
    // console.log("RTable.js.js/ApplyFilters/tempFilterData=", tempFilterData);
    for (const current of tempWorkData) {
      //   console.log("RTable.js.js/ApplyFilters/for1/currentRow=", current);
      //++++ Принцип виходу з атрибуту(for2) при невідповідностях
      //Цикл по колонках
      let rowFilterted = false;
      for (const rowColumn of tempFilterData) {
        const attribute = rowColumn.accessor;
        // console.log("RTable.js.js/ApplyFilters/for2/attribute=", attribute);
        // break;

        // Чи є не пустий фільтр по цьоиу полю в масиві фільтрів
        const targetObj = tempFilterData.find(
          (obj) => obj.accessor === attribute,
        );

        //===============================
        if (targetObj && targetObj.filterFirst.length > 0) {
          //   console.log("RTable.js.js/ApplyFilters/for2/attribute=", attribute);
          const filterRow = `${targetObj.comparisonFirst}/${targetObj.filterFirst}/${targetObj.logical}/${targetObj.comparisonLast}/${targetObj.filterLast}`;
          //   console.log("RTable.js.js/ApplyFilters/for2/targetObj: ", targetObj);
          //   console.log("RTable.js.js/ApplyFilters/for2/filterRow: ", filterRow);

          //--- Задаєм змінну типу поля
          const valueType =
            targetObj.type === undefined ? "string" : targetObj.type; //Тип змінної, якщо не заданий то "string"
          //--- Перетворюємо у робочі змінні у вказаний тип і у нижній регістр
          const valueData = valToType(current[attribute], valueType);
          const filterFirst = valToType(targetObj.filterFirst, valueType);
          const filterLast = valToType(targetObj.filterLast, valueType);
          //   console.log(
          //     "RTable.js.js/ApplyFilters/filterFirst=",
          //     filterFirst + " /valueData=",
          //     valueData,
          //   );
          //   console.log(
          //     "RTable.js.js/ApplyFilters/typeof/type_filterFirst=",
          //     typeof filterFirst + "/type-valueData=",
          //     typeof valueData,
          //   );

          //https://stackoverflow.com/questions/66267093/how-to-implement-a-variable-operator-in-javascript
          //doCompare-ф-ція що повертає результат порівняння 2-х змінних де третя є самим оператор порівняння("><=...")
          //filterFirst

          //   doStuff(4, 2, ">")=true
          let compareFirst = false;
          if (valueType === "number" || valueType === "date") {
            compareFirst = doCompare(
              valueData,
              filterFirst,
              targetObj.comparisonFirst,
            );
          } else compareFirst = valueData.includes(filterFirst.toLowerCase());
          if (compareFirst) {
            rowFilterted = true;
            console.log(
              "RTable.js.js/applyFilters/iFcompareFirst/filterRow: ",
              filterRow + " /current._nRow:",
              current._nRow,
            );
          }

          //--- Якщо є filterLast.length
          if (filterLast.length > 0) {
            // console.log("RTable.js.js/applyFilters/Last/filterRow=", filterRow);

            let compareLast = false;
            if (valueType === "numeric" || valueType === "date") {
              compareLast = doCompare(
                valueData,
                filterLast,
                targetObj.comparisonLast,
              );
            } else compareLast = valueData.includes(filterLast.toLowerCase());
            // console.log(
            //   "RTable.js.js/applyFilters/compareLast=",
            //   compareLast + " /valueType=",
            //   valueType,
            //   +" /valueData=",
            //   valueData,
            //   +" /filterLast=",
            //   filterLast,
            // );
            if (compareLast) {
              console.log(
                "RTable.js.js/applyFilters/(compareLast)/current._nRow:",
                current._nRow,
              );

              //Варіанти: (&&-> First &&Last)1-додаєм якщо обидва== true -> решта НІ
              //          (||-> First|| Last)-додаєм, якщо хоч один = true -> а так як compareLast = true, то додаєм всі
              //          (First = false || Last = true) 4-додаєм всі

              // порівнюємо тільки compareFirst, бо compareLast = true
              if (targetObj.logical === "&&") {
                if (compareFirst) rowFilterted = true;
                else {
                  rowFilterted = false; //Має бути бо за For при rowFilterted = true; зробиться Push
                  break; //(filterFirct=false && filterLast==true) Отже це поле випадає а значить і весь запис випадає, бо поля порівнюються як &&
                }
              } else rowFilterted = true; // Якщо не && то При || додаєм всі бо compareLast = true
            }
            // !(compareLast)
            else if (compareFirst && targetObj.logical === "||") {
              console
                .log
                // "* RTable.js.js/ApplyFilters/!(compareLast)ElseiF(compareFirst &&/_nRow: ",
                // current._nrow + "/ targetObj.logical",
                // targetObj.logical,
                ();
              rowFilterted = true;
              // Варіанти:(First = true  || Last = false)-додаєм
              //          (First = false || Last = false)-ні
              //          (First = true  && Last = false)-ні
              //          (First = false && Last = false)-ні
            } else {
              //   console.log(
              //     "* RTable.js.js/ApplyFilters/!(compareLast)elseIfElse(compareFirst &&/_nRow: ",
              //     current._nrow,
              //   );
              rowFilterted = false; //Має бути бо за For при rowFilterted = true; зробиться Push
              break; //Бо filterFirct=false && filterLast=false, отже це поле випадає а значить і весь запис випадає, бо поля порівнюються як &&
            }
          } else if (!compareFirst) {
            rowFilterted = false; //Має бути бо за For при rowFilterted = true; зробиться Push
            break; //filterFirct=false, а filterLast нема. Отже це поле випадає а значить і весь запис випадає, бо поля порівнюються як &&
          }
        }
        //-- fEndor2
        // console.log(
        //   "RTable.js.js/ApplyFilters/Endfor2/_nRow: ",
        //   current._nrow + " /attribute:",
        //   attribute,
        // );
      }
      //--- Endfor1
      //   console.log("RTable.js.js/ApplyFilters/Endfor1*/_nRow: ", current._nrow);
      if (rowFilterted) {
        nowData.push(current); // Добавляємо текучий рядок в новий масив
        console.log(
          "RTable.js.js/ApplyFilters/Endfor1/if(rowFilterted)***/_nRow: ",
          current._nrow,
        );
      }
    }
    console.log("RTable.js.js/ApplyFilters/Endfor1/");
    setWorkData(nowData);
    setFilteredIcon("currentColor"); //Колір хаповнення іконки фільтру
  };

  //--- Очищаємо фільтр/Відкат даних до фільтру/Закриваємо випадаюче вікно
  const deleteFilterAll = () => {
    console.log("RTable.js/deleteFilterAll/");
    let tempFilterData = [...filterData];
    const temp = tempFilterData.map((data) => {
      data.comparisonFirst = "";
      data.filterFirst = "";
      data.logical = "";
      data.comparisonLast = "";
      data.filterLast = "";
    });
    setFilterData(tempFilterData); //Перезаписуєм масив фільтрів
    setWorkData(beforSeachData); //Відкат даних до фільтру
    setIsDropdownFilter(false); //Закриваємо випадаюче вікно
    setFilteredIcon("none"); //Іконка
    setWorkData(beforFilterData); //Відновлюємо робочу БД до фільтрування
  };
  //----------------------------------------------------

  return (
    //align-middle-текст по вертикалі посередині
    <div className={`${styleTableText} px-1 align-middle `}>
      {/* title- Заголовок вікна таблиці */}
      {typeof title !== "undefined" && (
        <div className="dark:text-hTextDark rounded-3xl border border-neutral-500 bg-tabThBgCol text-hText  dark:bg-tabThBgColD">
          {/* <h3 className=" px-4 text-left font-sans text-sm text-red-400 ">
          RTable.js / Table pagination
        </h3> */}
          <h1
            className={`${styleTitleText} dark:text-hTextD text-center font-bold text-hText`}
          >
            {title}
          </h1>
        </div>
      )}

      {/* Надбудова таблиці з елементами управління (пошук+...) */}
      {/* <div className="mb flex border-3 border-green-300 p-1 dark:bg-gray-900"> */}
      {/* <div className="my-1 flex flex-wrap items-center justify-start"> */}
      <div className="my-1 flex flex-wrap items-center justify-start">
        {/*  */}

        {/* Блок:селект/фільтер/шрифт */}
        <div className="flex flex-wrap items-center justify-start">
          {/*Інформація про вибрані рядки  */}
          {/* {typeof p_selected !== "undefined" && p_selected && ( */}
          <button
            className="ml-1 flex items-center rounded-lg border border-gray-300 bg-gray-50 p-1 dark:bg-gray-700"
            onClick={onSelectAll}
            title="Вибрати всі"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>

            <p title="Відмічено">
              : {selectedAllRows ? workData.length : selectedRows.length}
            </p>
          </button>

          {/* Фільтр: Інфа відфільтровані/ вся БД  */}
          {/* {typeof p_searchAllRows !== "undefined" && p_searchAllRows && ( */}
          {typeof (p_filtered !== "undefined") && p_filtered && (
            <div>
              <button
                //   className="ml-1 flex items-center rounded-lg border border-gray-300 bg-gray-50 p-1 dark:bg-gray-700"
                className="ml-1 flex items-center rounded-lg border border-gray-300 bg-gray-50 p-1 dark:bg-gray-700"
                onClick={() => setIsDropdownFilter(!isDropdownFilter)}
              >
                {/* Лійка */}
                <svg
                  // className="h-4 w-4 text-gray-500 dark:text-red-500"
                  className="h-4 w-4 text-red-500"
                  viewBox="0 0 24 24"
                  fill={filteredIcon}
                  // fill="none"
                  // fill="currentColor"
                  stroke="currentColor"
                  // stroke="red"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>

                <p title="Відфільтровано">: {workData.length}</p>
                <p title="Вся БД">/ {initialData.length}</p>
              </button>

              {/* Dropdown menu */}
              {isDropdownFilter && (
                <DropdownFilter
                  filterData={filterData}
                  setFilterData={setFilterData}
                  setIsDropdownFilter={setIsDropdownFilter}
                  styleTableText={styleTableText}
                  initialСolumns={initialСolumns}
                  applyFilters={applyFilters}
                  deleteFilterAll={deleteFilterAll}
                />
              )}
            </div>
          )}

          {/* Вибір шрифта */}
          <div className="ml-1 flex items-center rounded-lg border border-gray-300 bg-gray-50  p-1  dark:bg-gray-700">
            <svg
              className="h-5 w-5 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="4 7 4 4 20 4 20 7" />{" "}
              <line x1="9" y1="20" x2="15" y2="20" />{" "}
              <line x1="12" y1="4" x2="12" y2="20" />
            </svg>
            {/* <p>Шрифт:</p> */}
            <p>:</p>
            <select
              className="mx-1 block w-full  items-center border-gray-300 bg-gray-50 align-middle  text-gray-900 hover:cursor-pointer focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
              className="block w-full items-center rounded-lg border border-gray-300 bg-gray-50 p-1 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
        )}
      </div>

      {/* Обгортка(Wraper)таблиці (для проокрутки і...)   border-3 border-green-300 */}
      <div
        className=" max-h-[--sH] w-full overflow-auto border border-neutral-500 text-center  text-gray-500 dark:text-gray-400 "
        style={{ "--sH": "calc(100vh - 250px)" }} //Створення style для h-
      >
        {/*border-collapse- обєднання границь ячейок "> */}
        <table className=" w-full table-auto">
          <thead
            className={`${styleTableText} sticky top-0  border-b border-neutral-500 bg-tabThBgCol text-tabThTexCol dark:border-neutral-500 dark:bg-tabThBgColD dark:text-tabThTexColD`}
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
                  : "";

                //  Створення className для фільтрування(іконка біля назви в шапці)
                const clasFilter = clasThFilter(accessor);

                return (
                  <th
                    // uppercase- текст у верхній регістр
                    className={`${styleTableText} border-r dark:border-neutral-500`}
                    key={accessor}
                  >
                    {/* <div className="flex justify-center divide-x divide-current text-center align-middle uppercase "> */}
                    <div className="flex justify-center text-center align-middle uppercase ">
                      <div className="flex uppercase ">
                        <button
                          className="flex"
                          onClick={
                            sortable
                              ? () => handleSortingChange(accessor)
                              : null
                          }
                        >
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
                              //   class="h-4 w-4 text-red-500"
                              className="h-4 w-4 "
                              viewBox="0 0 24 24"
                              fill="none"
                              // fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                            </svg>
                          )}
                        </div>
                      )}
                    </div>

                    {/*Dropdown menu  */}
                    {/* {typeof filtered !== "undefined" && filtered && (
                      <DropdownFilterMenu />
                    )} */}
                  </th>
                );
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
                // className="odd:bg-tabTrBgCol even:bg-tabTrBgEveCol hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD"
                className={`${
                  row._selected
                    ? // ? "bg-tabTrBgSelCol lg:hover:bg-tabTrBgHovCol  dark:bg-tabTrBgSelColD lg:dark:hover:bg-tabTrBgHovColD "
                      "bg-tabTrBgSelCol hover:bg-tabTrBgSelHovCol dark:bg-tabTrBgSelColD   dark:hover:bg-tabTrBgSelHovColD"
                    : "odd:bg-tabTrBgCol even:bg-tabTrBgEveCol hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD"
                }`}
                onClick={(e) => selectRows(e)}
              >
                {/* перебір полів */}
                {initialСolumns.map(({ accessor, type = "", align = "" }) => {
                  const tData = accessor === "index" ? rowIndex : row[accessor];
                  //   console.log("RTable.js/tbody/Сolumns.map/type=", type);

                  //   const clasTextAlign =
                  //     type == "number"
                  //       ? "text-right"
                  //       : type == "date"
                  //       ? "text-center"
                  //       : "text-left";
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
                      : "text-left";

                  return (
                    <td
                      id={row._nrow}
                      key={accessor}
                      className={`${styleTableText} ${clasTextAlign} text-tabTrTexCol dark:text-tabTrTexColD`}
                    >
                      {tData}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          {/*  */}
          <tfoot
            className={`${styleTableText} sticky bottom-0 border-t border-neutral-500 bg-tabThBgCol text-gray-700 dark:border-neutral-500 dark:bg-tabThBgColD dark:text-tabThTexColD`}
          >
            <tr>
              {/* <th colSpan="8" className="text-center">
                Всього
              </th> */}
            </tr>
            <tr>
              <th className={`${styleTableText}`}>40</th>
              <th className={`${styleTableText}`}>40</th>
              <th className={`${styleTableText}`}>40</th>
              <th className={`${styleTableText}`}>40</th>
              <th className={`${styleTableText}`}>40</th>
              <th className={`${styleTableText}`}>40</th>
            </tr>
          </tfoot>
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
  );
}
