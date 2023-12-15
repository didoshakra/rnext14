/** @type {import('tailwindcss').Config} */
module.exports = {
  // screens: {'sm':'640px','md': '768px','lg': '1024px',xl': '1280px',2xl': '1536px',}
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        openLevel: "#00f",
        // closeLevel: "#82AE46",
        1: "#82AE46",
        2: "#00f",
        3: "#13ff11",
        4: "#ac00ca",
        itemHover: "#f64532",
        mainColor: "red",

        //--Теми
        themeDefBg: "var(--color-themeDefBg)", //
        theme1Bg: "var(--color-theme1Bg)", //
        theme2Bg: "var(--color-theme2Bg)", //
        theme3Bg: "var(--color-theme3Bg)", //

        //-- Загальні
        bodyBg: "var(--color-bodyBg)",
        bodyBgD: "var(--color-bodyBgD)",
        infoMsg: "var(--color-errorMsg)",
        errorMsg: "var(--color-errorMsg)",
        errorMsgD: "var(--color-errorMsgD)",
        eclipseBg: "var(--color-bodyeclipseBg)", //Затемнення екрану

        //--- iconT /Table,Form,Card,
        iconT: "var(--color-iconT)", //"#f64532",
        iconTD: "var(--color-iconTD)", //"#f64532",

        //-- headTape --------------------------------------------
        hTapeText: "var(--color-hTapeText)",
        hTapeBg: "var(--color-hTapeBg)", //"#82AE46", //1 "#82AE46",
        hTapeBgD: "var(--color-hTapeBgD)", //"rgba(65,69,69,1)",

        //-- head --------------------------------------------
        hBorder: "var(--color-hBorder)", //"#DCDCDC", //1  "#82AE46",
        hBorderD: "var(--color-hBorderD)", //"#DCDCDC", //1  "#82AE46",
        hText: "var(--color-hText)", //1 "#82AE46",
        hTextD: "var(--color-hTextD)", //білий
        hTextHov: "var(--color-hTextHov)",
        hTextHovD: "var(--color-hTextHovD)",
        hTextImg: "var(--color-hTextImg)", //білий
        hTextImg1: "var(--color-hTextImg1)", //білий
        hBg: "var(--color-hBg)", // "#F4F4EB", "#fff", //білий
        hBgD: "var(--color-hBgD)",
        hBgHov: "var(--color-hBgHov)",
        hBgHovD: "var(--color-hBgHovD)",
        // hBgHovr: "var(--color-hBgHovr)",
        // hBgHovD: "var(--color-hBgHovrD)", //білий

        //Текст випадаючого меню
        drawDropMenuBg: "var(--color-drawDropMenuBg)", //"#E7F4E0", // "#F4F4EB",
        drawDropMenuBgD: "var(--color-drawDropMenuBgD)", //"#E7F4E0", // "#F4F4EB",
        drawDropHr: "var(--color-drawDropHr)", // Лінії розмежування
        drawDropHrD: "var(--color-drawDropHrD)", // Лінії розмежування

        //-- table (th/tr/нижній підсумок) ------------------------------------------
        tabThBorder: "var(--color-tabThBorder)", //"#babfc7", //ag_Grid border(шапка)
        tabThBorderD: "var(--color-tabThBorderD)", //"#dde2eb", //ag_Grid border-secondery)(між рядками)
        tabThBg: "var(--color-tabThBg)", //"rgb(214 211 209)", //(bg-stone-300)
        tabThBgD: "var(--color-tabThBgD)", // "rgb(31 41 55)", ///"rgb(156 163 175)",

        //Рядки
        tabTrBorder: "var(--color-tabTrBorder)", //"#babfc7", //ag_Grid border(шапка)
        tabTrBorderD: "var(--color-tabTrBorderD)", // "#dde2eb", //ag_Grid border-secondery)(між рядками)
        tabTrText: "var(--color-tabTrText)", //"#FFF", //(text-slate-200)
        tabTrTextD: "var(--color-tabTrTextD)", //"#FFF", //(text-slate-200)
        tabTrBg: "var(--color-tabTrBg)", //"rgb(55 65 81)", //(bg-gray-700)
        tabTrBgD: "var(--color-tabTrBgD)", //"rgb(55 65 81)", //(bg-gray-700)
        tabTrBgEve: "var(--color-tabTrBgEve)", //"rgb(245 245 244)", //Парні(bg-stone-100)
        tabTrBgEveD: "var(--color-tabTrBgEveD)", // "rgb(75 85 99)", //(bg-gray-600)
        tabTrBgHov: "var(--color-tabTrBgHov)", //"rgb(231 229 228)", //При наведенні(bg-stone-200)
        tabTrBgHovD: "var(--color-tabTrBgHovD)", //"rgb(107 114 128)", //(bg-gray-500)
        tabTrBgSel: "var(--color-tabTrBgSel)", // "#E8EFD3", //Вибрані рядки
        tabTrBgSelD: "var(--color-tabTrBgSelD)", // "#6B8E23", //
        tabTrBgSelHov: "var(--color-tabTrBgSelHov)", //"#C9DFA7", //
        tabTrBgSelHovD: "var(--color-tabTrBgSelHovD)", //"#82AE46", //

        // // Card - картинка колір
        // cardBg: "var(--color-hBgD)",
      },
    },
    keyframes: {
      slideHome: {
        "0%": {
          opacity: 100,
        },
        "45%": {
          opacity: 100,
        },
        "55%": {
          opacity: 0,
        },

        "100%": {
          opacity: 0,
        },
      },
      slideHome1: {
        "0%": {
          opacity: 100,
        },
        "100%": {
          opacity: 0,
        },
      },

      drawerDroop: {
        "0%": {
          transform: "translateХ(0)",
        },
        "100%": {
          transform: "translateY(200px)",
        },
      },
    },
    //   animation-name: slideHome; //ім'я секції анімації
    //   animation-duration: 5s; //протяжність анімації
    //   animation-delay: 5s; //Затримка анімації після протяжність анімації
    //   animation-timing-function: linear; //рівномірна зміна//??ease-in-out
    //   animation-iteration-count: infinite; //к-сть повторів/rinfinite нескінченно
    //   animation-direction: alternate; //Анімація змінює напрямок в кожному циклі
    // animation: {
    //   slideHome: "slideHome linear infinite 5s  alternate",
    //   slideHome1: "slideHome1 5s 5s ease-in-out  infinite alternate",
    //   drawerDroop: "drawerDroop ease-in-out",
    // },
    // backgroundImage: {
    //   "sort-up": "url('/public/images/table/up_arrow.png')",
    //   "sort-down": "url('/public/images/table/down_arrow.png')",
    //   "sort-default": "url('/public/images/table/default.png')",
    // },
  },
  plugins: [],
}
