"use client";
import React from "react";
import buttonStyles from "./Button.module.css";

interface ButtonCompProps {
  link: string;
}

const ButtonComp: React.FC<ButtonCompProps> = ({ link }) => {
  const extension =
    "https://shrinkme.io/st?api=179aa6b5ed25cfb9edd2ac5947c5d1c734d18daa&url=";
  const handleClick = () => {
    window.open(extension + link, "_blank");
  };

  return (
    <div className={buttonStyles.buttonDiv}>
      <button type="button" className={buttonStyles.btn} onClick={handleClick}>
        Watch Now
      </button>
    </div>
  );
};

export default ButtonComp;
