import { useDispatch } from 'react-redux';
import { logIn } from '../../Redux/auth/operations';
import { Input, Form } from './LoginForm.styled';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <Input type="email" name="email" />
      </label>
      <label>
        Password
        <Input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </Form>
  );
};