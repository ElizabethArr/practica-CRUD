import Link from "next/link";
import { useRouter } from "next/router"; // Importamos useRouter
import { useUsers } from "./useUsers";

const UsersPage = () => {
  const { users, deleteUser } = useUsers(); // Usamos el hook para obtener la lista de usuarios
  const router = useRouter(); // Inicializamos useRouter para la navegación

  // Función para manejar la edición del usuario
  const handleEdit = (id: number) => {
    router.push(`/users_edit?id=${id}`); // Redirigimos a la página de edición pasando el ID del usuario como query param
  };

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
              <th>Gender</th>
              <th>Age</th>
              <th>Role</th>
              <th>Phone</th>
              <th>RFC</th>
              <th>Actions</th> {/* Agregamos una columna para las acciones */}
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
                <td>{user.rfc}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>Eliminar</button> {/* Botón para eliminar */}
                  <button onClick={() => handleEdit(user.id)}>Editar</button> {/* Botón para editar */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersPage;
