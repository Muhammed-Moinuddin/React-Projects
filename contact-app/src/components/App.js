import React, {useState, useEffect} from "react";
import './App.css';
import ContactHeader from "./ContactHeader";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contactsKey";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])
  };

  
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
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
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
