import { render, fireEvent, screen } from '@testing-library/react';
import App from "./App";

describe('Unit Test', () => {
  test('email state variable updates on input change', () => {
    const {getByLabelText} = render(<App/>);
    const emailInput = getByLabelText('Email address');

    fireEvent.change(emailInput, {target: {value: 'test@example.com'}});

    expect(emailInput.value).toBe('test@example.com');
  });

  test('password state variable updates on input change', () => {
    const {getByLabelText} = render(<App/>);
    const passwordInput = getByLabelText('Password');

    fireEvent.change(passwordInput, {target: {value: 'testpassword'}});

    expect(passwordInput.value).toBe('testpassword');
  });

  test('rememberMe state variable updates on checkbox toggle', () => {
    const {getByLabelText} = render(<App/>);
    const rememberMeCheckbox = getByLabelText('Remember me');

    fireEvent.click(rememberMeCheckbox);

    expect(rememberMeCheckbox.checked).toBe(true);
  });
});
describe('End-To-End test', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('should save email, password, and remember me in local storage when signing in', () => {
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const rememberMeCheckbox = screen.getByLabelText('Remember me');
    const signInButton = screen.getByText('Sign in');

    // Fill in the form inputs
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(rememberMeCheckbox);

    // Click the sign-in button
    fireEvent.click(signInButton);

    // Retrieve values from local storage
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const savedRememberMe = localStorage.getItem('rememberMe');

    // Assert that the values were saved correctly
    expect(savedEmail).toBe('test@example.com');
    expect(savedPassword).toBeDefined();
    expect(savedRememberMe).toBe('true');
  });
});

