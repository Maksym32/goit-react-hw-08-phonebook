import { useSelector, useDispatch } from 'react-redux';
import { InputItem } from "./Form.styled";
import { getContacts } from 'Redux/selectors';
import { addContact } from '../../Redux/operations';


export function InputForm () {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
  
    if (contacts) {
      contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
        ? alert(name + ' is already in contacts')
        : dispatch(addContact({ name, number }))
    }
  

    form.reset();
  };
        return (
            <form  onSubmit={onSubmit}>
            <label>
              Name
                <InputItem
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
              />
            </label>
            <label>
              Number
              <InputItem
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
              />
            </label>
                    <button type="submit">Add contact</button>
                
            </form>
        )

}