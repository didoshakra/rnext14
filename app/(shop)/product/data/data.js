export async function getAllProducts() {
  const promise = new Promise((res) => setTimeout(() => res(PRODUCTS), 1500));
  return await promise;
}

export async function getProductById(id) {
  const a = parseFloat(id);
  const promise = new Promise((res) => {
    setTimeout(() => res(PRODUCTS.find((x) => x.id === parseFloat(id))), 1500);
  });
  return await promise;
}
export async function getAllProductsPromotion() {
  const promise = new Promise((res) =>
    setTimeout(() => res(PRODUCTS_ROMOTION), 1500),
  );
  return await promise;
}

export async function getProductPromotionById(id) {
  const a = parseFloat(id);
  const promise = new Promise((res) => {
    setTimeout(
      () => res(PRODUCTS_ROMOTION.find((x) => x.id === parseFloat(id))),
      1500,
    );
  });
  return await promise;
}

export const PRODUCTS = [
  {
    id: 1,
    title: "Перець",
    image: "/vegefoods/images/product-1.jpg",
    price: 128.0,
    discontProc: 30,
    description:
      "Вирощено на екологічно чистих полях України. Без ГМО і інших шкідливих добавок. Захищено сертифікатом якості № 132366",
  },
  {
    id: 2,
    title: "Полуниця",
    image: "/vegefoods/images/product-2.jpg",
    price: 120.0,
    discontProc: 0,
    description:
      "Вирощено на екологічно чистих полях України. Без ГМО і інших шкідливих добавок. Захищено сертифікатом якості № 132366",
  },
  {
    id: 3,
    title: "Зелена квасоля",
    image: "/vegefoods/images/product-3.jpg",
    price: 20.0,
    discontProc: 0,
    description:
      "Вирощено на екологічно чистих полях України. Без ГМО і інших шкідливих добавок. Захищено сертифікатом якості № 132366",
  },
  {
    id: 4,
    title: "Синя капуста",
    image: "/vegefoods/images/product-4.jpg",
    price: 20.0,
    discontProc: 30,
    description:
      "Вирощено на екологічно чистих полях України. Без ГМО і інших шкідливих добавок. Захищено сертифікатом якості № 132366",
  },
  {
    id: 5,
    title: "Помідори",
    image: "/vegefoods/images/product-5.jpg",
    price: 20.0,
    discontProc: 0,
    description:
      "Вирощено на екологічно чистих полях України. Без ГМО і інших шкідливих добавок. Захищено сертифікатом якості № 132366",
  },
  {
    id: 6,
    title: "Броколі",
    image: "/vegefoods/images/product-6.jpg",
    price: 20.0,
    discontProc: 0,
    description:
      "Вирощено на екологічно чистих полях України. Без ГМО і інших шкідливих добавок. Захищено сертифікатом якості № 132366",
  },
  {
    id: 7,
    title: "Морква",
    image: "/vegefoods/images/product-7.jpg",
    price: 20.0,
    discontProc: 0,
    description:
      "Вирощено на екологічно чистих полях України. Без ГМО і інших шкідливих добавок. Захищено сертифікатом якості № 132366",
  },
  {
    id: 8,
    title: "Фруктовий сік",
    image: "/vegefoods/images/product-8.jpg",
    price: 20.0,
    discontProc: 0,
    description:
      "Вирощено на екологічно чистих полях України. Без ГМО і інших шкідливих добавок. Захищено сертифікатом якості № 132366",
  },
  {
    id: 9,
    title: "Цибуля",
    image: "/vegefoods/images/product-9.jpg",
    price: 20.0,
    discontProc: 20,
  },
  {
    id: 10,
    title: "Яблука",
    image: "/vegefoods/images/product-10.jpg",
    price: 20.0,
    discontProc: 0,
    description:
      "Вирощено на екологічно чистих полях України. Без ГМО і інших шкідливих добавок. Захищено сертифікатом якості № 132366",
  },
  {
    id: 11,
    title: "Часкик",
    image: "/vegefoods/images/product-11.jpg",
    price: 20.0,
    discontProc: 0,
  },
  {
    id: 12,
    title: "Перець чілі",
    image: "/vegefoods/images/product-12.jpg",
    price: 20.0,
    discontProc: 0,
  },
]

export const PRODUCTS_ROMOTION = [
  //   mStan
  {
    id: 1,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/1.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 2,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/2.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 3,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/3.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 4,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/4.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 5,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/5.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 6,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/6.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 7,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/7.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 8,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/8.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 9,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/9.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 10,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/10.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 11,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/11.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 12,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/12.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 13,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/13.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 14,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/14.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 15,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/15.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 16,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/16.jpg",
    price: 20.0,
    discontProc: 10,
  },
  {
    id: 17,
    title: "Вино 'Мускат 0,75л'",
    image: "/images/mstan/promotions/17.jpg",
    price: 20.0,
    discontProc: 10,
  },
];


