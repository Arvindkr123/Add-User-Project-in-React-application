import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length==0|| enteredAge.trim().length==0){
      return;
    }
    if(+enteredAge<1){
      return;
    }
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
        <input type="text" id="username" value={enteredUserName}  onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" value={enteredAge} onChange={AgeChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
