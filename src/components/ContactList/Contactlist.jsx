import { selectFilteredContacts } from 'redux/contacts/contacts.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/services';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contacts_cont}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contacts_item} key={id}>
          {name}: {number}
          <button
            className={css.contacts_item_btn}
            type="button"
            onClick={() => dispatch(deleteContactThunk(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
