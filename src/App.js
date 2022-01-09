import React,{useState} from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'


function App() {
  
  const [userList, setUserList] = useState([]);

  const addUserList = (uName, uAge) => {
    
    setUserList((peviousUserList) => {
      // debugger
      return [...peviousUserList, {id: Math.random(),name: uName, age: uAge}]
    }) 
  }
  
  return (
    <>
      <AddUser onAddUser={addUserList}></AddUser>
      <UsersList users={userList}></UsersList>
    </>
  );
}

export default App;
