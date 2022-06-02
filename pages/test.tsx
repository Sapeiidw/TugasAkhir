import axios from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Modal from "../components/Modals/Modal";
import { authService, userService } from "../services";

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
      <h1>Nama</h1>
      <h1>Nama</h1>
    </>
  );
};

export default Test;
