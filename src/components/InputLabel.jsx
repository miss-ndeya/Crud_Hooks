const InputLabel = ({ type, value, name, onChange, children }) => (
  <div className="mx-auto w-100">
    <label className="form-label" htmlFor={name}>
      {children}
    </label>
    <input
      className="form-control"
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default InputLabel;
