export const getFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const getVisibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normFilter = filter.toLowerCase();

  return contacts.filter((cotact) =>
    cotact.name.toLowerCase().includes(normFilter)
  );
};