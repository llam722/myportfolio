import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import 'testing-@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// describe('App', () => {
//   it('renders the app', () => {
//     render(<App />, { wrapper: BrowserRouter });
//   })
  
// })