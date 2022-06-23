import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";

import { products } from "../../services/product.service";

import { Product, TableColumn } from "../../types";

type Props = {};

const Tables: React.FC<Props> = (props) => {
  const [product, setProduct] = useState<Array<Product>>([]);

  useEffect(() => {
    products(3)
      .then((res) => {
        setProduct(res.data.data);
        console.log(product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columnPost: TableColumn<Product>[] = [
    {
      title: "Nomor",
      key: "id",
      dataType: "numbering",
    },
    {
      title: "ID",
      key: "id",
    },
    {
      title: "Nama",
      key: "name",
    },
    {
      title: "Description",
      key: "description",
    },
    {
      title: "Action",
      key: "id",
      render: (value) => (
        <button onClick={() => console.log("id", value.id)}>Delete</button>
      ),
    },
  ];
  return (
    <>
      <Table columns={columnPost} data={product} />
    </>
  );
};

export default Tables;
