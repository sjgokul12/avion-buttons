import React from "react";
import "./index.css";
import Button from "./Button";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-6 bg-gray-100">
      <Button variant="filled">SUBMIT</Button>
      <Button variant="outline">SUBMIT</Button>
    </div>
  );
}

export default App;