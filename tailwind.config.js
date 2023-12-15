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

        /* -- Для меню вибору тем --*/
        themeDefBg: "#bef264",
        theme1Bg: "#a5b4fc",
        theme2Bg: "#f9a8d4",
        theme3Bg: "#fcd34d",
        theme4Bg: "#86efac",

        //-- Загальні
        bodyBg: "var(--color-pCol0)",
        bodyBgD: "#414545",
        infoMsg: "#13ff11",
        errorMsg: "#f21e08",
        errorMsgD: "#f21e08",
        eclipseBg: "rgba(36, 12, 12, 0.4)", //Затемнення екрану

        //--- iconT /Table,Form,Card,
        iconT: "#f64532",
        iconTD: "#f64532",

        //-- headTape --------------------------------------------
        hTapeText: "var(--color-pCol0)",
        hTapeBg: "var(--color-pCol6)",
        hTapeBgD: "rgba(65,69,69,1)",

        //-- head --------------------------------------------
        hBorder: "var(--color-pCol3)",
        hBorderD: "#DCDCDC", //1
        hText: "var(--color-pCol6)", //1 "#82AE46",
        hTextHov: "var(--color-pCol8)",
        hTextHovD: "#354d05",
        hTextImg: "var(--color-pCol1)",
        hTextImg1: "var(--color-pCol3)", //білий
        hBg: "var(--color-pCol1)", // "#F4F4EB", "#fff", //білий
        hBgD: "#171919",
        hBgHov: "var(--color-pCol3)",
        hBgHovD: "#615f5f",

        //Текст випадаючого меню
        drawDropMenuBg: "var(--color-pCol1)",
        drawDropMenuBgD: "#141313",
        drawDropHr: "var(--color-pCol3)", // Лінії розмежування
        drawDropHrD: "#615f5f",

        //-- table (th/tr/нижній підсумок) ------------------------------------------
        tabThBorder: "var(--color-pCol3)",
        tabThBorderD: "rgb(115 115 115)",
        tabThText: "var(--color-pCol9)",
        tabThTextD: "var(--color-pCol3)",
        tabThBg: "var(--color-pCol1)",
        tabThBgD: "#1f2937",

        //Рядки
        tabTrBorder: "#dde2eb",
        tabTrBorderD: "#dde2eb",
        tabTrText: "var(--color-pCol9)",
        tabTrTextD: "var(--color-pCol0)",
        tabTrBg: "#fff",
        tabTrBgD: "rgb(55 65 81)",
        tabTrBgEve: "var(--color-pCol0)",
        tabTrBgEveD: "#4b5563",
        tabTrBgHov: "var(--color-pCol1)",
        tabTrBgHovD: "#707885",
        tabTrBgSel: "var(--color-pCol2)", //Вибрані рядки
        tabTrBgSelD: "#677485",
        tabTrBgSelHov: "var(--color-pCol3)",
        tabTrBgSelHovD: "#8694a6",
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
