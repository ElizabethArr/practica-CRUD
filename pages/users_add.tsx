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
    age: "",
    phone: "",
  });

  const validateGender = (value: string) => {
    const lowerValue = value.toLowerCase();
    if (value && lowerValue !== "f" && lowerValue !== "m") {
      return 'Gender must be "f", "m", or empty';
    }
    return "";
  };

  const validateAge = (value: string) => {
    const age = parseInt(value, 10);
    if (isNaN(age) || age < 18 || age > 60) {
      return "Age must be between 18 and 60";
    }
    return "";
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, ""); // Eliminar todo lo que no sea un número

    // Solo permitir números y limitar a 10 caracteres
    if (numericValue.length <= 10) {
      setFormData((prevData) => ({
        ...prevData,
        phone: numericValue,
      }));
    }

    // Validar que tenga exactamente 10 dígitos
    if (numericValue.length === 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "El número de teléfono debe tener exactamente 10 dígitos",
      }));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "gender") {
      const error = validateGender(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        gender: error,
      }));
    }

    if (name === "age") {
      const error = validateAge(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: error,
      }));
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const genderError = validateGender(formData.gender);
    const ageError = validateAge(formData.age);
    const phoneError =
      formData.phone.length !== 10
        ? "El número de teléfono debe tener exactamente 10 dígitos"
        : "";

    if (genderError || ageError || phoneError) {
      setErrors({
        ...errors,
        gender: genderError,
        age: ageError,
        phone: phoneError,
      });
      return;
    }

    console.log("Formulario enviado:", formData);
    
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
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
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
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange} 
            required
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
