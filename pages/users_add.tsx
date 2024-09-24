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
      return "La edad debe estar entre 18 y 60 años.";
    }
    return "";
  };

  const validatePhone = (value: string) => {
    const regex = /^\d{10}$/;
    console.log("Test:", regex.test(value));
    if (!regex.test(value)) {
      return "El número de teléfono debe tener exactamente 10 dígitos";
    }
    return "";
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    // Eliminar cualquier carácter que no sea un número
    value = value.replace(/\D/g, "");

    console.log("value", value);

    if (value.length > 10) {
      return;
    }

    // Actualizar el valor en el estado sin caracteres no numéricos
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));

    // Validar si el número tiene exactamente 10 dígitos
    const phoneError = validatePhone(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      phone: phoneError,
    }));
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
    const phoneError = validatePhone(formData.phone);

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
            type="text"
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
