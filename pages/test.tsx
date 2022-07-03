import axios from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Navigation, Notification } from "../components";
import OrderProductCard from "../components/Cards/OrderProductCard";
import Alert from "../components/Modals/Alert";
import Modal from "../components/Modals/Modal";
import { productAvatar } from "../services/product.service";

type Props = {};

const Test: React.FC<Props> = (props) => {
  // const fetcher = (url: string) => axios.post(url, {
  //     'email':'nando5@gmail.com',
  //     'password':'frado'
  // }).then(res=>res.data)

  // const fetcher = (url: string) =>
  //   axios.get('')

  // const { data, error } = useSWR(
  //   "http://localhost:4000/api/v1/auth/login",
  //   fetcher
  // );
  // if (error) return <div>{JSON.stringify(error)}</div>;
  // if (!data) return <div>Loading...</div>;
  // return <div>{JSON.stringify(data)}</div>;
  // return <Modal visible={true} title="Pala kau" />;

  // axios
  //   .get("http://localhost:4000/api/v1/auth/google", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "http://localhost:4000",
  //       // "Access-Control-Allow-Origin": "*",
  //     },
  //   })
  //   .then((res) => console.log(res));
  // userService.profile().then((resp) => console.log(resp));

  // const [showModal, setShowModal] = useState<boolean>(true);
  // const [deleting, setDeleting] = useState<boolean>(false);

  // const getProfile = async () => {
  //   try {
  //     const response = await authService.profile();
  //     setProfile(response.data);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // const deleteSembarang = () => {
  //   setDeleting(true);
  //   try {
  //     setTimeout(() => {
  //       setDeleting(false);
  //       setShowModal(false);
  //     }, 5000);
  //   } catch (error) {
  //     setDeleting(false);
  //   }
  // };

  // useEffect(() => {
  //   getProfile();
  // }, []);

  // let emailVerifiedStatus = "Belum Terverifikasi";
  // if (profile && profile.isEmailVerified) {
  //   emailVerifiedStatus = "Terverifikasi";
  // }
  // const avatar = () =>
  //   axios
  //     .get("http://localhost:4000/api/v1/users/profile", {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYXBlaWlkd0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCR5Q0Y2dU0wUlEuNi52c3FZdTY2dGwud2JxSnRjMlJyNXI2L3NmR2FBZUhKaVEyNU1RUWJlNiIsInJvbGUiOiJTdXBlckFkbWluIiwiaWF0IjoxNjUzOTg2NTU1LCJleHAiOjE2NTQwNzI5NTV9.LOVI_89uMNtp-9g9rB9lcN4Zwa95jZxHnu9OeHZc1Vc`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // const avatar = axios.get("http://api-dev.inposery.com/api/v1/users/avatar",{
  //   headers: {
  //     //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYXBlaWlkd0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCR5Q0Y2dU0wUlEuNi52c3FZdTY2dGwud2JxSnRjMlJyNXI2L3NmR2FBZUhKaVEyNU1RUWJlNiIsInJvbGUiOiJTdXBlckFkbWluIiwiaWF0IjoxNjUzOTg2NTU1LCJleHAiOjE2NTQwNzI5NTV9.LOVI_89uMNtp-9g9rB9lcN4Zwa95jZxHnu9OeHZc1Vc`,
  //     //       },
  // }).then((res) => {console.log(res)});}))
  const produk = [1, 2, 3, 5, 7, 8, 9, 0];
  const orders = [1, 2, 3, 5, 7, 8, 9, 0];
  const [order, setOrder] = useState(0);
  const [orderItem, setorderItem] = useState([]);
  const [open, setOpen] = useState(false);
  const handleDelete = (id: number) => {
    setOpen(true);

    <Alert
      visible={open}
      onCancel={() => setOpen(!open)}
      onOK={() => console.log(id)}
      title={"Success"}
      message="Data berhasil dihapus"
    />;
  };
  const [avatar, setAvatar] = useState();
  const [image, setImage] = useState();
  return (
    <>
      {/* <Modal
        onBack={() => null}
        visible={showModal}
        okText={deleting ? "Deleting..." : "Delete"}
        title="Modal"
        onOK={() => deleteSembarang()}
        onCancel={() => setShowModal(false)}
        okButtonProps={{ disabled: deleting }}
        cancelButtonProps={{ disabled: deleting }}
      /> */}
      {/* {avatar()} */}
      <button onClick={() => handleDelete(1)}>Nama</button>
      <button onClick={() => handleDelete(2)}>Nama</button>
      <button
        onClick={() => productAvatar(47).then((res) => setAvatar(res.data))}
      >
        avatar
      </button>
      <img src={avatar} alt="" />
      {produk} / {JSON.stringify(order)} / {JSON.stringify(orderItem)}
      <br />
      Select Order
      {orders.map((item, index) => (
        <button key={item} onClick={() => setOrder(item)}>
          Customer {item}
        </button>
      ))}
      <br />
      {produk.map((item, index) => (
        <button
          key={item}
          // onClick={() => setorderItem([...orderItem, { [order]: item }])}
          onClick={() => setorderItem([...orderItem, { o: order, p: item }])}
        >
          produk {item}
        </button>
      ))}
      <br />
      {orderItem.map((item, index) => item.p)}
      {/* <Notification /> */}
    </>
  );
};

export default Test;
