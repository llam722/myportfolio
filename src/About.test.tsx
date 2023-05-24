import { render, screen } from '@testing-library/react';
import About from './About';



describe('About', () => {
  it('should render a heading', () => {
    render(<About />);
    const heading = screen.getByText(/From Legos to Code: A Journey of Building and Problem-Solving/i)

    expect(heading).toBeInTheDocument();
  })

    it('should render a paragraph', () => {
      render(<About />);
      
    const paragraph = screen.getAllByRole('img')
    expect(paragraph).toHaveLength(6);
  })
})