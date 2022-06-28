import React from "react";
import { NavigationToko } from "../index";

type Props = {};

const Pos: React.FC<Props> = (props) => {
  return (
    <>
      <NavigationToko />
      <main>{props.children}</main>
    </>
  );
};

export default Pos;
