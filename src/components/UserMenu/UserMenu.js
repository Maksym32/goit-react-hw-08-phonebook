import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { UserMenuBox, UserTitle, Button } from './UserMenu.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuBox>
      <UserTitle>Welcome, {user.name}</UserTitle>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuBox>
  );
};