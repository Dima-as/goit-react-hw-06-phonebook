export const getFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const getVisibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normFilter = filter.toLocaleLowerCase();

  return contacts.filter((cotact) =>
    cotact.name.toLocaleLowerCase().includes(normFilter)
  );
};
