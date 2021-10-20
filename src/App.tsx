import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import S from "./App.module.css";

type contactsType = {
  id: string;
  name: string;
  number: string;
};

const App = () => {
  const stateLoad: contactsType[] = JSON.parse(
    window.localStorage.getItem("contacts") ??
      '[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]'
  );

  const [contacts, setContacts] = useState<contactsType[]>(stateLoad);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const findName = (str: string): boolean => {
    return contacts.find((item) =>
      item.name.toLowerCase().includes(str.toLowerCase())
    )
      ? true
      : false;
  };

  const formSubmitHandler = (data: contactsType) => {
    setContacts((state) => [...state, data]);
  };

  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = (id: string): void => {
    setContacts((state) => state.filter((item) => item.id !== id));
  };

  return (
    <div className={S.container}>
      <h1>Phonebook</h1>
      <ContactForm formSubmit={formSubmitHandler} findName={findName} />
      <h2 className={S.title}>Contacts</h2>
      <Filter filterValue={filter} handleChangeFilter={changeFilter} />
      <ContactList
        list={contacts}
        filterValue={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
