import User from "./User.js";

const UserList = (props) => {
  return (
    <ul>
      {props.users.map(user => (
        <li key={user.id}>
          <User id={user.id} name={user.name} age={user.age} />
        </li>
      ))}
    </ul>
  );
}

export default UserList;