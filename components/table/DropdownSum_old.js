import { useState } from "react"

export default function DropdownFilter({
  sumData, //Дані фільтру(тільки ті поля по яких задано )
  setSumData,
  setIsDropdownSum,
  styleTableText,
  applySum, //Застосувати фільтр
  deleteFilterAll,
  filteredState, //Що у фільтрі є непусті записи
  setFilteredState, //Що у фільтрі є непусті записи
}) {
//   console.log("DropdownFilter.js/editRows/sumData=", sumData)
  //--- Selected / Записуємо селект(true/false) в _selected роточого масиву(workData)
  const editRows = (e) => {
    // console.log("DropdownFilter.js/editRows/e.target=", e.target)
    const nRow = Number(e.target.id) //id-Це DOM(<td id="1"> Я йому присвоюю значення БД=_nrow)
    const value = e.target.value
    setSumData({
      ...state,
      [evt.target.name]: value,
    })
    //Щукаємо рядок _nrow === nRow
    let tempData = [...sumData] //Копія робочого масиву обєктів
    //  //https://www.geeksforgeeks.org/how-to-modify-an-objects-property-in-an-array-of-objects-in-javascript/
    const row = tempData.find((obj) => obj._nrow === nRow) //Шукажмо запис по _nrow=nRow
    if (row) {
        setSumData(row)
    }
    //
    //--------------------------------------------------------------
  }

  return (
    <div
      style={{ "--sW": "calc(100vw - 20px)" }} //
      className="absolute left-0 z-10 md:max-w-[--sW] rounded-lg border border-fBorder bg-fBg dark:border-fBorderD dark:bg-fBgD md:left-auto w-full md:w-[40%]"
    >
      <div className="mt-1 px-1 w-full overflow-auto">
        <div className="flex justify-between ">
          {filteredState != 0 ? (
            <div className="flex justify-start space-x-1">
              <button
                className="hover:bg-fBgHov dark:hover:bg-fBgHovD rounded-full border border-fBorder dark:border-fBorderD"
                onClick={() => deleteFilterAll()}
                title="Очистити всі"
              >
                {/* смітник */}
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
              </button>
              <button
                className="hover:bg-fBgHov dark:hover:bg-fBgHovD rounded-full border border-fBorder dark:border-fBorderD"
                onClick={() => applySum()}
                title="Розрахувати"
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
              </button>
            </div>
          ) : (
            "-"
          )}

          <h1 className={`{styleTableText} font-bold uppercase text-fText dark:text-fTextD `}>Фільтри</h1>

          <button
            className="hover:bg-fBgHov dark:hover:bg-fBgHovD rounded-full border border-fBorder dark:border-fBorderD"
            onClick={(e) => setIsDropdownSum(false)}
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
        <div className=" w-ful  ">
          {/* <table className="table-fixed"> */}
          <table className="max-w-full table-auto overflow-auto w-[20%]">
            {/* <thead className="bg-gray-300  text-left uppercase  text- dark:bg-gray-500 dark:text-white"> */}
            <thead className="bg-fBg  text-left uppercase text-fText dark:bg-fBgD  dark:text-fTextD">
              <tr>
                {/* <th className={`${styleTableText} w-[10%]`}>Поле</th> */}
                <th className={`${styleTableText}`}>Поле</th>
                <th className="flex">
                  <svg
                    className="h-6 w-6 text-iconT dark:text-iconTD"
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
                  <svg
                    className="h-6 w-6 text-iconT dark:text-iconTD"
                    // class="h-4 w-4 text-red-500"
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
                  {/*>max  */}
                  <svg
                    className="h-6 w-6 text-iconT dark:text-iconTD"
                    // class="h-4 w-4 text-red-500"
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
                  <svg
                    className="h-6 w-6 text-iconT dark:text-iconTD"
                    // class="h-4 w-4 text-red-500"
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
                </th>
              </tr>
            </thead>
            <tbody>
              {sumData.map((row, index) => (
                <tr
                  id={row._nrow}
                  key={index}
                  className={`${styleTableText} -medium bg-fBg font-normal text-fText hover:text-fTextHov hover:bg-fBgHov dark:bg-fBgD dark:hover:text-fTextHovD dark:text-fTextD dark:hover:bg-fBgHovD `}
                  //   onClick={(e) => editRows(e)}
                >
                  <td id={row._nrow} className={`font-semibold  whitespace-nowrap`}>
                    {row.name}
                  </td>

                  <td id={row._nrow} className="text-iconT">
                    <select
                      //   className=" block  appearance-none items-center rounded border border-fBorder bg-fInputBg p-1 align-middle  leading-tight text-fText focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-fInputBgD dark:text-fTextD dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      className=" block  items-center bg-fInputBg p-1 align-middle  text-fText   dark:bg-fInputBgD dark:text-fTextD  "
                      onChange={(e) => editRows(e)}
                      value={row.comparison}
                    >
                      {/* <option value={row.comparison} disabled>
                      </option> */}
                      <option value="min">min</option>
                      <option value="max">max</option>
                      <option value="sum">sum</option>
                      <option value="середнє">середнє</option>
                    </select>
                    {/* {row.comparison} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
