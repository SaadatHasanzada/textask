import React from "react";
import "./button.css";
import { User } from "../../../types/User";
interface ButtonProps {
  text: string;
  flag?: boolean;
  setShowData?: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedUser?: React.Dispatch<React.SetStateAction<User | null>>;
  user?: User;
}

const Button: React.FC<ButtonProps> = ({
  text,
  flag,
  setShowData,
  setShowModal,
  setSelectedUser,
  user,
}) => {
  const handleClick = () => {
    if (flag && setShowData) {
      setShowData((prev: boolean) => !prev);
    } else if (!flag && setShowModal && setSelectedUser) {
      setShowModal(true);
      setSelectedUser(user || null);
    }
  };
  return (
    <button className={flag ? "cardButton" : ""} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
