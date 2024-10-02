import { useState, useEffect } from "react";

// Definimos la interfaz del usuario
interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  age: string;
  role: string;
  phone: string;
  rfc: string;
}

// Hook personalizado para manejar usuarios
export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]); // Aquí guardamos los usuarios

  // Cargar usuarios desde el localStorage cuando se monta el componente
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Función para agregar un nuevo usuario
  const addUser = (newUser: Omit<User, "id">) => {
    const id = users.length + 1; // Genera un ID único
    const updatedUsers = [...users, { ...newUser, id }];
    setUsers(updatedUsers); // Agrega el nuevo usuario a la lista
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  // Función para eliminar un usuario
  const deleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers); // Actualiza la lista de usuarios
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // Actualiza el localStorage
  };

  // Función para editar un usuario existente
  const editUser = (updatedUser: User) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers); // Actualiza el usuario en la lista
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // Actualiza el localStorage
  };

  return { users, addUser, deleteUser, editUser }; // Retorna los usuarios y las funciones para manejar usuarios
};
