import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/operations';
import {Form, Input, Button} from './RegisterForm.styled'


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form  onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <Input type="text" name="name" />
      </label>
      <label >
        Email
        <Input type="email" name="email" />
      </label>
      <label>
        Password
        <Input type="password" name="password" />
      </label>
      <Button type="submit">Register</Button>
    </Form>
  );
};