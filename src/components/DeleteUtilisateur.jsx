const DeleteUtilisateur = (id, modifierId, utilisateurs, setState, state) => {
  if (modifierId === id) {
    setState({
      ...state,
      utilisateurs: utilisateurs.filter((utilisateur) => utilisateur.id !== id),
      modifierId: false,
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
    });
  } else {
    setState({
      ...state,
      utilisateurs: utilisateurs.filter((utilisateur) => utilisateur.id !== id),
    });
  }
};

export default DeleteUtilisateur;
