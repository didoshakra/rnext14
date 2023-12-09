export async function getAllCategories() {
  const promise = new Promise((res) => setTimeout(() => res(CATEGORIES), 1500));
  return await promise;
}

export async function getAllSubCategories() {
  const promise = new Promise((res) =>
    setTimeout(() => res(SUB_CATEGORIES), 1500),
  );
  return await promise;
}

export async function getCategorieById(id) {
  const a = parseFloat(id);
  const promise = new Promise((res) => {
    setTimeout(
      () => res(CATEGORIES.find((x) => x.id === parseFloat(id))),
      1500,
    );
  });
  return await promise;
}

export const CATEGORIES = [
  {
    id: 1,
    title: "Всі товари",
    image: "/images/catalog/Smartfony-48.png",
    goods_quantity: 216020,
  },

  {
    id: 2,
    title: "Смартфони, ТВ і електроніка",
    image: "/images/catalog/Smartfony-48.png",
    goods_quantity: 5302,
  },
  {
    id: 3,
    // title: "Ноутбуки, планшети та комп'ютерна периферія",
    title: "Ноутбуки",
    image: "/images/catalog/Noutbooks.png",
    goods_quantity: 2734,
  },
  {
    id: 4,
    title: "Побутова техніка",
    image: "/images/catalog/PobutovaTexnika.png",
    goods_quantity: 3498,
  },
  {
    id: 5,
    title: "Напої і продукти",
    image: "/images/catalog/NapoiProducty.png",
    goods_quantity: 5435,
  },
  {
    id: 6,
    title: "Одяг, взуття та аксесуари",
    image: "/images/catalog/Odiag.png",
    goods_quantity: 151348,
  },
  {
    id: 7,
    title: "Товари для дому",
    image: "/images/catalog/ForHome.png",
    goods_quantity: 10773,
  },

  {
    id: 8,
    title: "Краса та здоров'я",
    image: "/images/catalog/KrasaZdorovia.png",
    goods_quantity: 14775,
  },
  {
    id: 9,
    title: "Товари для дітей",
    image: "/images/catalog/ForСhildren.png",
    goods_quantity: 4413,
  },
  {
    id: 10,
    title: "Спорт та туризм",
    image: "/images/catalog/Sports.png",
    goods_quantity: 4294,
  },
  {
    id: 11,
    title: "Інструменти та автотовари",
    image: "/images/catalog/Tools.png",
    goods_quantity: 2964,
  },
  {
    id: 12,
    title: "Дача, сад, город",
    image: "/images/catalog/Garden.png",
    goods_quantity: 680,
  },
  {
    id: 13,
    title: "Сантехніка та ремонт",
    image: "/images/catalog/Repair_Remont.png",
    goods_quantity: 2677,
  },
  {
    id: 14,
    title: "Товари для бізнесу",
    image: "/images/catalog/ForBisnes.png",
    goods_quantity: 224,
  },
  {
    id: 15,
    title: "Тактичне спорядження",
    image: "/images/catalog/Revolver.png",
    goods_quantity: 224,
  },
  {
    id: 16,
    title: "Канцтовари, офіс, книги",
    image: "/images/catalog/KancTovars.png",
    goods_quantity: 224,
  },
  {
    id: 17,
    title: "Товари для свята",
    image: "/images/catalog/ForSelebrations.png",
    goods_quantity: 766,
  },

  {
    id: 18,
    title: "Послуги та сервіси",
    image: "/images/catalog/Servise.png",
    goods_quantity: 28,
  },
];

export const SUB_CATEGORIES = [
  {
    id: 1,
    title: "Мобільні телефони",
    goods_quantity: 365,
  },

  {
    id: 2,
    title: "Аксесуари для телевізорів ",
    goods_quantity: 61,
  },
  {
    id: 3,
    title: "Телевізори ",
    goods_quantity: 133,
  },
  {
    id: 4,
    title: "Кабелі та адаптери ",
    goods_quantity: 614,
  },
  {
    id: 5,
    title: "Аксесуари до мобільних телефонів і смартфонів",
    goods_quantity: 2402,
  },
  {
    id: 6,
    title: "Портативна електроніка",
    goods_quantity: 32,
  },
  {
    id: 7,
    title: "Фото та відео ",
    goods_quantity: 404,
  },
  {
    id: 8,
    title: "Носимі гаджети ",
    goods_quantity: 375,
  },
  {
    id: 9,
    title: "Навушники та аксесуари ",
    goods_quantity: 486,
  },
  {
    id: 10,
    title: "Проекційне обладнання",
    goods_quantity: 20,
  },
  {
    id: 11,
    title: "Аудіотехніка",
    goods_quantity: 135,
  },
  {
    id: 12,
    title: "Повербанки та зарядні станції",
    goods_quantity: 299,
  },
];

