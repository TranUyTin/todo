import { createContext, useState } from "react";
import UserList from "./UserList";
import "./style.scss";
import { Button } from "@progress/kendo-react-buttons";
import AddUser from "./AddUser";
import NotifyDialog from "../Dialog";
export const NameContext = createContext("");

function User() {
  const [toggleDialog, setToggleDialog] = useState(false);
  const [isNotice, setIsNotice] = useState<
    { titleNotice: string; infoNotice: string } | undefined
  >();

  const onToggleDialog = (isToggle: boolean) => {
    setToggleDialog(isToggle);
  };

  const noticeDialog = (isNotice: {
    titleNotice: string;
    infoNotice: string;
  }) => {
    setIsNotice(isNotice);
  };

  return (
    <div className="user">
      <div className="user__header">
        <h2 className="user__heading">User Management</h2>
        <Button className="user__btn--add" onClick={() => onToggleDialog(true)}>
          Add User
        </Button>
      </div>
      {toggleDialog && (
        <AddUser onToggleDialog={onToggleDialog} noticeDialog={noticeDialog} />
      )}
      {isNotice && (
        <NotifyDialog
          title={isNotice.titleNotice}
          info={isNotice.infoNotice}
          onClose={() => setIsNotice(undefined)}
        />
      )}
      <UserList />
    </div>
  );
}
export default User;
