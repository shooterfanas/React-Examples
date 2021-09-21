import React, { useContext } from "react";
import User from "./User";
import UserContext from "../Context";

function Users() {
  const [state] = useContext(UserContext);
  return (
    <div>
      {state.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
}

export default Users;
