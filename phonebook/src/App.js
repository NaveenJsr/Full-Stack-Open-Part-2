import { useState } from 'react'

const App = () =>
{
  // Initialize state with one person
  const [ persons, setPersons ] = useState( [
    { name: 'Arto Hellas' }
  ] )

  // Initialize state for the form input
  const [ newName, setNewName ] = useState( '' )

  // Handler function for form submission
  const addPerson = ( event ) =>
  {
    event.preventDefault() // Prevent form submission from refreshing the page

    // Add the new person to the phonebook
    const newPerson = { name: newName }
    setPersons( persons.concat( newPerson ) )

    // Clear the form input
    setNewName( '' )
  }

  // Handler function for form input changes
  const handleNameChange = ( event ) =>
  {
    setNewName( event.target.value )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={ addPerson }>
        <div>
          name: <input value={ newName } onChange={ handleNameChange } />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { persons.map( person => <li key={ person.name }>{ person.name }</li> ) }
      </ul>
    </div>
  )
}

export default App
