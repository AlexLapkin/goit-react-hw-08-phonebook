import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContactsThunk, addContactThunk, deleteContactThunk } from "redux/services";

const initialState = {
    contacts: [],
    isLoading: false,
    error: null
};

const contactsSlice = createSlice({
    // Ім'я слайсу
    name: "contacts",
    // Початковий стан редюсера слайсу
    initialState,
    // Об'єкт редюсерів
    reducers: {},
    extraReducers: builder => builder
    .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
            })
    .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, payload];
          })
    .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
            })
               
        .addMatcher(
            isAnyOf(
                fetchContactsThunk.pending,
                addContactThunk.pending,
                deleteContactThunk.pending),
            state => {
            state.isLoading = true;
        })
        
        .addMatcher(
            isAnyOf(
        fetchContactsThunk.rejected,
        addContactThunk.rejected,
        deleteContactThunk.rejected),
            (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })
});



// Генератори екшн-креаторс
export const contactsReducer = contactsSlice.reducer;