import { useEffect, useState } from "react";
import { getUsers } from "../api";
import UserList from "./UserList";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers().then((fetchedUsers) => {
      setUsers(fetchedUsers);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <UserList users={users} loading={loading} />
    </>
  );
};

export default Users;
