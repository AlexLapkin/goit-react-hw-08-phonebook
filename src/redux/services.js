import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

export const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
});

const setToken = token => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Thunk логинизации
export const loginThunk = createAsyncThunk('auth/login', async (formData,
    thunkAPI) => {
    try {
        const { data } = await instance.post("/users/login", formData);
        // Це буде записано в action.payload ({ payload }) редюсера
        setToken(data.token);
        return data;
     } catch (err) {
       return thunkAPI.rejectWithValue(err.response.data);
    }
}
);

// Thunk регистрации
export const registerThunk = createAsyncThunk('auth/register', async (formData,
    thunkAPI) => {
    try {
        const { data } = await instance.post("/users/signup", formData);
        // Це буде записано в action.payload ({ payload }) редюсера
        setToken(data.token);
        return data;
        
    } catch (err) {
       return thunkAPI.rejectWithValue(err.response.data);
    }
}
);

// Thunk автоматической логинизации
export const refreshThunk = createAsyncThunk('auth/refresh', async (_,
    thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        setToken(token);
        const { data } = await instance.get("/users/current");
        // Це буде записано в action.payload ({ payload }) редюсера
        return data;
        
    } catch (err) {
       return thunkAPI.rejectWithValue(err.response.data);
    }
},
    {
        condition: (_, thunkAPI) => {
            const state = thunkAPI.getState();
            const token = state.auth.token;
            if (!token) return false;
            return true;
        },
    }
);

// Thunk разлогинизации
export const logoutThunk = createAsyncThunk('auth/logOut', async (_,
    thunkAPI) => {
    try {
        const { data } = await instance.post("/users/logout");
        // Це буде записано в action.payload ({ payload }) редюсера
        return data;
    } catch (err) {
       return thunkAPI.rejectWithValue(err.response.data);
    }
}
);

// Thunk загрузки контактов
export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', async (_,
    thunkAPI) => {
   try {
       const { data } = await instance.get("/contacts");
       // Це буде записано в action.payload ({ payload }) редюсера
        return data;
    } catch (err) {
       return thunkAPI.rejectWithValue(err.response.data);
   }
}
);

// Додавання контакту addContact 
export const addContactThunk = createAsyncThunk('contacts/addContacts', async (finalContacts,
   thunkAPI) => {
    try {
        const { data } = await instance.post("/contacts", finalContacts);
       // Це буде записано в action.payload ({ payload }) редюсера
        return data;
    } catch (err) {
       return thunkAPI.rejectWithValue(err.response.data);
    }
}
);

// Видалення контакту deleteContact
 export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (contactId,
    thunkAPI) => {
    try {
        const { data } = await instance.delete(`/contacts/${contactId}`);
        // Повідомлення про видалення з книги контакту
        Notiflix.Notify.info(`Contact ${data.name} is deleted!`, {
            position: 'center-top',
           timeout: 3000,
        });
        // Це буде записано в action.payload ({ payload }) редюсера
       return data;
        
        } catch (err) {
       return thunkAPI.rejectWithValue(err.response.data);
    }
}
);