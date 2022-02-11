import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },

    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    filterContacts(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});
export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
export const contacts = contactsSlice.reducer;
