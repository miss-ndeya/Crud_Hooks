import React, { useEffect, useState } from "react";
import DeleteUtilisateur from "./DeleteUtilisateur";
import EditUtilisateur from "./EditUtilisateur";
import Title from "./Title";
import Table from "./Table";
import Form from "./Form";

const Crud = () => {
  const [state, setState] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    utilisateurs: JSON.parse(localStorage.getItem("utilisateurs")) || [],
    modifierId: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    console.log(name, value);
  };

  useEffect(() => {
    const { utilisateurs } = state;
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
  }, [state.utilisateurs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { modifierId, utilisateurs, ...userData } = state;

    if (modifierId !== false) {
      const modifierUtilisateur = utilisateurs.map((utilisateur) =>
        utilisateur.id === modifierId
          ? {
              id: modifierId,
              ...userData,
            }
          : utilisateur
      );
      setState({
        ...state,
        utilisateurs: modifierUtilisateur,
        modifierId: false,
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
      });
    } else {
      const nouvelUtilisateur = { id: new Date().getTime(), ...userData };
      setState((prevState) => ({
        ...prevState,
        utilisateurs: [...prevState.utilisateurs, nouvelUtilisateur],
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
      }));
      console.log(state);
      console.log(state.utilisateurs);
    }
  };

  const editUtilisateur = (id) => {
    EditUtilisateur(id, state, setState);
  };

  const deleteUtilisateur = (id) => {
    const { modifierId, utilisateurs } = state;
    if (modifierId === id) {
      setState({
        ...state,
        utilisateurs: utilisateurs.filter(
          (utilisateur) => utilisateur.id !== id
        ),
        modifierId: false,
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
      });
    } else {
      setState({
        ...state,
        utilisateurs: utilisateurs.filter(
          (utilisateur) => utilisateur.id !== id
        ),
      });
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="row">
        <Title
          className="text-center fs-6 mb-3"
          children="Jeemacoder gestion utilisateurs "
        />
        <Form
          handleSubmit={handleSubmit}
          state={state}
          handleChange={handleChange}
          modifierId={state.modifierId}
        />
        <Table
          utilisateurs={state.utilisateurs}
          editUtilisateur={editUtilisateur}
          deleteUtilisateur={deleteUtilisateur}
        />
      </div>
    </div>
  );
};

export default Crud;
