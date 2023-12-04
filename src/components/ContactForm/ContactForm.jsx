import { useState } from 'react';
import { selectContacts } from 'redux/contacts/contacts.selectors';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { addContactThunk } from 'redux/services';
import Notiflix from 'notiflix';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [clickBtn, setClickBtn] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  //console.log(contacts);

  // Функція додавання контакту
  const handleAddContact = contact => {
    const finalContacts = {
      ...contact,
      id: nanoid(),
    };

    // Перевірка на наявніть контакту у збережених
    const hasRepeateContact = contacts.some(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (hasRepeateContact) {
      alert(`${contact.name} is already in contacts!`);
      setClickBtn(false);
    } else {
      dispatch(addContactThunk(finalContacts));
      setName('');
      setNumber('');
      setTimeout(() => setClickBtn(false), 1000);
      // Повідомлення про додавання до книги контакту
      Notiflix.Notify.success(`Contact ${contact.name} is added!`, {
        position: 'center-top',
        timeout: 3000,
      });
    }
  };

  // Функція обробки подіі сабміту форми
  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
    };

    setClickBtn(true);
    handleAddContact(contact);
  };

  return (
    <form className={css.contact_form_cont} onSubmit={handleSubmit}>
      <label>
        <p className={css.contact_form_cont_text}>Name</p>
        <input
          className={css.contact_form_inp}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          onChange={event => setName(event.target.value)}
          value={name}
        />
      </label>

      <label>
        <p className={css.contact_form_cont_text}>Number</p>
        <input
          className={css.contact_form_inp}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          onChange={event => setNumber(event.target.value)}
          value={number}
        />
      </label>
      <button type="submit" className={css.contact_form_btn}>
        {!clickBtn ? 'Add contact' : <Loader className="spinner" />}
      </button>
    </form>
  );
};

export default ContactForm;
