import { render, screen } from '@testing-library/react';
import About from './About';



describe('About', () => {
  it('should render a heading', () => {
    render(<About />);
    const heading = screen.getByText(/From Legos to Code: A Journey of Building and Problem-Solving/i)

    expect(heading).toBeInTheDocument();
  })

    it('should render an image', () => {
      render(<About />);
      
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(5);
  })
})