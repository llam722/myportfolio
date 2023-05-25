import { render, screen } from '@testing-library/react';
import Contact from './Contact';



describe('Contact', () => {

  it('should render a heading', () => {
    render(<Contact />);
    const heading = screen.getByText(/collaborate to innovate/i)

    expect(heading).toBeInTheDocument();
  })
  
    it('should render an image', () => {
      render(<Contact />);
      
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(1);
    })
  
  
})