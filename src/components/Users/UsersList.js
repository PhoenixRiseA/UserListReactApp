import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li>
              {user.name} ({user.age} years old)(college name:{user.college})
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default UsersList;
