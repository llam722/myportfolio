import { render, screen } from '@testing-library/react';
import Footer from './Footer';



describe('Footer', () => {
  render(<Footer />);

 it('should render a list', () => {

    const list = screen.getAllByRole('listitem')
    expect(list).toHaveLength(3);
  })
  
})