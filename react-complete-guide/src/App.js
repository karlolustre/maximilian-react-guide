import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPeronsState] = useState({
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Steph', age: 30 }
    ],
    showPersons: false
  })

  const [otherState, setOtherState] = useState('this is the other state value');

  // console.log(personsState, otherState);
  // console.log(personsState.showPersons);
  
  
  

  const nameChangedHandler = (e, id) => {
    // alert('hit')
    const personIndex = personsState.persons.findIndex(p => {
      // console.log(p)
      return p.id === id;
    });

    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = e.target.value;
    

    const persons = [...personsState.persons]
    persons[personIndex] = person;
    
    setPeronsState({ persons: persons,
      showPersons: true
     })
  }

  const deletePersonHandler = (personIndex) => {
    // console.log(personIndex)
    const persons = [...personsState.persons];
    // console.log(persons)
    persons.splice(personIndex, 1);
    // console.log(persons)
    setPeronsState({ persons: persons,
    showPersons: true
   })
  }

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPeronsState({
      persons: [
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Manu', age: 29 },
        { id: '3', name: 'Steph', age: 30 }
      ],
      showPersons: !doesShow});
  }

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <Person 
          click={() => deletePersonHandler(index)}
          name={person.name}
          age = {person.age}
          key = {person.id}
          changed={(e) => nameChangedHandler(e, person.id)}/>
        })}
      </div> 
    )
  }

  

    return (
      <div className="App">
        <h1>hi React here</h1>
        <button className="buttSwitchName" 
        onClick={togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

}

export default app;

