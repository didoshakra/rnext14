import { useState } from "react"
import DroopFifterForm from "./DroopFifterForm"

export default function DropdownFilter({
  filterData,
  setFilterData,
  applyFilters,
  setIsDropdownFilter,
  styleTableText,
  deleteFilterAll,
}) {
  const [isDropdownFilterForm, setIsDropdownFilterForm] = useState(false)
  const [filterDataRow, setFilterDataRow] = useState([]) //Рядок, що коригується(в DropdownFilterForm)

  //--- Selected / Записуємо селект(true/false) в _selected роточого масиву(workData)
  const editRows = (e) => {
    // console.log("DropdownFilter.js/editRows/e.target=", e.target);
    const nRow = Number(e.target.id) //id-Це DOM(<td id="1"> Я йому присвоюю значення БД=_nrow)

    //Щукаємо рядок _nrow === nRow
    let tempData = [...filterData] //Копія робочого масиву обєктів
    //  //https://www.geeksforgeeks.org/how-to-modify-an-objects-property-in-an-array-of-objects-in-javascript/
    const row = tempData.find((obj) => obj._nrow === nRow) //Шукажмо запис по _nrow=nRow
    if (row) {
      setIsDropdownFilterForm(true)
      setFilterDataRow(row)
    }
    //
    //--------------------------------------------------------------
  }

  //   const deleteFilterAll = () => {
  //     console.log("DropdownFilter.js/deleteFilterAll/");
  //     let tempData = [...filterData];
  //     const temp = tempData.map((data, idx) => {
  //       data.comparisonFirst = "";
  //       data.filterFirst = "";
  //       data.logical = "";
  //       data.comparisonLast = "";
  //       data.filterLast = "";
  //     });
  //     setFilterData(tempData);
  //   };

  return (
    // <div className="absolute left-0 z-10 mx-2 rounded-lg border border-gray-300  bg-gray-200  p-1 drop-shadow-md transition-transform duration-200 ease-out dark:border-gray-300 dark:bg-gray-400 md:left-auto">
    //drop-shadow-md-тінь
    <div
      style={{ "--sW": "calc(100vw - 20px)" }} //
      className="absolute left-0 z-10 mx-2 max-w-[--sW] rounded-lg border border-fBorder bg-fBg  p-1  dark:border-fBorderD dark:bg-fBgD md:left-auto"
      //   className="absolute left-0 z-10 mx-2 max-w-[100px] rounded-lg border border-gray-300  bg-gray-200  p-1  dark:border-gray-300 dark:bg-gray-400 md:left-auto"
    >
      <div className="mb-1 flex justify-between">
        <button
          className="hover:bg-fBgHov dark:hover:bg-fBgHovD rounded-full border border-fBorder dark:border-fBorderD"
          onClick={() => deleteFilterAll()}
          title="Очистити всі"
        >
          {/* кошик */}
          <svg
            // className="h-6 w-6 text-iconT dark:text-iconTD"
            className="h-6 w-6 text-blue-600 "
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
            <path stroke="none" d="M0 0h24v24H0z" /> <line x1="4" y1="7" x2="20" y2="7" />{" "}
            <line x1="10" y1="11" x2="10" y2="17" /> <line x1="14" y1="11" x2="14" y2="17" />{" "}
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />{" "}
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
          {/* плюс */}
          {/* <svg
            className="h-6 w-6 text-red-500"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />{" "}
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />{" "}
            <path d="M10 12l4 4m0 -4l-4 4" />
          </svg> */}
        </button>
        <button
          className="hover:bg-fBgHov  dark:hover:bg-fBgHovD  mx-2 flex items-center rounded-lg border border-fBorder px-1 text-center dark:border-fBorderD"
          onClick={() => applyFilters()}
          title="Застосувати фільтр"
        >
          {/* Enter */}
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
            <polyline points="9 10 4 15 9 20" /> <path d="M20 4v7a4 4 0 0 1-4 4H4" />
          </svg>
          {/* <h1 className={`{styleTableText} font-bold uppercase text-red-500 `}>
            Застосувати фільтри
          </h1> */}
          <h1 className={`{styleTableText} font-bold uppercase text-fText dark:text-fTextD `}>Фільтри</h1>
        </button>

        <button
          className="hover:bg-fBgHov dark:hover:bg-fBgHovD rounded-full border border-fBorder dark:border-fBorderD"
          onClick={(e) => setIsDropdownFilter(false)}
          title="Вийти без збереження"
        >
          {/* скасувати */}
          <svg
            className="h-6 w-6 text-iconT dark:text-iconTD"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokewinejoin="round"
          >
            {" "}
            <line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      {/* <div className="max-w-ful overflow-auto"> */}
      <div className="w-ful">
        {/* <table className="table-fixed"> */}
        <table className="max-w-full table-auto overflow-auto">
          {/* <thead className="bg-gray-300  text-left uppercase  text- dark:bg-gray-500 dark:text-white"> */}
          <thead className="bg-fBg  text-left uppercase text-fText dark:bg-fBgD  dark:text-fTextD">
            <tr>
              <th className={`${styleTableText} w-[40%]`}>Поле</th>
              {/* <th>Ключ</th> */}
              {/* <th className={`${styleTableText} w-24`}>&gt;=&lt;</th> */}
              <th className={`${styleTableText}`}>=</th>
              <th className={`${styleTableText}`}>Фільтр1</th>
              <th className={`${styleTableText}`}>Лог</th>
              <th className={`${styleTableText}`}>=</th>
              <th className={`${styleTableText}`}>Фільтр2</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((row, index) => (
              <tr
                id={row._nrow}
                key={index}
                className={`${styleTableText} -medium bg-fBg font-normal text-fText hover:text-fTextHov hover:bg-fBgHov dark:bg-fBgD dark:hover:text-fTextHovD dark:text-fTextD dark:hover:bg-fBgHovD`}
                onClick={(e) => editRows(e)}
              >
                <td
                  id={row._nrow}
                  //   className={`${styleTableText} font-semibold`}
                >
                  {row.name}
                </td>
                {/* <td
                id={row._nrow}
                className={`${styleTableText} font-semibold text-fText dark:text-fTextD`}
              >
                {row.accessor}
              </td> */}
                <td
                  id={row._nrow}
                  //   className={`${styleTableText} `}
                >
                  {row.comparisonFirst}
                </td>
                <td
                  id={row._nrow}
                  //   className={`${styleTableText} `}
                >
                  {row.filterFirst}
                </td>
                <td id={row._nrow} className={`${styleTableText} `}>
                  {row.logical}
                </td>
                <td
                  id={row._nrow}
                  //   className={`${styleTableText} `}
                >
                  {row.comparisonLast}
                </td>
                <td
                  id={row._nrow}
                  //   className={`${styleTableText} `}
                >
                  {row.filterLast}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Dropdown menu */}
      {isDropdownFilterForm && (
        <DroopFifterForm
          setIsDropdownFilterForm={setIsDropdownFilterForm}
          filterDataRow={filterDataRow}
          filterData={filterData} //масив фільтрів
          setFilterData={setFilterData}
        />
      )}
    </div>
  )
}
