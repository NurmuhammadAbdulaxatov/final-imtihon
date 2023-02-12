import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Sign from "./Components/Sign";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Sign />} />
      </Routes>
    </div>
  );
}

export default App;
