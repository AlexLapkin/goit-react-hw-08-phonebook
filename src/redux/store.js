import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contacts.reducer';
import { filterReducer } from './contacts/filter.reducer';
import { authReducer } from './auth/auth.reducer';

//const contactsConfig = {
//  key: 'contacts',
//  storage,
//  whitelist: ['contacts'],
  //blacklist: ['filter'],
//};

const authConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

export const store = configureStore({
  reducer: {
 //   contactsStore: persistReducer(contactsConfig, contactsReducer),
    filter: filterReducer,
    auth: persistReducer(authConfig, authReducer),
    contactsStore: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);