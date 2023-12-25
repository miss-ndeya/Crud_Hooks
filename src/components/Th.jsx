const Th = ({ head }) => (
  <>
    {head.map((utilisateur, index) => (
      <th scope="col" key={index}>
        {utilisateur}
      </th>
    ))}
  </>
);

export default Th;
