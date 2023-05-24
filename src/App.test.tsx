import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {

  it('renders learn react link', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkElement = screen.getAllByText(/louis lam/i)
    expect(linkElement).toBeTruthy();
  })

 })