import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Modal from "./components/Modal";
import S from "./App.module.css";

type contactsType = {
  id: string;
  name: string;
  number: string;
};

// interface StateType {
//   contacts: contactsType[];
//   filter: string;
// }

const App = () => {
  const [contacts, setContacts] = useState(
    [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
  );
  const [filter, setFilter] = useState('');
  // state: StateType = {
  //   contacts: [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   filter: "",
  // };

  // componentDidMount() {
  //   const localData = localStorage.getItem("contacts");
  //   if (localData) {
  //     this.setState({ contacts: JSON.parse(localData) });
  //   }
  // }

  // componentDidUpdate(prevProps: StateType, prevState: StateType) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  const findName = (str: string): boolean => {
    return contacts.find((item) =>
      item.name.toLowerCase().includes(str.toLowerCase())
    )
      ? true
      : false;
  }

  const formSubmitHandler = (data: contactsType) => {
    setContacts(state => [...state, data]);
    // this.setState((prevState: StateType) => ({
    //   contacts: [...prevState.contacts, data],
    // }));
  }

  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
    // this.setState({ filter: e.currentTarget.value });
  }

  const deleteContact = (id: string): void => {
    setContacts(state => state.filter((item) => item.id !== id))
    // this.setState((prevState: StateType) => ({
    //   contacts: prevState.contacts.filter((item) => item.id !== id),
    // }));
  }


  // const { contacts, filter } = this.state;
  return (
    <div className={S.container}>
      <h1>Phonebook</h1>
      <ContactForm
        formSubmit={formSubmitHandler}
        findName={findName}
      />
      <h2 className={S.title}>Contacts</h2>
      <Filter filterValue={filter} handleChangeFilter={changeFilter} />
      <ContactList
        list={contacts}
        filterValue={filter}
        deleteContact={deleteContact}
      />
    </div>
  );

}

export default App;
