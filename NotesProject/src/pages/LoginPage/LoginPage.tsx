import { FC } from 'react';
import useForm from '../../hooks/useForm';

interface FormState {
  [key: string]: string;
}

const Login: FC = () => {
  const initialValues: FormState = {
    email: '',
    password: '',
  }

  const onSubmit = (values: FormState) => {
    console.log(`Form submitted: ${values.password}`);
  };
  const { values, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit,
  });
  
  return (
    <div className="LoginPage Page">
      <h1>Login</h1>
      <label htmlFor='email'>
        Email:
        <input
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </label>
      <form onSubmit={handleSubmit}>
        <label htmlFor='password'>
          Password:
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </label>
        <button type="submit">Login</button>
        
      </form>
    </div>
  );
};

export default Login;