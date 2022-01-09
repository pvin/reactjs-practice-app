import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './ErrorModal.module.css';
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onErrorOkay} />
} 

const ModalOverlay = (props) => {
  return (<Card className={classes.modal}>
  <header className={classes.header}>
    <h2>{props.title}</h2>
  </header>
  <div className={classes.content}>
    <p>{props.message}</p>
  </div>
  <footer className={classes.actions}>
    <Button type='button' onClick={props.onErrorOkay}>Okay</Button>
  </footer>
</Card>)
}

const ErrorModal = props => {
  return( 
  <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onErrorOkay={props.onErrorOkay} />, document.getElementById('backdrop-root'))}
    {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onErrorOkay={props.onErrorOkay} />, document.getElementById('overlay-root'))}
  </React.Fragment>)
}

export default ErrorModal;
