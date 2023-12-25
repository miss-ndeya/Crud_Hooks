const EditUtilisateur = ( id, state, setState ) => {
    const utilisateurModifier = state.utilisateurs.find((utilisateur) => utilisateur.id === id)
    setState({
        ...state,
        modifierId: id,
        nom: utilisateurModifier.nom,
        prenom: utilisateurModifier.prenom,
        email: utilisateurModifier.email,
        telephone: utilisateurModifier.telephone
    })
}

export default EditUtilisateur
