import React, { useState } from "react";
import { Product } from "../../types";
import { Order, OrderIdItems } from "../../types/interfaces/Pos/Order";

type Props = {};

const test = (props: Props) => {
  // const [orderId, setOrderId] = useState<number>(0);
  // const [order, setOrder] = useState<Array<Order>>([]);
  // const [products, setProducts] = useState<Array<Product>>([]);
  // const [orderProducts, setOrderProducts] = useState<Array<any>>([{}]); // [{orderId: 1, productId: [1,2,3]}, {orderId: 2, productId: [1,2,3]}, ...]
  return (
    <div>
      <button>tambah product</button>
    </div>
  );
};

export default test;
