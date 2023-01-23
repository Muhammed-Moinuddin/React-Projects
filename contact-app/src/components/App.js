import React, {useState} from "react";
import './App.css';
import ContactHeader from "./ContactHeader";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])
  };
// const contacts = [
//     {
//       id: "1",
//       name: "Moin",
//       email: "moin@gmail.com"
//     },
//     {
//       id: "2",
//       name: "Shahzaib",
//       email: "shahzaib@gmail.com"
//     }
// ]

  return (
    <div className="ui container">
      Hello Moin
      <ContactHeader/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
