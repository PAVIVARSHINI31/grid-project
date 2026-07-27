import { useState } from "react";
import Grid from "./components/Grid";
import Controls from "./components/Controls";

function App() {
  const [columns, setColumns] = useState([
    { id: 1, title: "Column 1", color: "#ddd" },
    { id: 2, title: "Column 2", color: "#ddd" },
    { id: 3, title: "Column 3", color: "#ddd" }
  ]);

  // add/remove columns
  const updateColumns = (num) => {
    if (num < 1) return;

    let newCols = [...columns];

    if (num > newCols.length) {
      newCols.push({
        id: Date.now(),
        title: `Column ${num}`,
        color: "#ccc"
      });
    } else {
      newCols.pop();
    }

    setColumns(newCols);
  };

  // update title
  const updateTitle = (id, title) => {
    setColumns(columns.map(col =>
      col.id === id ? { ...col, title } : col
    ));
  };

  // update color
  const updateColor = (id, color) => {
    setColumns(columns.map(col =>
      col.id === id ? { ...col, color } : col
    ));
  };

  // reorder
  const moveColumn = (from, to) => {
    if (to < 0 || to >= columns.length) return;

    const newCols = [...columns];
    const item = newCols.splice(from, 1)[0];
    newCols.splice(to, 0, item);

    setColumns(newCols);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Grid App</h1>

      <Controls columns={columns} updateColumns={updateColumns} />

      <Grid
        columns={columns}
        updateTitle={updateTitle}
        updateColor={updateColor}
        moveColumn={moveColumn}
      />
    </div>
  );
}

export default App;