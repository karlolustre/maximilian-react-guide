import React, { useState } from 'react';
import './App.css';
import Validation from './Valid/Validation';
import Char from './Char/Char'

const App = props => {

const [userState, userSetState] = useState({
  user: [
    {userInput: ''}
  ]
})

const inputChangeHandler = (e) => {
  userSetState({
    user : [
      {userInput : e.target.value}
    ]
  })
}






  return ( 
    <div className="App">
      <h1>Module 4 Assignment</h1>
      <input type="text" onChange={inputChangeHandler} value={userState.user[0].userInput}/>
      <p>{userState.user[0].userInput}</p>
      <Validation inputLength={userState.user[0].userInput.length}/>
    </div>
  );
}

export default App;
