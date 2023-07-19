import React from "react";
import "./detail.css";
import close from "../../../assets/close.svg";
import { User } from "../../../types/User";
interface DetailProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUser: User | null;
}
const UserDetail: React.FC<DetailProps> = ({ setShowModal, selectedUser }) => {
  function handleClick() {
    setShowModal(false);
  }

  return (
    <div className="detail">
      <div className="detail-name">
        <img src={selectedUser?.photo} alt="person" />
        <p>{selectedUser?.name}</p>
        <span>{selectedUser?.position}</span>
      </div>

      <div className="detail-contact">
        <div>
          <p>Phone</p>
          <p>URL</p>
          <p>Email</p>
        </div>
        <div>
          <span className="phone">{selectedUser?.phone}</span>

          <a href="/">https://example.com</a>
          <a href="/"> {selectedUser?.email}</a>
        </div>
      </div>
      <button className="detailButton">Send Message</button>
      <img className="close" src={close} alt="close" onClick={handleClick} />
    </div>
  );
};

export default UserDetail;
