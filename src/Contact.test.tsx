import { render, screen } from '@testing-library/react';
import Contact from './Contact';



describe('Contact', () => {
  it('should render a heading', () => {
    render(<Contact />);
    const heading = screen.getByText(/From Legos to Code: A Journey of Building and Problem-Solving/i)

    expect(heading).toBeInTheDocument();
  })

    it('should render a paragraph', () => {
      render(<Contact />);
      
    const paragraph = screen.getAllByRole('img')
    expect(paragraph).toHaveLength(6);
  })
})