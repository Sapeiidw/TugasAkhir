import Link from "next/link";
import React from "react";

type Props = {};

const Guest: React.FC<Props> = (props) => {
  return (
    <>
      <Link href={"/"}>
        <img src="/icons/InPOSery.svg" alt="guestLogo" className="guestLogo" />
      </Link>
      {props.children}
    </>
  );
};

export default Guest;
