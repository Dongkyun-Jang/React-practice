import React, { useState, useEffect } from "react";
import Usercard from "./Usercard";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setError(null);
      setUsers(null);

      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const filteredUsers = () => {
    setUsers(users.filter((user) => user.id === 1));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        <Usercard users={users} />
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
      <button onClick={filteredUsers}>id가1인 유저만 불러오기</button>
    </>
  );
}
