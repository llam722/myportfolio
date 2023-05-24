import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';



describe('Nav', () => {
  it('renders a list', () => {
    render(<BrowserRouter><Nav /></BrowserRouter>);

    const list = screen.getAllByLabelText('li')
    expect(list).toHaveLength(6);
  })
})