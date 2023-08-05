import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';



describe('Nav', () => {
  render(<BrowserRouter><Nav /></BrowserRouter>);
  it('should render a list', () => {

    const list = screen.getAllByRole('listitem')
    expect(list).toHaveLength(4);
  })

})