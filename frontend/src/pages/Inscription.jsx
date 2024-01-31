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

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.password) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    try {
      setError(null);

      if (isRegistered) {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        setSuccess(
          `Connexion réussie avec prénom: ${formData.firstName} email: ${formData.email}`
        );
      } else {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        setSuccess(
          `Inscription réussie avec prénom: ${formData.firstName}, email: ${formData.email}`
        );
      }
    } catch (err) {
      setError(
        "Une erreur s'est produite lors du traitement de votre demande. Veuillez réessayer."
      );
    }
  };

  return (
    <div className="container_inscription">
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
      <button
        className="btn_plus_inscription"
        type="button"
        onClick={() => setIsRegistered(!isRegistered)}
      >
        {isRegistered ? "Je ne suis pas encore inscrit" : "J'ai déjà un compte"}
      </button>
      {error && (
        <div className="anim" style={{ color: "red" }}>
          {error}
        </div>
      )}
      {success && (
        <div className="anim" style={{ color: "green" }}>
          {success}
        </div>
      )}
    </div>
  );
}

export default Inscription;
