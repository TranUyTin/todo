import { useEffect, useState } from "react";
import userApi from "../../../api/userApi";
import { IUser } from "../../../interface/user";
import { Tooltip } from "@progress/kendo-react-tooltip";
import "./style.scss";
function UserList() {
  const [users, setUsers] = useState<Array<IUser>>([]);

  useEffect(() => {
    const fetchUserApi = async () => {
      const params = {};
      const response = await userApi.getAll(params);
      setUsers(response.data);
    };

    fetchUserApi();
  }, []);

  const handleDeleteUser = (id: number) => {
    userApi
      .delete(id)
      .then(() => {
        const updateItems = users.filter((user: IUser) => user.id !== id);
        setUsers(updateItems);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="table">
      <table className="table__user">
        <thead>
          <tr>
            <th>.No</th>
            <th>Full Name</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Is Admin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: IUser, index: number) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.status ? "Active" : "Deactive"}</td>
              <td>{user.createdAt}</td>
              <td>{user.updatedAt}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td className="table__actions">
                <Tooltip anchorElement="target" position="bottom">
                  <span
                    title="Edit"
                    className="todo__btn k-icon k-i-edit k-i-pencil"
                  ></span>
                </Tooltip>

                <Tooltip anchorElement="target" position="bottom">
                  <span
                    title="Delete"
                    className="todo__btn todo__btn--del k-icon k-i-delete"
                    onClick={() => handleDeleteUser(user.id)}
                  ></span>
                </Tooltip>

                <Tooltip anchorElement="target" position="bottom">
                  <span
                    title="Show Detail"
                    className="todo__btn k-icon k-i-information k-i-info"
                  ></span>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
