import React, { useState } from "react";
import s from "./ContactForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/contacts-selector";
import contactsAction from "../../redux/contact-action";
import shortid from "shortid";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const hendleNameChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      return setName(value);
    }
    setNumber(value);
  };

  const hendleSubmit = (e) => {
    e.preventDefault();
    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(contactsAction.addContacts({ name, number }));
    reset();
  };
  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.list} onSubmit={hendleSubmit}>
      <label htmlFor={nameInputId} className={s.item}>
        <input
          id={nameInputId}
          onChange={hendleNameChange}
          value={name}
          className={s.input}
          placeholder="Rosie Simpson"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={numberInputId} className={s.item}>
        <input
          id={numberInputId}
          onChange={hendleNameChange}
          value={number}
          className={s.input}
          placeholder="459-12-56"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}
