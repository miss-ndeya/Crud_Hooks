import Thead from "./Thead";
import Title from "./Title";
import Tbody from "./Tbody";

const headers = ["Prenom", "Nom", "Email", "Telephone", "Action"];

const Table = ({ utilisateurs, editUtilisateur, deleteUtilisateur }) => (
  <div className="col-md-12 mt-4">
    <div className="border-top mt-2 pt-3">
      <Title className="text-center mt-3 fs-6" children="Utilisateurs" />
      <table className="table table-striped table-hover">
        <Thead headers={headers} />
        <Tbody
          utilisateurs={utilisateurs}
          editUtilisateur={editUtilisateur}
          deleteUtilisateur={deleteUtilisateur}
        />
      </table>
    </div>
  </div>
);

export default Table;
