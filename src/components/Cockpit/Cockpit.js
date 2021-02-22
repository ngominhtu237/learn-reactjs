import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  // function run when arg2 change
  // if arg2 == [] => run only first time
  useEffect(() => {
    console.log('[cockpit.js] useEffect');

    // Http request
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);

    /* Func ~ componentWillUnmount */
    return () => {
      // clearTimeout(timer);
      console.log('[cockpit.js] cleanup work in useEffect');
    }
  }, [])

  useEffect(() => {
    console.log('[cockpit.js] 2nd useEffect');
    return () => {
      console.log('[cockpit.js] cleanup work in 2nd useEffect');
    }
  });

  let assignedClasses = [];
  let btnClass = '';
  if(props.showPersons){
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <h2>Hello, I'm a React App</h2>
      <p className={assignedClasses.join(' ')}>My name is Tu</p>
      <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
}

export default React.memo(cockpit);