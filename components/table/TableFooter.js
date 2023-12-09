//https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd
// TableFooter.jsx
// Переробив стилі з https://flowbite.com/docs/components/pagination/
//Величина шрифта успадковується від батька

import { useEffect } from "react";

// range- //Масив сторінок [1,2,3...]
// slice- //Рядки текучої сторінки (.slice-кусок масиву БД)
const TableFooter = ({
  range, //Масив сторінок [1,2...]
  setPage, //ф-ція призначення поточної сторінки
  page, //поточнf сторінка
  slice, //кусок робочої БД(workTable), що виводиться на поточній сторінці
  rowsPerPage, //к-сть рядків на сторінці
  setRowsPerPage, //ф-ція призначення к-сть рядків на сторінці
  maxRow, //максимальна к-сть рядків у робочої БД(workTable) з урахуванням всіх фільтрів(це не прчаткова БД)
}) => {
  // console.log("TableFooter/range=", range);
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage, rowsPerPage]);
  return (
    <nav className="my-2 flex flex-wrap items-center justify-between ">
      <div className="flex ">
        <div
          className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-2  leading-tight text-gray-500   dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
          title="Інформація про рядки"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <line x1="21" y1="10" x2="3" y2="10" />{" "}
            <line x1="21" y1="6" x2="3" y2="6" />{" "}
            <line x1="21" y1="14" x2="3" y2="14" />{" "}
            <line x1="21" y1="18" x2="3" y2="18" />
          </svg>
          {/* Показано: */}
          <span
            className="mx-2  text-gray-900 dark:text-white"
            title="Номери рядків, що показані"
          >
            {rowsPerPage * (page - 1)} -{" "}
            {rowsPerPage * page > maxRow ? maxRow : rowsPerPage * page}
          </span>
          of
          <span
            className="ml-2  text-gray-900 dark:text-white"
            title="Всього рядків"
          >
            {maxRow}
          </span>
        </div>
        {/*  */}
        <div
          className=" ml-1 flex  items-center rounded-lg border border-gray-300 bg-gray-50   px-2 dark:bg-gray-700"
          title="К-сть рядків на сторінку"
        >
          <div className=" flex  items-center rounded-lg border border-gray-300 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          {/* <p>На сторінці:</p> */}
          <select
            className="mx-1 flex w-12 items-center align-middle"
            defaultValue={rowsPerPage}
            onChange={(e) => setRowsPerPage(e.target.value)}
            title="К-сть рядків на сторінку"
          >
            <option value={rowsPerPage} disabled>
              {rowsPerPage}
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="1000000000">всі</option>
          </select>
        </div>
      </div>

      {/* pages */}
      <div className="text inline-flex -space-x-px ">
        <a
          className="flex items-center justify-center rounded-l-lg border border-gray-300 bg-white px-2 py-1 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
          title="Попередня"
        >
          <svg
            className="mr-2 h-3.5 w-3.5"
            aria_hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          {/* Previous */}
        </a>
        {range.map((el, index) =>
          range.length < 6 ||
          el == 1 ||
          el == Math.max(...range) ||
          // el == range.length ||
          el === page ||
          el === page + 1 ||
          el === page - 1 ? (
            <li
              key={index}
              className={`flex items-center justify-center border border-gray-300 px-2 leading-tight dark:border-gray-700 ${
                page === el
                  ? "bg-hbg text-white   "
                  : "bg-white  text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
              }  `}
              onClick={() => setPage(el)}
            >
              {el}
            </li>
          ) : el === page - 2 || el === page + 2 ? (
            <li
              key={index}
              className="flex  items-center justify-center border border-gray-300 bg-white px-2 leading-tight text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 "
            >
              ...
            </li>
          ) : (
            ""
          ),
        )}
        <a
          className="flex items-center justify-center rounded-r-lg border border-gray-300 bg-white px-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => {
            //   if (page < range.length) setPage(page + 1);
            if (page < Math.max(...range)) setPage(page + 1);
          }}
          title="Наступна"
        >
          {/* Next */}
          <svg
            className="ml-2 h-3.5 w-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default TableFooter;
