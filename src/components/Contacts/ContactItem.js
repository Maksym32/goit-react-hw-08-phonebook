import { ListItem, TelNum, DelBtn } from "./ContactList.styled";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from "Redux/operations";


export function ContactItem({ contact }) {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <ListItem>
            {contact.name}: <TelNum>{contact.number}</TelNum>
            <DelBtn type="button" onClick={handleDelete}>Delete</DelBtn>
        </ListItem>
    )
}
ContactItem.propTypes = {
    contact: PropTypes.object,
    idx: PropTypes.number,
}