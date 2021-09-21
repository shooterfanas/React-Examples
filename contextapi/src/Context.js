import React, { useReducer } from "react";

const UserContext = React.createContext();
const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return state.filter((user) => action.payload !== user.id);
    case "ADD_USER":
      return [...state, action.payload];
    default:
      return initialState;
  }
};

export function UserProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
}
export default UserContext;
