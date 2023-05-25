import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Meanings from "./Components/Meanings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/meanings/:id" element={<Meanings />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
