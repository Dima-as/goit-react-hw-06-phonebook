import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actionContacts from "../../redux/contact-action";
import { getVisibleContacts } from "../../redux/contacts-selector";
import s from "./ContactList.module.scss";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
  const deleteContact = (id) => dispatch(actionContacts.deleteContacts(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <button className={s.btn} onClick={() => deleteContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
