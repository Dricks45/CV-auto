import React, { useState } from "react";
import PropTypes from "prop-types";
import "../css/Texte.css";

function ExperienceForm({ index, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(index, name, value, "experiences");
  };

  return (
    <div className="experience">
      <label>
        Date de début :
        <input
          type="date"
          name={`date_debut_${index}`}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Date de fin :
        <input
          type="date"
          name={`date_fin_${index}`}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Poste occupé :
        <input type="text" name={`poste_${index}`} onChange={handleChange} />
      </label>

      <label>
        Descriptif du poste :
        <textarea name={`descriptif_${index}`} onChange={handleChange} />
      </label>
    </div>
  );
}
ExperienceForm.propTypes = {
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function FormationForm({ index, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(index, name, value, "formations");
  };

  return (
    <div className="formation">
      <label>
        Date de début :
        <input
          type="date"
          name={`date_debut_${index}`}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Date de fin :
        <input type="date" name={`date_fin_${index}`} onChange={handleChange} />
      </label>

      <label>
        Nom de la formation :
        <input
          type="text"
          name={`nom_formation_${index}`}
          onChange={handleChange}
        />
      </label>

      <label>
        Descriptif de la formation :
        <textarea
          name={`descriptif_formation_${index}`}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

FormationForm.propTypes = {
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function LoisirForm({ index, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(index, name, value, "loisirs");
  };

  return (
    <div className="loisir">
      <label>
        Nom du loisir :
        <input
          type="text"
          name={`nom_loisir_${index}`}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

LoisirForm.propTypes = {
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function LangueForm({ index, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(index, name, value, "langues");
  };

  return (
    <div className="langue">
      <label>
        Nom de la langue :
        <input
          type="text"
          name={`nom_langue_${index}`}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

LangueForm.propTypes = {
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function Texte() {
  const [data, setData] = useState({
    telephone: "",
    ville: "",
    photo: null,
    experiences: [],
    formations: [],
    loisirs: [],
    langues: [],
  });

  const handleChange = (index, fieldName, value, section) => {
    const newData = { ...data };
    if (!newData[section]) newData[section] = [];
    if (!newData[section][index]) newData[section][index] = {};
    newData[section][index][fieldName] = value;
    setData(newData);
  };

  const handleFileChange = (e) => {
    const newData = { ...data };
    newData.photo = e.target.files;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info(data);
    // *********************************
    // *********************************
    // *********************************
    // *********************************
  };

  return (
    <form className="container_texte" onSubmit={handleSubmit}>
      <label>
        Numéro de téléphone :
        <input
          type="tel"
          name="telephone"
          onChange={(e) => setData({ ...data, telephone: e.target.value })}
          required
        />
      </label>

      <hr />

      <label>
        Ville :
        <input
          type="text"
          name="ville"
          onChange={(e) => setData({ ...data, ville: e.target.value })}
          required
        />
      </label>

      <hr />

      <label>
        Photo :
        <input
          type="file"
          name="photo"
          onChange={handleFileChange}
          accept="image/*"
        />
      </label>

      <hr />

      <h3 className="title_section_texte">Expériences</h3>
      {data.experiences.map((exp, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ExperienceForm key={index} onChange={handleChange} />
      ))}

      <button
        type="button"
        onClick={() =>
          setData({ ...data, experiences: [...data.experiences, {}] })
        }
      >
        Ajouter une expérience
      </button>

      <hr />

      <h3 className="title_section_texte">Formations</h3>
      {data.formations.map((formation, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <FormationForm key={index} onChange={handleChange} />
      ))}

      <button
        type="button"
        onClick={() =>
          setData({ ...data, formations: [...data.formations, {}] })
        }
      >
        Ajouter une formation
      </button>

      <hr />

      <h3 className="title_section_texte">Loisirs</h3>
      {data.loisirs.map((loisir, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <LoisirForm key={index} onChange={handleChange} />
      ))}

      <button
        type="button"
        onClick={() => setData({ ...data, loisirs: [...data.loisirs, {}] })}
      >
        Ajouter un loisir
      </button>

      <hr />

      <h3 className="title_section_texte">Langues</h3>
      {data.langues.map((langue, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <LangueForm key={index + 1} onChange={handleChange} />
      ))}

      <button
        type="button"
        onClick={() => setData({ ...data, langues: [...data.langues, {}] })}
      >
        Ajouter une langue
      </button>

      <hr />

      <input className="soumission_texte" type="submit" value="Envoyer" />
    </form>
  );
}

export default Texte;
