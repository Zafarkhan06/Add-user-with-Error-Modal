import React,{useState} from "react";
import AddUser from "./Users/AddUser";
import UserList from "./Users/UserList";

function App() {
  const [enteredUser,setEnteredUser]=useState([]);
  const addUserHandler=(uName,uAge)=>{
    setEnteredUser(prevUsers=>{
      return [...prevUsers,{name:uName, age: uAge , id: Math.random().toString()}];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={enteredUser}/>
    </div>
  );
}

export default App;
