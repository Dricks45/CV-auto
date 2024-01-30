import React, { useState } from "react";
import "../css/Inscription.css";

function Inscription() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour l'inscription ou la connexion en fonction de 'isRegistered'
    if (isRegistered) {
      // Logique de connexion
      // eslint-disable-next-line no-restricted-syntax
      console.log(`Connexion avec email: ${formData.email}`);
    } else {
      // Logique d'inscription
      // eslint-disable-next-line no-restricted-syntax
      console.log(
        `Inscription avec prénom: ${formData.firstName}, email: ${formData.email}`
      );
    }
  };

  return (
    <div>
      {isRegistered ? (
        <form onSubmit={handleSubmit}>
          <label>
            Prénom:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Adresse Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Se connecter</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Prénom:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Nom:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Adresse Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Mot de passe:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">S'inscrire</button>
        </form>
      )}
      <br />
      <button type="button" onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? "Je ne suis pas encore inscrit" : "J'ai déjà un compte"}
      </button>
    </div>
  );
}

export default Inscription;
