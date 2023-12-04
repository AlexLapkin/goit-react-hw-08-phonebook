import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/contacts.selectors';
import { setFilter } from 'redux/contacts/filter.reducer';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  // Функція відслідкування вміста інпуту
  const changeInputFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={css.filter_cont}>
      <p className={css.filter_cont_text}>Find contacts by name</p>
      <input
        className={css.filter_inp}
        type="text"
        name={filter}
        onChange={changeInputFilter}
        placeholder="Enter name"
      />
    </label>
  );
};

export default Filter;
