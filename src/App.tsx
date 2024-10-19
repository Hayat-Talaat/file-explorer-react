import React from "react";
import FileExplorer from "./components/FileExplorer";
import { Files } from "./data/data.ts";
import "./assets/css/styles.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>File Explorer</h1>
      <FileExplorer data={Files} />
    </div>
  );
};

export default App;
