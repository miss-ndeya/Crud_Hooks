import Th from "./Th";

const Thead = ({ headers }) => (
  <thead>
    <tr className="border fs-6">
      <Th head={headers} />
    </tr>
  </thead>
);

export default Thead;
