// import Link from 'next/link';
// import { useState } from 'react';

// export default function UsuariosPage() {

//   const useUsers = () => {
//     // Crear un estado para almacenar los usuarios
//     const [users, setUsers] = useState([
//       { id: 1, name: "Juan", email: "juan@example.com" },
//       { id: 2, name: "Maria", email: "maria@example.com" },
//       { id: 3, name: "Pedro", email: "pedro@example.com" }
//     ]);
  
//     // Retornar el array de usuarios para que pueda ser usado por otros componentes
//     return users;
//   };



//   return (
//     <div>
//       <h1>Users</h1>

//       <Link href="/" passHref>
//         <button style={{ marginRight: '10px' }}>Home </button>
//       </Link>

//       <Link href="/users_add" passHref>
//         <button>Add User</button>
//       </Link>

//     </div>
//   );

//   export default useUsers;
// }


// 

import Link from 'next/link'; 
import { useState } from 'react';
import { useUsers } from './useUsers';

// Hook separado
// export const useUsers = () => {
//   // Crear un estado para almacenar los usuarios
//   const [users, setUsers] = useState([
//     { id: 1, name: "Juan", email: "juan@example.com", gender:"M", age:20, role:"User",phone:"1234567891"},
//     { id: 2, name: "Maria", email: "maria@example.com", gender:"M", age:30, role:"User",phone:"09876543212" },
//     { id: 3, name: "Pedro", email: "pedro@example.com", gender:"M", age:40, role:"User",phone:"9870765432" }
//   ]);

//   // Retornar el array de usuarios para que pueda ser usado por otros componentes
//   return users;
// };

const UsersPage = () => {
  // Usamos el hook para obtener los datos de usuarios
  const users = useUsers();

  return (
    <>
      <div>
        <h2>List Users</h2>
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

      <Link href="/" passHref>
        <button style={{ marginRight: '10px' }}>Home</button>
      </Link>

      <Link href="/users_add" passHref>
        <button>Add User</button>
      </Link>
    </>
  );
}

export default UsersPage;
