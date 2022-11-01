import { useState } from "react";
// import "./NewUserForm.css";
import styles from "./NewUserForm.module.css";

const NewUserForm = (props) => {
  const [userName, setUsername] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let userName = event.target["user-name"].value;
    let age = event.target["user-age"].value;
    let errCount = 0;

    if(userName.trim().length <= 0){
      props.onErr("user-name", "empty");
      errCount++;
    }

    if(age.trim().length <= 0){
      props.onErr("user-age", "empty");
      errCount++;
    }

    if(errCount === 0){
      age = parseInt(age);
      if(age <= 0){
        props.onErr("user-age", "invalid-negative")
        errCount++;
      }
    }

    if(errCount === 0){
      setUsername(userName);
      setAge(age);
      props.onUserAdd({userName: userName, age: age});
    }
  }

  // console.log("Form rendered, default name is: " + userName);

  return (
    <form id="form-user-new" onSubmit={handleSubmit}>
      <div className={styles.input}>
        <label htmlFor="user-name">Username</label>
        <input type="text" id="user-name" name="user-name" value={userName} onChange={handleNameChange} />
      </div>
      <div className={styles.input}>
        <label htmlFor="user-age">Age (years)</label>
        <input type="number" id="user-age" name="user-age" value={age} onChange={handleAgeChange} />
      </div>
      <input type="submit" value="Add user" />
    </form>
  )
}

export default NewUserForm;