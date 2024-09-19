import Link from "next/link";
import { useState } from "react";
import { useUsers } from "./useUsers";

const UsersPage = () => {
  // Usamos el hook para obtener los datos de usuarios
  const users = useUsers();

  return (
    <>
      <div>
        <h2>List Users</h2>

        <Link href="/" passHref>
        <button style={{ marginRight: "10px" }}>Home</button>
      </Link>

      <Link href="/users_add" passHref>
        <button>Add User</button>
      </Link>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender </th>
              <th>Age </th>
              <th>Role</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{user.role}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </>
  );
};

export default UsersPage;
