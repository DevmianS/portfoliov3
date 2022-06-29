// import { Fragment, useEffect } from 'react';
import { FC } from "react";
import classes from "./CardGlass.module.scss";
interface Props {
  corner?: boolean;
  className?: string;
  children: any;
  onClick?: any;
}

const CardGlass: FC<Props> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${classes["card--glass"]} ${
        props.className ? props.className : ""
      } ${props.corner && classes.corner}`}
    >
      {props.children}
    </div>
  );
};

export default CardGlass;
