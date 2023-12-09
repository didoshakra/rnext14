/** @type {import('tailwindcss').Config} */
module.exports = {
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
        bodyText: "var(--color-text)", //
        bodyTextD: "var(--color-textD)",
        bodyBg: "var(--color-bodyBg)",
        bodyBgD: "var(--color-bodyBgD)",
        infoMsg: "var(--color-errorMsg)",
        errorMsg: "var(--color-errorMsg)",
        errorMsgD: "var(--color-errorMsgD)",
        eclipseBg: "var(--color-bodyeclipseBg)", //Затемнення екрану

        //--- iconT /Table,Form,Card,
        iconT: "var(--color-iconT)", //"#f64532",
        iconTD: "var(--color-iconTD)", //"#f64532",
        // iconTHov: "var(--color-iconTHov)", //"#6B8E23", //Поки не використав
        // iconTHovD: "var(--color-iconTHovD)", //"#6B8E23", //Поки не використав
        // iconTBorder: "var(--color-iconTBorder)", //"#E7F4E0", // "#f64532",
        // iconTBorderD: "var(--color-iconTBorderD)", //"#E7F4E0", // "#f64532",
        // iconTBgHov: "var(--color-iconTBgHov)", //"#E7F4E0",
        // iconTBgHovD: "var(--color-iconTBgHovD)", //"#E7F4E0",
        // iconTHovBgCol: "var(--color-iconTHovBgCol)", // "#82AE46", //Іконки
        // iconTHovBgColD: "var(--color-iconTHovBgColD)", //"#fff", //
        // iconT1: "var(--color-iconT1)", //"var(--color-bodyeclipseBg)", //"black",
        // iconT1D: "var(--color-iconT1D)", // "black",   iconTHov: "var(--color-iconTHov)", //"#6B8E23", /

        //--  IconH /hesder(main,drawer,) --------------------------------------------
        IconH: "var(--color-IconH)", //1 "#82AE46", "rgba(23,25,25,1)",
        IconHD: "var(--color-IconHD)", //"#9de160", //"#6B8E23", //1 "#82AE46", "rgba(23,25,25,1)",
        IconHHov: "var(--color-IconHHov)",
        IconHHovD: "var(--color-IconHHovD)", //"red",
        IconHBg: "var(--color- IconHBg)", //"rgba(65,69,69,1)",
        IconHBgD: "var(--color- IconHBgD)", //"rgba(65,69,69,1)",
        IconHBgHov: "var(--color-IconHBgHov)", //"#C9DFA7",
        IconHBgHovD: "var(--color-IconHBgHovD)", //"#E8EFD3",

        //-- headTape --------------------------------------------
        hTapeText: "var(--color-hTapeText)",
        hTapeTextD: "var(--color-hTapeTextD)", //"#9de160", //"#82AE46",
        hTapeBg: "var(--color-hTapeBg)", //"#82AE46", //1 "#82AE46",
        hTapeBgD: "var(--color-hTapeBgD)", //"rgba(65,69,69,1)",
        // hTapeTextHov: "var(--color-hTapeTextHov)",
        // hTapeTextHovD: "var(--color-hTapeTextHovD)",
        // hTapeTextBgHov: "var(--color-hTapeTextBgHov)",
        // hTapeTextBgHovD: "var(--color-hTapeTextBgHovD)",

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

        //-- menu / + Всі випадаючі з head меню ???
        menuBorder: "var(--color-menuBorder)", //"#DCDCDC", //1  "#82AE46",
        menuBorderD: "var(--color-menuBorderD)", //"#6B8E23", //1  "#82AE46",
        menuText: "var(--color-menuText)", // "#6B8E23", // "#82AE46",
        menuTextD: "var(--color-menuText)", // "#6B8E23", // "#82AE46",
        menuTextHov: "var(--color-menuTextHov)", //"#fff",
        menuTextHovD: "var(--color-menuTextHovD)", //"#fff",
        menuTextAct: "var(--color-menuTextAct)", //"read",
        menuTextActD: "var(--color-menuTextActD)", //"#fff",
        menuBg: "var(--color-menuBg)", //"#E7F4E0",
        menuBgD: "var(--color-menuBgD)", //"rgba(23,25,25,1)",
        menuBgHov: "var(--color-menuBgHov)", //"#82AE46",
        menuBgHovD: "var(--color-menuBgHovD)", // "#82AE46",

        //Текст випадаючого меню
        drawDropMenuBg: "var(--color-drawDropMenuBg)", //"#E7F4E0", // "#F4F4EB",
        drawDropMenuBgD: "var(--color-drawDropMenuBgD)", //"#E7F4E0", // "#F4F4EB",
        drawDropHr: "var(--color-drawDropHr)", // Лінії розмежування
        drawDropHrD: "var(--color-drawDropHrD)", // Лінії розмежування

        //-- table (Header)--------------------------------------------
        tabHTitle: "var(--color- tabHTitle)", //"#6B8E23", //1 "#82AE46",
        tabHeadTitleD: "var(--color- tabHTitleD)", //"#6B8E23", //1 "#82AE46",
        tabHText: "var(--color-tabHText)", //"#000",
        tabHTextD: "var(--color-tabHTextD)", // "#FFFF",
        tabHBg: "var(--color-tabHBg)", //"#f8f8f8;", //agGrid-шапка
        tabHBgD: "var(--color-tabHBgD)", //"#222628", //agGrid head "rgba(23,25,25,1)","#68686e",

        //-- table (th/tr/нижній підсумок) ------------------------------------------
        tabThBorder: "var(--color-tabThBorder)", //"#babfc7", //ag_Grid border(шапка)
        tabThBorderD: "var(--color-tabThBorderD)", //"#dde2eb", //ag_Grid border-secondery)(між рядками)
        tabTrBorder: "var(--color-tabTrBorder)", //"#babfc7", //ag_Grid border(шапка)
        tabTrBorderD: "var(--color-tabTrBorderD)", // "#dde2eb", //ag_Grid border-secondery)(між рядками)
        //
        tabThTexCol: "var(--color-tabThTexCol)", //"rgb(31 41 55)", //-Заголовок(text-gray-800)
        tabThTexColD: "var(--color-tabThTexColD)", //"#d3d3d3", //-Заголовок(text-gray-400)
        tabThBgCol: "var(--color-tabThBgCol)", //"rgb(214 211 209)", //(bg-stone-300)
        tabThBgColD: "var(--color-tabThBgColD)", // "rgb(31 41 55)", ///"rgb(156 163 175)",

        //Рядки
        tabTrTexColD: "var(--color-tabTrTexColD)", //"#FFF", //(text-slate-200)
        tabTrBgColD: "var(--color-tabTrBgColD)", //"rgb(55 65 81)", //(bg-gray-700)
        tabTrBgHovCol: "var(--color-tabTrBgHovCol)", //"rgb(231 229 228)", //При наведенні(bg-stone-200)
        tabTrBgHovColD: "var(--color-tabTrBgHovColD)", //"rgb(107 114 128)", //(bg-gray-500)
        tabTrBgEveCol: "var(--color-tabTrBgEveCol)", //"rgb(245 245 244)", //Парні(bg-stone-100)
        tabTrBgEveColD: "var(--color-tabTrBgEveColD)", // "rgb(75 85 99)", //(bg-gray-600)
        tabTrBgSelCol: "var(--color-tabTrBgSelCol)", // "#E8EFD3", //Вибрані рядки
        tabTrBgSelColD: "var(--color-tabTrBgSelColD)", // "#6B8E23", //
        tabTrBgSelHovCol: "var(--color-tabTrBgSelHovCol)", //"#C9DFA7", //
        tabTrBgSelHovColD: "var(--color-tabTrBgSelHovColD)", //"#82AE46", //

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
