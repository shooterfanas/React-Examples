import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="container">
      <Navbar title="Context" />
      <AddUser />
      <Users />
    </div>
  );
}

export default App;
