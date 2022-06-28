import React from "react";
import style from "../../styles/Notification.module.css";
type Props = {
  visible: boolean;
};

const Notification: React.FC<Props> = (props) => {
  if (!props.visible) return <></>;
  else
    return (
      <>
        <ul className={style.notificationBox}>
          <li className={style.notificationItem}>
            <div className={style.circle}></div>
            <a href="#" className={style.notificationText}>
              Lorem ipsum dolor sit amet.
            </a>
            <p className={style.notificationDate}>1 jam</p>
          </li>
          <li className={style.notificationItem}>
            <div className={style.circle}></div>
            <a href="#" className={style.notificationText}>
              Lorem ipsum dolor sit amet.
            </a>
            <p className={style.notificationDate}>1 jam</p>
          </li>
          <li className={style.notificationItem}>
            <div className={style.circle}></div>
            <a href="#" className={style.notificationText}>
              Lorem ipsum dolor sit amet.
            </a>
            <p className={style.notificationDate}>1 jam</p>
          </li>
        </ul>
      </>
    );
};

export default Notification;
