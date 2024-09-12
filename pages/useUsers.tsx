import Link from 'next/link'; 
import { useState } from 'react';

// Hook separado
export const useUsers = () => {
  // Crear un estado para almacenar los usuarios
  const [users, setUsers] = useState([
    { id: 1, name: "Juan", email: "juan@example.com", gender:"M", age:20, role:"User",phone:"1234567891"},
    { id: 2, name: "Maria", email: "maria@example.com", gender:"M", age:30, role:"User",phone:"09876543212" },
    { id: 3, name: "Pedro", email: "pedro@example.com", gender:"M", age:40, role:"User",phone:"9870765432" }
  ]);

  // Retornar el array de usuarios para que pueda ser usado por otros componentes
  return users;
};
