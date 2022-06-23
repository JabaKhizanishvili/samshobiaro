import React from "react";
import { MainBtn } from "../MainBtn/MainBtn";
import "./ConsultBox.css";

export const ConsultBox = ({ content, number }) => {
  return (
    <div className="consult_box flex centered">
      <h2>{content}</h2>
      <MainBtn text={number} />
    </div>
  );
};
