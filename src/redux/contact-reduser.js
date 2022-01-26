import { combineReducers } from "redux";
import action from "./contact-action";
import { createReducer } from "@reduxjs/toolkit";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const items = createReducer(initialContacts, {
  [action.addContacts]: (state, { payload }) => [...state, payload],
  [action.deleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [action.filterContacts]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
