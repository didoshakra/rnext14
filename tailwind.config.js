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

        //0-- Загальні
        bodyBg: "var(--color-pCol0)",
        bodyBgD: "#334155", // --color-pCol7: #334155;
        infoMsg: "#13ff11",
        infoMsgD: "#13ff11",
        errorMsg: "#f21e08",
        errorMsgD: "#f21e08",
        eclipseBg: "rgba(36, 12, 12, 0.4)", //Затемнення екрану

        //6-- headTape --------------------------------------------
        hTapeText: "var(--color-pCol0)",
        hTapeBg: "var(--color-pCol6)",
        hTapeBgD: "#0f172a", //--color-pCol9: #0f172a;

        //1-- form (Bg-для 2-х форм)-------
        fBg: "var(--color-pCol1)",
        fBgD: "#1e293b", //--color-pCol8: #1e293b;
        // fBg1: "var(--color-pCol0)",
        fBg1: "#ffff",
        fBg1D: "#334155", //--color-pCol7: #334155; fBorder: "var(--color-pCol4)",
        fBorderD: "#64748b", //--color-pCol5:#64748b;
        fText: "var(--color-pCol7)",
        fTextD: "var(--color-pCol2)",
        fTextHov: "var(--color-pCol8)",
        fTextHovD: "var(--color-pCol8)",
        fInputBg: "var(--color-pCol0)",
        fInputBgD: "#475569", //  --color-pCol6: #475569;
        fBgHov: "var(--color-pCol2)",
        fBgHovD: "var(--color-pCol1)",

        //2-- head --------------------------------------------
        hBg: "var(--color-pCol2)",
        hBgD: "#1e293b", //--color-pCol8: #1e293b;
        hBgHov: "var(--color-pCol3)",
        hBgHovD: "var(--color-pCol8)",
        hBorder: "var(--color-pCol3)",
        hBorderD: "#64748b", //--color-pCol5:#64748b;
        hText: "var(--color-pCol6)",
        hTextD: "var(--color-pCol3)",
        hTextHov: "var(--color-pCol8)",
        hTextHovD: "var(--color-pCol3)",
        hTextImg: "var(--color-pCol1)",
        hTextImg1: "var(--color-pCol3)",

        //3--Випадаючоге меню
        drawDropMenuBg: "var(--color-pCol1)",
        drawDropMenuBgD: "#1e293b", //--color-pCol8: #1e293b;
        drawDropHr: "var(--color-pCol3)", // Лінії розмежування
        drawDropHrD: "#475569", // --color-pCol6: #475569;

        //--- iconT /Table,Form,Card,
        iconT: "#f64532",
        iconTD: "#f64532",
        iconInfo: "#138611",
        iconInfoD: "#13ff11",

        //-- table (th/нижній підсумок) ------------------------------------------
        tabThBorder: "var(--color-pCol3)",
        tabThBorderD: "#64748b", //--color-pCol5:#64748b;
        // tabThBorderD: "#475569", //--color-pCol6;
        tabThText: "var(--color-pCol9)",
        tabThTextD: "var(--color-pCol3)",
        tabThBg: "var(--color-pCol1)",
        tabThBgD: "#1e293b", //--color-pCol8: #1e293b;
        tabBgHov: "var(--color-pCol2)",
        tabBgHovD: "var(--color-pCol7)",

        //-- table/tr Рядки
        tabTrBorder: "var(--color-pCol1)",
        tabTrBorderD: "#dde2eb",
        tabTrText: "var(--color-pCol9)",
        tabTrTextD: "var(--color-pCol0)",
        tabTrBg: "#fff",
        tabTrBgD: "rgb(55 65 81)",
        tabTrBgEve: "var(--color-pCol0)",
        tabTrBgEveD: "#4b5563",
        tabTrBgHov: "var(--color-pCol1)",
        // tabTrBgHovD: "#707885",
        tabTrBgHovD: "var(--color-pCol4)",
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
