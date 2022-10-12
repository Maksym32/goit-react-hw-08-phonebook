import { useEffect } from 'react';
import {Filter} from '../components/Filter/Filter'
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from '../components/Contacts/ContactList';
import { InputForm } from '../components/Form/Form';
import { fetchContacts } from '../Redux/contacts/operations';
import { getIsLoading } from '../Redux/contacts/selectors';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <InputForm />
      <Filter/>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}