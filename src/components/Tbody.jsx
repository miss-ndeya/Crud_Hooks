import Row from "./Row";

const Tbody = ({ utilisateurs, editUtilisateur, deleteUtilisateur }) => (
  <tbody className="fs-6">
    {utilisateurs?.map((row) => (
      <Row
        key={row.id}
        {...row}
        editUtilisateur={editUtilisateur}
        deleteUtilisateur={deleteUtilisateur}
      />
    ))}
  </tbody>
);

export default Tbody;
