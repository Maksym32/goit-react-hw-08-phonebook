import { useDispatch, useSelector } from 'react-redux';
import { InputForm } from './components/Form/Form';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/Contacts/ContactList';
import { InputFormBox } from './components/Form/Form.styled';
import { ContactListBox } from './components/Contacts/ContactList.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/operations';
import { getIsLoading, getError } from 'Redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <>
      <InputFormBox>
        <h1 style={{textAlign: 'center'}}>Phonebook</h1>
        <InputForm/>
      </InputFormBox>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactListBox>
        <Filter/>
          <ContactList/> 
      </ContactListBox>
    </>
  );
}
