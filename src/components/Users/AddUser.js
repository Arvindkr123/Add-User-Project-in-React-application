import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName,  enteredAge);
    setenteredUserName('')
    setenteredAge('')
  };
  const usernameChangeHandler = (event) => {
    setenteredUserName(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    setenteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"  onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" onChange={AgeChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
