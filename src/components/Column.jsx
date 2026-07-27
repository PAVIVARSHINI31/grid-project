const Column = ({ col, index, updateTitle, updateColor, moveColumn }) => {
  return (
    <div style={{ backgroundColor: col.color, padding: "10px" }}>
      <h3>{col.title}</h3>

      {/* Edit title */}
      <input
        type="text"
        placeholder="Edit title"
        onChange={(e) => updateTitle(col.id, e.target.value)}
      />

      {/* Change color */}
      <input
        type="color"
        onChange={(e) => updateColor(col.id, e.target.value)}
      />

      {/* Move column */}
      <input
        type="number"
        placeholder="Move index"
        onChange={(e) => moveColumn(index, Number(e.target.value))}
      />
    </div>
  );
};

export default Column;