import { render, screen } from '@testing-library/react';
import Footer from './Footer';



describe('Footer', () => {

  it('should render a heading', () => {
    render(<Footer />);
    const heading = screen.getByText(/collaborate to innovate/i)

    expect(heading).toBeInTheDocument();
  })
  
    it('should render an image', () => {
      render(<Footer />);
      
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(1);
    })
  
  
})