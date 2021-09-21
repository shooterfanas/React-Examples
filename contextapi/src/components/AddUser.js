import React, { useState, useContext } from "react";
import UserContext from "../Context";
var uniqid = require("uniqid");

const AddUser = () => {
  const [add, setAdd] = useState({
    name: "",
    department: "",
    salary: "",
  });
  const [state, dispatch] = useContext(UserContext);
  const { name, department, salary } = add;
  const onChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };

  const addUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: uniqid(),
      name,
      department,
      salary,
    };
    dispatch({ type: "ADD_USER", payload: newUser });
  };
  return (
    <div className="col-md-8 mb-4">
      <div className="card">
        <div className="card-header">
          <h4>Kullanıcı Ekleme Formu</h4>
        </div>
        <div className="card-body">
          <form onSubmit={addUser}>
            <div className="form-group">
              <label htmlFor="name">İsim</label>
              <input
                type="text"
                name="name"
                id="id"
                placeholder="İsminizi Giriniz..."
                className="form-control"
                value={name}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Departman</label>
              <input
                type="text"
                name="department"
                id="department"
                placeholder="Departmanınızı Giriniz..."
                className="form-control"
                value={department}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="salary">Maaş</label>
              <input
                type="text"
                name="salary"
                id="salary"
                placeholder="Maaşınızı Giriniz..."
                className="form-control"
                value={salary}
                onChange={onChange}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Ekle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
