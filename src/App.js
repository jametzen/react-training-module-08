import { useState } from 'react';
import Card from "./components/Card.js";
import ErrorModal from "./components/ErrorModal.js";
import NewUserForm from "./components/NewUserForm.js";
import UserList from "./components/UserList.js";

function App() {
  let users = [
    {id: Math.random().toString(), name: "Bob", age: "22"}
  ];

  const [userList, setUsers] = useState(users);
  const [appState, setAppState] = useState("");
  const [errTitle, setErrTitle] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onUserAdd = (userObj) => {
    console.log("User added:\n", userObj);
    let newUser = {id: Math.random().toString(), name: userObj.userName, age: userObj.age};
    console.log("Our new user:\n", newUser);
    setUsers((prevState) => {
      return [...prevState, newUser];
    });

    console.log(userList);
  }

  const onNewUserValidationFail = (inputName, reason) => {
    let errTitle = "Invalid input";
    let errMsg = null;

    if(reason === "empty"){
      if(inputName === "user-name"){
        errMsg = "Please enter a username";
      }
      if(inputName === "user-age"){
        errMsg = "Please enter an age";
      }
    }

    if(reason === "invalid-negative"){
      errMsg = "Please enter age as a positive number";
    }

    setAppState("ERR");
    setErrTitle(errTitle);
    setErrMsg(errMsg);
  }

  const onErrorDisplayClear = () => {
    setAppState("");
  }

  return (
    <div>
      {appState === "ERR" &&
      <ErrorModal title={errTitle} message={errMsg} onErrorDisplayClear={onErrorDisplayClear} /> }
      <Card>
        <NewUserForm onUserAdd={onUserAdd} onErr={onNewUserValidationFail} />
      </Card>
      <Card>
        <UserList users={userList} />
      </Card>
    </div>
  );
}

export default App;
