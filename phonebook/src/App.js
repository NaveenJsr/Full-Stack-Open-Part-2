import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import axios from 'axios'

const App = () =>
{

  const [ persons, setPersons ] = useState( [] )
  const [ newName, setNewName ] = useState( '' )
  const [ newNumber, setNewNumber ] = useState( '' )
  const [ filter, setFilter ] = useState( '' )

  useEffect( () =>
  {
    axios
      .get( 'http://localhost:3001/persons' )
      .then( response =>
      {
        setPersons( response.data )
        console.log( response.data )
      } )

  }, [] )

  const addPerson = ( event ) =>
  {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    if ( persons.some( person => person.name === newName ) )
    {
      alert( `${ newName } is already added to phonebook` )
      return
    }
    setPersons( persons.concat( personObject ) )
    setNewName( '' )
    setNewNumber( '' )
  }

  const handleNameChange = ( event ) =>
  {
    setNewName( event.target.value )
  }

  const handleNumberChange = ( event ) =>
  {
    setNewNumber( event.target.value )
  }

  const handleFilterChange = ( event ) =>
  {
    setFilter( event.target.value )
  }

  const personsToShow = filter
    ? persons.filter( person => person.name.toLowerCase().includes( filter.toLowerCase() ) )
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={ filter } handleFilterChange={ handleFilterChange } />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={ addPerson }
        newName={ newName }
        handleNameChange={ handleNameChange }
        newNumber={ newNumber }
        handleNumberChange={ handleNumberChange }
      />
      <h3>Numbers</h3>
      <Persons persons={ personsToShow } />
    </div>
  )
}

export default App
