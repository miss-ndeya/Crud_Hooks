import InputLabel from "./InputLabel";
import Button from "./Button";

const Form = ({ handleChange, handleSubmit, state, modifierId }) => {
  return (
    <form className="shadow col-md-8 mx-auto  p-3 mb-3" onSubmit={handleSubmit}>
      <div className="mb-3 d-sm-flex  gap-3 mx-auto">
        <InputLabel
          type="text"
          name="nom"
          value={state.nom}
          children="Nom"
          onChange={handleChange}
        />
        <InputLabel
          type="text"
          name="prenom"
          value={state.prenom}
          children="Prenom"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3 d-sm-flex gap-3 mx-auto">
        <InputLabel
          type="email"
          name="email"
          value={state.email}
          children="Email"
          onChange={handleChange}
        />
        <InputLabel
          type="tel"
          name="telephone"
          children="Telephone"
          value={state.telephone}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-12">
        <Button
          type="submit"
          children={modifierId === false ? "Ajouter" : "Modifier"}
          className={
            "btn w-100 " +
            (modifierId === false ? "btn-success" : "btn-warning")
          }
        />
      </div>
    </form>
  );
};

export default Form;
