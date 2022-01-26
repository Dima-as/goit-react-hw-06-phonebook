import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContacts = createAction("contacta/add", ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContacts = createAction("contacta/delete");

const filterContacts = createAction("contacta/filter");

export default { addContacts, deleteContacts, filterContacts };
