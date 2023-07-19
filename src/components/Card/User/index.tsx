import React from "react";
import "./user.css";
import Button from "../Button";
import { User as UserType } from "../../../types/User";
import UserDetail from "../UserDetail";
interface UserProps {
  user: UserType;
}
const User: React.FC<UserProps> = ({ user }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<UserType | null>(null);
  return (
    <>
      <div className="user">
        <img src={user?.photo} alt="person" />
        <div className="user-info">
          <p>{user?.name}</p>
          <span>{user?.nickname}</span>
        </div>

        <Button
          text="View"
          setShowModal={setShowModal}
          setSelectedUser={setSelectedUser}
          user={user}
        />
      </div>
      {showModal && (
        <>
          <UserDetail setShowModal={setShowModal} selectedUser={selectedUser} />
          <div className="overlay"></div>
        </>
      )}
    </>
  );
};

export default User;
