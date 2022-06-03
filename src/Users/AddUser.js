import React, { useState } from "react";
import Card from "../UI/Card.js";
import classes from "./AddUser.module.css";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";
function AddUser(props) {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const formHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim() === 0) {
      setError({
        title: "Username and Age error",
        message:
          "Please enter valid username and age data ( both should be not be null)",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Age is not valid",
        message: "Age be greater than 1",
      });
      return;
    }
    //console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredAge, enteredUsername);
    setEnteredAge("");
    setEnteredUserName("");
  };
  const ErrorHandler = () => {
    setError(null);
    setEnteredAge("");
    setEnteredUserName("");
  };
  return (
    <div>
      <div>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={ErrorHandler}
          ></ErrorModal>
        )}
      </div>
      <Card className={classes.input}>
        <form onSubmit={formHandler}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">submit</Button>
        </form>
      </Card>
    </div>
  );
}
export default AddUser;
