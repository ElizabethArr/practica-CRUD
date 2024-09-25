import { useState, ChangeEvent, FormEvent, KeyboardEvent } from "react";
import Link from "next/link";

export default function UsuariosPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    role: "",
    phone: "",
    rfc:"",
  });

  const [errors, setErrors] = useState({
    gender: "",
    age: "",
    phone: "",
    email: "",
    rfc:"",

  });

  const validateGender = (value: string) => {
    const upperValue = value.toUpperCase();

    // Validar que solo sea "M" o "F"
    if (!["M", "F"].includes(upperValue)) {
      return 'El género debe ser "M" o "F"';
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
    if (!regex.test(value)) {
      return "El número de teléfono debe tener exactamente 10 dígitos";
    }
    return "";
  };

  const validateEmail = (value: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(value)) {
      return "El correo electronico no es valido";
    }

    return "";
  };

  const validateRFC = (value: string) => {
    const rfcRegex = /^[A-ZÑ&]{3,4}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[A-Z\d]{3}$/;
    if (!rfcRegex.test(value)) {
      return "El RFC no es valido";
    }

    return "";
  }
  



  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    // Eliminar cualquier carácter que no sea un número
    value = value.replace(/\D/g, "");

    if (value.length > 10) {
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));

    const phoneError = validatePhone(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      phone: phoneError,
    }));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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

    if (name === "email") {
      const error = validateEmail(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: error,
      }));
    }

    if (name === "rfc") {
      const error = validateRFC(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        rfc: error,
      }));
    }


    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Prevenir que el usuario escriba algo que no sea "M" o "F"
  const handleGenderKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "m",
      "f",
      "M",
      "F",
      "Backspace",
      "Delete",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
    ];
    if (!allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const genderError = validateGender(formData.gender);
    const ageError = validateAge(formData.age);
    const phoneError = validatePhone(formData.phone);
    const emailError = validateEmail(formData.email);
    const rfcError = validateRFC(formData.rfc);
    

     if (genderError || ageError || phoneError || emailError || rfcError ) {
      setErrors({
        gender: genderError,
        age: ageError,
        phone: phoneError,
        email: emailError,
        rfc: rfcError,
       
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
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            onKeyDown={handleGenderKeyDown} // Aquí se previenen las entradas no deseadas
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
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un rol</option>
            <option value="admin">Administrador</option>
            <option value="supervisor">Supervisor</option>
            <option value="employee">Empleado</option>
          </select>
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

        <div>
          <label htmlFor="rfc">RFC:</label>
          <input
            type="text"
            id="rfc"
            name="rfc"
            value={formData.rfc}
            onChange={handleChange}
            required
          />
         {errors.rfc && <p style={{ color: "red" }}>{errors.rfc}</p>} 
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
