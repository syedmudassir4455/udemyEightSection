import React, { useState,Fragment } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UsersList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler =(uName,uAge)=>{
    setUserList((prevUsersList)=>{
      return [...prevUsersList, {name :uName, age :uAge , id :Math.random().toString()}]
    })

  }
  return (
   <Fragment>
      <AddUser onAddUser ={addUserHandler} />
   <UserList users ={userList} />
    </Fragment>
  );
};

export default App;
