import React, { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (uName, uAge, uCollege) => {
    setUsersList((preUsersList) => {
      return [...preUsersList, { name: uName, age: uAge, college: uCollege }];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
