import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';
import exp from 'constants';



describe('Nav', () => {
  render(<BrowserRouter><Nav /></BrowserRouter>);
  it('renders a list', () => {

    const list = screen.getAllByRole('listitem')
    expect(list).toHaveLength(6);
  })

})