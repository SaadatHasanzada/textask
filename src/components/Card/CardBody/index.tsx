import React from "react";
import "./card.css";
import UserList from "../UserList";
import Button from "../Button";
import { fetchAllUsers } from "../../../store/actions/user";
import { useAppDispatch } from "../../../hooks/hooks";
const CardBody: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showData, setShowData] = React.useState(false);

  React.useEffect(() => {
    void dispatch(fetchAllUsers(showData));
  }, [dispatch, showData]);
  return (
    <div className="card">
      <UserList />
      <Button
        text={showData ? "View Less" : "View All"}
        flag
        setShowData={setShowData}
      />
    </div>
  );
};

export default CardBody;
