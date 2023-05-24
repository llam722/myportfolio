import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {

  it('should render text that has my name', async () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkElement = await screen.findAllByText(/louis lam/i)
    expect(linkElement).toBeTruthy();
  })

 })