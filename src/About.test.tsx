import { render, screen } from '@testing-library/react';
import About from './About';



describe('About', () => {
  it('renders a heading', () => {
    render(<About />);

    // const heading = screen.getByRole('heading', {
    //   name: /From Legos to Code: A Journey of Building and Problem-Solving/i,
    // })
    const heading = screen.getByText(/From Legos to Code: A Journey of Building and Problem-Solving/i)

    expect(heading).toBeInTheDocument();
  })
})