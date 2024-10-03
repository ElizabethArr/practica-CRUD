


import Link from "next/link";
import { useRouter } from "next/router";
import { useUsers } from "./useUsers";
import styles from './users.module.css'; // Asegúrate de que el nombre del archivo sea correcto

const UsersPage = () => {
  const { users, deleteUser } = useUsers();
  const router = useRouter();

  const handleEdit = (id: number) => {
    router.push(`/users_edit?id=${id}`);
  };

  return (
    <div className={styles.container}> {/* Aplica la clase contenedora */}
      <h2 className={styles.title}>List Users</h2> {/* Aplica la clase al título */}

      <div > {/* Aplica la clase al contenedor de botones */}
        <Link href="/" passHref>
          <button className={styles.button}>Home</button> {/* Aplica la clase al botón */}
        </Link>
        <Link href="/users_add" passHref>
          <button className={styles.button}>Add User</button> {/* Aplica la clase al botón */}
        </Link>
      </div>

      <table className={styles.table}> {/* Aplica la clase a la tabla */}
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID</th> {/* Aplica la clase a los encabezados */}
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>Email</th>
            <th className={styles.tableHeader}>Gender</th>
            <th className={styles.tableHeader}>Age</th>
            <th className={styles.tableHeader}>Role</th>
            <th className={styles.tableHeader}>Phone</th>
            <th className={styles.tableHeader}>RFC</th>
            <th className={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className={styles.tableCell}>{user.id}</td> {/* Aplica la clase a las celdas */}
              <td className={styles.tableCell}>{user.name}</td>
              <td className={styles.tableCell}>{user.email}</td>
              <td className={styles.tableCell}>{user.gender}</td>
              <td className={styles.tableCell}>{user.age}</td>
              <td className={styles.tableCell}>{user.role}</td>
              <td className={styles.tableCell}>{user.phone}</td>
              <td className={styles.tableCell}>{user.rfc}</td>
              <td className={styles.actions}>
                <button onClick={() => deleteUser(user.id)}>Eliminar</button> {/* Completa esta línea */}
                <button onClick={() => handleEdit(user.id)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
