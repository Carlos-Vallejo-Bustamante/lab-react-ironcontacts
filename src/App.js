import { useState } from "react"
import "./App.css";
import contacts from "./contacts.json"


function App() {
  const actors = contacts.slice(0, 6)

  const [initContact, setContact] = useState(actors)

  const addContact = () => {
    const newContacts = [...initContact];
    const randomNumber = Math.floor(Math.random() * (contacts.length - 6)) + 6
    if (contacts[randomNumber]) {
      newContacts.unshift(contacts[randomNumber]);
      contacts.splice(randomNumber, 1);
      setContact(newContacts);
    }
  }

  return (<div className="App App-header">

    <h1>IronContacts</h1>

    <button onClick={addContact}>Add Random Contact</button>

    <table className="">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
      </thead>
      <tbody>
        {initContact.map((actor) =>
          < tr >
            <td><img className="img-actor" src={actor.pictureUrl} /></td>
            <td>{actor.name}</td>
            <td>{actor.popularity}</td>
            <td>{actor.wonOscar ? '🏆' : '👎'}</td>
            <td>{actor.wonEmmy ? '🏆' : '👎'}</td>
          </tr>

        )}
      </tbody>
    </table>
  </div >
  )
}
export default App;
