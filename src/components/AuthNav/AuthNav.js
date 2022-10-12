import { AuthNavItem } from './AuthNav.styled';


export const AuthNav = () => {
  return (
    <div>
      <AuthNavItem to="/register">
        Register
      </AuthNavItem>
      <AuthNavItem to="/login">
        Log In
      </AuthNavItem>
    </div>
  );
};