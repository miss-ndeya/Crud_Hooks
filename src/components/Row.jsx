import Button from "./Button";

const Row = ({ prenom, nom, email, telephone, id, editUtilisateur, deleteUtilisateur }) => (
  <tr>
    <td>{prenom}</td>
    <td>{nom}</td>
    <td>{email}</td>
    <td>{telephone}</td>
    <td>
      {" "}
      <Button
        type="button"
        children="modifier"
        className="btn btn-warning me-3"
        onClick={() => editUtilisateur(id)}
      />
        <Button
        type="button"
        children="Supprimer"
        className="btn btn-danger"
        onClick={() => deleteUtilisateur(id)}
      />
    </td>
    
  </tr>
);

export default Row;
