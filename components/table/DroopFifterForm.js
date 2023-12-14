//https://codesandbox.io/embed/form-functional-component-2lmxu?codemirror=1
//(input+select)Без react-hook-form
//css з //https://galaxies.dev/quickwin/react-tailwind-form
//20231128- показувати що вводити в залежності від typeData
//      - ввід в 2-а рядка фільтрів/якщо заповнений перший то показувати і другий???

import { useState } from "react" //Vers 7.0.X:<input {...register('test', { required: true })} />

export default function DroopFifterForm({
  filterDataRow, //Рядок, що коригується(в DropdownFilterForm)
  setIsDropdownFilterForm,
  filterData,
  setFilterData,
}) {
  const valueType = filterDataRow.type //Тип поля, що фільтрується
  const [state, setState] = useState({
    filterFirst: filterDataRow.filterFirst,
    filterLast: filterDataRow.filterLast,
    // logical: filterDataRow.logical,
    logical: filterDataRow.logical.length != 0 ? filterDataRow.logical : "or",
    // comparisonFirst: filterDataRow.comparisonFirst,
    comparisonFirst:
      filterDataRow.comparisonFirst.length != 0
        ? filterDataRow.comparisonFirst
        : valueType === "number" || valueType === "date"
        ? "=="
        : valueType === "boolean"
        ? "true"
        : "include",
    comparisonLast:
      filterDataRow.comparisonLast.length != 0
        ? filterDataRow.comparisonLast
        : valueType === "number" || valueType === "date"
        ? "=="
        : valueType === "boolean"
        ? "true"
        : "include",
    //
    // comparisonLast: filterDataRow.comparisonLast,
    // filterFirst: "",
    // filterLast: "",
    // logical: "",
    // comparisonFirst: "",
    // comparisonLast: "",
  })

  console.log("DroopFifterForm.js/valueType=", valueType)
  const [inputError, setInputError] = useState(null)

  const handleSubmit = () => {
    //Контроль
    if (state.filterFirst.length !== 0 && state.comparisonFirst.length !== 0) {
      // //   setInputError("Помилка! Не задані значення для 1-го фільтру");
      //   alert("Помилка! Не задані значення для 1-го фільтру");
      // } else {
      const nRow = filterDataRow._nrow
      //--- Записуємо filter в filtered масиву(filterData) --------
      let tempData = [...filterData] //Копія робочого масиву обєктів щоб рендерило зміни
      // const targetObj = filterData.find((obj) => obj._nrow === nRow); //не ререндерить зміни
      const targetObj = tempData.find((obj) => obj._nrow === nRow) //Шукажм рядок по _nrow=nRow
      if (targetObj) {
        // Записує безпосередньо в масив ????//Треба змінювати через setFilterData бо не ререндерить зміни
        //   targetObj.filter1 = `${state.comparisonFirst}${state.filterFirst}`;

        targetObj.comparisonFirst = state.comparisonFirst
        targetObj.filterFirst = state.filterFirst
        targetObj.logical = state.logical
        targetObj.comparisonLast = state.comparisonLast
        targetObj.filterLast = state.filterLast
        //   console.log("DroopFifterForm.js/handleEdit/filterData=", filterData);
        setFilterData(tempData) //ререндерить зміни
      }
    }
    setIsDropdownFilterForm(false)
    // }
  }

  function handleChange(evt) {
    const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
    // console.log("DroopFifterForm.js/handleChange/state=", state);
  }

  return (
    // <div className=" absolute z-10 w-full rounded-lg border border-gray-400  bg-gray-300 p-1 drop-shadow-md transition-transform duration-200 ease-out dark:border-gray-300 dark:bg-gray-200">
    <div className=" absolute z-10 w-full rounded-lg border border-gray-400  bg-gray-300 p-1  dark:border-gray-300 dark:bg-gray-200">
      <form className="space-x-1" onSubmit={handleSubmit}>
        <div className="flex justify-between space-x-3 text-center font-semibold uppercase">
          <button
            className="hover:bg-iconTHovBg dark:hover:bg-iconTHovBgD mx-2 flex items-center rounded-full border border-gray-400 px-1"
            //   className="rounded-full hover:bg-iconTHovBg dark:hover:bg-iconTHovBgD"
            //   onClick={() => handleEdit()}
            type="submit"
            title="Добавте значення"
          >
            <svg
              className="h-6 w-6 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="9 10 4 15 9 20" /> <path d="M20 4v7a4 4 0 0 1-4 4H4" />
            </svg>
          </button>

          {/* <header className="flex text-red-700 "> */}
          <header className="flex items-center text-black ">
            *<label className="px-1">{filterDataRow.name}</label> * (<label className="px-1">{valueType}</label>)
            {/* <label className="px-1">({filterDataRow.accessor})</label> */}
          </header>
          <button
            className="hover:bg-iconTHovBg dark:hover:bg-iconTHovBgD rounded-full border border-gray-400"
            onClick={(e) => setIsDropdownFilterForm(false)}
            title="Вийти без збереження"
          >
            <svg
              className="h-6 w-6 text-red-500"
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
        </div>{" "}
        {/* <div className=" flex max-w-xs space-x-1 overflow-auto md:max-w-md"> */}
        <div>
          {/* filterFirst */}
          <div className="flex space-x-1 overflow-auto">
            <label className="font-semibold text-gray-700">
              <div className=" text-center"> &gt;&lt;</div>{" "}
              <select
                // appearance-none-не показувати стрілку селе
                className="block  appearance-none items-center rounded border border-gray-400 bg-gray-50 p-1  align-middle  leading-tight text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                name="comparisonFirst"
                onChange={handleChange}
                value={state.comparisonFirst}
                required
              >
                {/* <option value=""></option> */}
                {valueType === "number" || valueType === "date" ? (
                  <>
                    <option value=">=">&gt;=</option>
                    <option value=">">&gt;</option>
                    <option value="==">==</option>
                    <option value="!=">!=</option>
                    <option value="<="> &lt;=</option>
                    <option value="<"> &lt;</option>
                  </>
                ) : valueType === "boolean" ? (
                  <>
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </>
                ) : (
                  <>
                    <option value="include">=in</option>
                  </>
                )}
              </select>
            </label>
            {/*  */}
            <label className="w-full font-semibold text-gray-700">
              <div className=" text-center">фільтр1</div>
              <input
                //leading-tight=line-height: 1.25-(висотою лінії) елемента.
                className=" block w-full  items-center rounded border border-gray-400 bg-gray-50 p-1  align-middle leading-tight  text-gray-900 dark:border-gray-600 dark:bg-gray-400 dark:text-white"
                id="filterFirst"
                required
                type="text"
                name="filterFirst"
                value={state.filterFirst}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* filterLast */}
          <div className="flex space-x-1 ">
            <label className=" font-semibold text-gray-700">
              <div className=" text-center">or/and</div>
              <select
                className=" block  appearance-none items-center rounded border border-gray-400 bg-gray-50 p-1 align-middle  leading-tight text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                name="logical"
                onChange={handleChange}
                value={state.logical}
              >
                {/* <option value=" "> </option> */}
                <option value="||">or</option>
                <option value="&&">and</option>
              </select>
            </label>
          </div>
          <div className="flex space-x-1 overflow-auto">
            {/*  */}
            <label className="font-semibold text-gray-700">
              <div className=" text-center"> &gt;&lt;</div>
              <select
                className="block  appearance-none items-center rounded border border-gray-400 bg-gray-50 p-1  align-middle  leading-tight text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                name="comparisonLast"
                onChange={handleChange}
                value={state.comparisonLast}
              >
                {/* <option value=""></option> */}
                {valueType === "number" || valueType === "date" ? (
                  <>
                    <option value="==">==</option>
                    <option value=">">&gt;</option>
                    <option value=">=">&gt;=</option>
                    <option value="!=">!=</option>
                    <option value="<="> &lt;=</option>
                    <option value="<"> &lt;</option>
                  </>
                ) : valueType === "boolean" ? (
                  <>
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </>
                ) : (
                  <>
                    <option value="include">=in</option>
                  </>
                )}
              </select>
            </label>
            <label className="w-full font-semibold text-gray-700">
              <div className=" text-center">фільтр2 </div>
              <input
                //leading-tight=line-height: 1.25-(висотою лінії) елемента.
                className="block w-full  items-center rounded border border-gray-400 bg-gray-50 p-1 align-middle leading-tight  text-gray-900 dark:border-gray-600 dark:bg-gray-400 dark:text-white"
                type="text"
                name="filterLast"
                value={state.filterLast}
                onChange={handleChange}
              />
            </label>
            {inputError && <div style={{ color: "red" }}>{inputError}</div>}
          </div>
        </div>
      </form>
      {/* <div className="flex max-w-xs overflow-auto px-2 text-red-500 dark:text-red-500 md:max-w-md"> */}
      <div className="px-2 text-red-500 dark:text-red-500">
        {state.comparisonFirst}&nbsp; {state.filterFirst} {state.logical}
        &nbsp; {state.comparisonLast} &nbsp; {state.filterLast}
      </div>
    </div>
    // </div>
  )
}
