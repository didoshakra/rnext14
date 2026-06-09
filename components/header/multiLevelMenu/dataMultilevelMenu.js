
//
export const menuAdmin = [
  {
    id: 1,
    title: "Меню адміністратора",
    submenu: [
      {
        id: 2,
        title: "Довідники",
        submenu: [
          {
            id: 3,
            title: "Товари",
            url: "/shop/references/d_product",
          },

          {
            id: 4,
            title: "Бренди",
            url: "/shop/references/d_brand",
          },
          {
            id: 5,
            title: "Категорії товарів",
            url: "/shop/references/d_category",
          },
          {
            id: 6,
            title: "Клієнти",
            url: "/shop/references/d_client",
          },
        //   {
        //     id: 7,
        //     title: "Підрозділи",
        //     // url: "/shop/references/d_department",
        //   },
        //   {
        //     id: 8,
        //     title: "Одиниці вимірювання",
        //     // url: "/shop/references/d_ov",
        //   },
        //   {
        //     id: 9,
        //     title: "Користувачі",
        //     url: "/shop/references/d_user",
        //   },
        ],
      },


    ],
  },
]
export const menuDocuments = [
  {
    id: 1,
    title: "Документи",
    submenu: [
      {
        id: 2,
        title: "Продажі",
        submenu: [
          {
            id: 3,
            title: "Товарні чеки (doc_check_head)",
            url: "/shop/docs/doc_check_head",
          },
          //   {
          //     id: 4,
          //     title: "Товарний чек/товари(doc_check_products))",
          //     url: "/shop/docs/doc_check_products",
          //   },
        ],
      },
    ],
  },
];
