import React, { useState,useRef} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModel";
import Wrapper from "../Handler/Wrapper";


const AddUser = (props) => {
const nameInputRef = useRef();
const ageInputRef = useRef();

  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
  // console.log(nameInputRef);

  const enteredUserNameRef = nameInputRef.current.value;
  const enteredAgeRef = ageInputRef.current.value;

    // if (enteredUserName.trim().length === 0 && enteredAge.trim().length === 0) {
    //   setError({
    //     title: "Invalid Input",
    //     message: "Please enter a valid name and age (no empty values)",
    //   });
    //   return;
    if (enteredUserNameRef.trim().length === 0 && enteredAgeRef.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (no empty values)",
      });
      return;
    }
    if (+enteredAgeRef < 1) {
      setError({
        title: "Invalid Age",
        message: "please enter a valid age (> 0)",
      });
      return;
    }
    // console.log(enteredUserName, enteredAge);
    props.onAddUser(enteredUserNameRef, enteredAgeRef);
    // setEnteredUserName("");
    // setEnteredAge("");
    nameInputRef.current.value = '';
    ageInputRef.current.value = ''; 
  };

  // const usenameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label>UserName</label>
          <input
            id="username "
            type="text"
            // value={enteredUserName}
            // onChange={usenameChangeHandler}
            ref ={nameInputRef}
          />
          <label>Age (years)</label>
          <input
            id="number"
            type="text"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref ={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
