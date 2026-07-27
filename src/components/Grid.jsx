import Column from "./Column";

const Grid = ({ columns, updateTitle, updateColor, moveColumn }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
        gap: "13px"
      }}
    >
      {columns.map((col, index) => (
        <Column
          key={col.id}
          col={col}
          index={index}
          updateTitle={updateTitle}
          updateColor={updateColor}
          moveColumn={moveColumn}
        />
      ))}
    </div>
  );
};

export default Grid;