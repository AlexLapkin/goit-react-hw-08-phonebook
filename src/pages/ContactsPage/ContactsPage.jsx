import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/Contactlist';
import Filter from '../../components/Filter/Filter';
import UserMenu from 'components/UserMenu/UserMenu';
import css from './ContactsPage.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  selectContactsIsLoading,
  selectContactsError,
} from 'redux/contacts/contacts.selectors';
import { fetchContactsThunk } from 'redux/services';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  // Запуск рендера за допомогою useEffect
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={css.cont_page}>
      <UserMenu />
      <div className={css.cont_page_cont}>
        <h1 className={css.cont_page_title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.cont_page_subtitle}>Contacts</h2>
        <Filter />
        {isLoading && !error}
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
