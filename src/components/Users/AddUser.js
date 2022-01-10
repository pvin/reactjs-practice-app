import React,{useState, useRef} from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal'
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName,setEnteredUserName] = useState('');
  // const [enteredAge,setEnteredAge] = useState('');
  const [error,setError] = useState();
  
  const addUserHandler = (event) =>{
    event.preventDefault();

    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
      setError({title: 'Invalid Input', message: 'Please enter valid name and age'})
      return
    }
    if (+enteredUserAge < 1){
      setError({title: 'Invalid Age', message: 'Please enter a valid age'})
      return
    }
    
    props.onAddUser(enteredName, enteredUserAge);
    // setEnteredUserName('');
    // setEnteredAge('');

    nameInputRef.current.value='';
    ageInputRef.current.value='';
  }

  // const userNameChangeHandler = (event) => {
  //   if (event.target.value)
  //   setEnteredUserName(event.target.value);
  // }

  // const userAgeChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // }

  const errorHideHandler = () =>{
    setError(null)
  }

  return(
    <Wrapper>
      {error && <ErrorModal title = {error.title} message={error.message} onErrorOkay={errorHideHandler} />}  
      <Card className = {classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' ref={nameInputRef} ></input>
          <label htmlFor='age'>Age</label>
          <input id='age' type='text' ref={ageInputRef}></input>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser;
