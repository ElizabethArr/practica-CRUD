import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

export default function UsuariosPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    role: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    gender: "",
  });

  const validateGender = (value: string) => {
    const lowerValue = value.toLowerCase(); // Convertir a minúsculas
    if (value && lowerValue !== "f" && lowerValue !== "m") {
      return 'Gender must be "f", "m", or empty';
    }
    return "";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "gender") {
      const error = validateGender(value);
      setErrors({
        ...errors,
        gender: error,
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const genderError = validateGender(formData.gender);

    if (genderError) {
      setErrors({ ...errors, gender: genderError });
      return;
    }

    console.log("Formulario enviado:", formData);
    // Aquí podrías agregar lógica para enviar los datos a un servidor o procesarlos de otra manera
  };

  return (
    <div>
      <h1>Add User</h1>

      <Link href="/" passHref>
        <button style={{ marginRight: "10px" }}>Home</button>
      </Link>

      <Link href="/users" passHref>
        <button style={{ marginRight: "10px" }}>User</button>
      </Link>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
          {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
