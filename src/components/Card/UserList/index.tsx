import "./userList.css";
import User from "../User";
import { useAppSelector } from "../../../hooks/hooks";
import { User as UserType } from "../../../types/User";

const UserList = () => {
  const { users } = useAppSelector((state) => state.users);
  return (
    <div className="userList">
      {users?.map((user: UserType) => {
        return <User user={user} key={user?.id} />;
      })}
    </div>
  );
};

export default UserList;
