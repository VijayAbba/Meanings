import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/meanings/:id" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
