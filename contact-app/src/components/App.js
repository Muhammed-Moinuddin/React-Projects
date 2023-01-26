import React, {useState, useEffect} from "react";
import { uuid } from 'uuidv4';
import './App.css';
import ContactHeader from "./ContactHeader";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }
  
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    if (contacts.length > 0) localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
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
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
