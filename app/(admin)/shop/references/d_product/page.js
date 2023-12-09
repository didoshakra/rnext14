"use client";
import { useEffect, useState } from "react";
import RTable from "@/components/table/RTable";

export default function Products() {
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async (res) => {
    await fetch("/api/shop/references/d_product")
      .then((res) => res.json())
      .then((data) => {
        setResData(data.data);
        // console.log("d_product/page/data.data.rows", data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // Колонки, що показуються
  const columns = [
    {
      label: "nR",
      accessor: "_nrow",
      sortable: false,
      minWith: "15px",
      With: "20px",
    },

    {
      label: "Id",
      accessor: "id",
      sortable: true,
      minWith: "15px",
      With: "100px",
    },
    {
      label: "Назва товару",
      accessor: "name",
      sortable: true,
      filtered: true,
      minWith: "150px",
      With: "200px",
    },
    {
      label: "ШтрихКод",
      accessor: "skod",
      type: "date",
      sortable: true,
      filtered: true,
      align: "center",
      minWith: "100px",
      With: "200px",
    },
    {
      label: "Категорія",
      accessor: "category",
      sortable: true,
      filtered: true,
      type: "boolean",
      minWith: "150px",
      With: "200px",
    },
    {
      label: "Ціна",
      accessor: "price",
      type: "number",
      sortable: true,
      filtered: true,
      minWith: "100px",
      With: "200px",
    },
  ];

  //  const columns = [
  //   {
  //     key: "name",
  //     label: "NAME",
  //   },
  //   {
  //     key: "role",
  //     label: "ROLE",
  //   },
  //   {
  //     key: "age",
  //     label: "AGE",
  //   },
  // ];

  const rows = [
    {
      key: "1",
      firstName: "Tony",
      lastName: "Reichert",
      role: "Developer",
      age: "35",
    },
    {
      key: "2",
      firstName: "Zoey",
      lastName: "Lang",
      role: "Designer",
      age: "22",
    },
    {
      key: "3",
      firstName: "Jane",
      lastName: "Fisher",
      role: "CEO",
      age: "29",
    },
    {
      key: "4",
      firstName: "William",
      lastName: "Howard",
      role: "Designer",
      age: "27",
    },
  ];

  //   console.log("d_product/page/resData", resData);
  return (
    // <main className="h-screen items-center justify-center">
    // <main className="max-h-full items-center justify-center">
    // <main className="mx-auto px-0 xl:px-8">
    <main className="mx-auto px-0 xl:px-2">
      {loading ? (
        <div>Отримання даних з бази даних...</div>
      ) : (
        <>
          <RTable
            initialData={resData}
            initialСolumns={columns}
            title={"DProducts"}
            // p_selected={true}//Завжди
            p_searchAllRows={true}
            p_filtered={true}
          />
        </>
      )}
    </main>
  );
}
