import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login";
import { First } from "../First";

export function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/First" element={<First />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
