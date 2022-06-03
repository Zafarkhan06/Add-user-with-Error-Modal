import React from "react";
import Card from "../UI/Card.js";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
          {props.users.map((user) =>( 
              <li key={user.id}> {user.age} {user.name}  years old</li>
          ))}
      </ul>
    </Card>
  );
};
export default UserList;
