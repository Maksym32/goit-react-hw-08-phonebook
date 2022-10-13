// import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { NavItem } from './Navigation.styled';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavItem to="/">
        Home
      </NavItem>
      {isLoggedIn && (
        <NavItem to="/contacts">
          PhoneBook
        </NavItem>
      )}
    </nav>
  );
};