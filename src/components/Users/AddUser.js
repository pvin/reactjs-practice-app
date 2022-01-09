import React,{useState} from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal'
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {

  const [enteredUserName,setEnteredUserName] = useState('');
  const [enteredAge,setEnteredAge] = useState('');
  const [error,setError] = useState();
  
  const addUserHandler = (event) =>{
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
      setError({title: 'Invalid Input', message: 'Please enter valid name and age'})
      return
    }
    if (+enteredAge < 1){
      setError({title: 'Invalid Age', message: 'Please enter a valid age'})
      return
    }
    
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName('');
    setEnteredAge('');         
  }

  const userNameChangeHandler = (event) => {
    if (event.target.value)
    setEnteredUserName(event.target.value);
  }

  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const errorHideHandler = () =>{
    setError(null)
  }

  return(
    <Wrapper>
      {error && <ErrorModal title = {error.title} message={error.message} onErrorOkay={errorHideHandler} />}  
      <Card className = {classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' value={enteredUserName} onChange={userNameChangeHandler}></input>
          <label htmlFor='age'>Age</label>
          <input id='age' type='text' value={enteredAge} onChange={userAgeChangeHandler}></input>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser;
