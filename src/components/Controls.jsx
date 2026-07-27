const Controls = ({ columns, updateColumns }) => {
  return (
    <div>
      <input
        type="number"
        value={columns.length}
        onChange={(e) => updateColumns(Number(e.target.value))}
      />
      
      <button onClick={() => updateColumns(columns.length + 1)}>+</button>
      <button onClick={() => updateColumns(columns.length - 1)}>-</button>
     
      <br></br>
      <br></br>
    </div>
  );
};

export default Controls;