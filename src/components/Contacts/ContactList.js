import { ContactItem } from "./ContactItem";
import PropTypes from 'prop-types';
import { List,ContactListBox } from "./ContactList.styled"
import {  useSelector } from "react-redux";
import { getContacts,getFilter } from "../../Redux/contacts/selectors";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filterContact = useSelector(getFilter);

    const getVisibleNameFilter = () => {
        const normalFilter = filterContact.toLowerCase().trim();
        
        if (contacts) {
            return contacts.filter(contact => contact.name.toLowerCase().includes(normalFilter))
        }
    }

    const filterName = getVisibleNameFilter();

    return (
        <ContactListBox>
        <h2 style={{ textAlign: 'center' }}>Contact List</h2>
        <List>
            {filterName ?
                filterName.map((contact, idx) => (
                    <ContactItem key={contact.id} contact={contact} idx={idx} />
                ))
                : <p>No any contacts</p>}
        </List>  
        </ContactListBox>
    )
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
}