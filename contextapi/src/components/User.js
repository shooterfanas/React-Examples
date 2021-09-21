import React, { useState, useContext } from "react";
import UserContext from "../Context";

function User(props) {
  const { id, name, department, salary } = props.user;
  const [isVisible, setVisible] = useState(false);
  const [state, dispatch] = useContext(UserContext);

  const handleClick = () => {
    setVisible(!isVisible);
  };
  const onDeleteUser = (e) => {
    //consumer dispatch
    dispatch({ type: "DELETE_USER", payload: id });
  };

  return (
    <div className="col-md-8 mb-4">
      <div className="card" key={id}>
        <div
          className="card-header d-flex justify-content-between"
          onClick={handleClick}
        >
          <h4 className="d-inline">{name}</h4>
          <i
            className="far fa-trash-alt"
            style={{ cursor: "pointer" }}
            onClick={(e) => onDeleteUser(e)}
          ></i>
        </div>
        {isVisible && (
          <div className="card-body">
            <p className="card-text">Maaş: {salary}</p>
            <p className="card-text">Departman: {department}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default User;
