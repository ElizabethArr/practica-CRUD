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

  return { users, addUser }; // Retorna los usuarios y la función para agregar usuarios
};
