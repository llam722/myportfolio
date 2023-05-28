import { render, screen } from '@testing-library/react';
import Home from './Home';



describe('Home', () => {
  it('should render a heading', () => {
    render(<Home />);
    const heading = screen.getByText(/tinkerer/i)

    expect(heading).toBeInTheDocument();
  })

    it('should render an image', () => {
      render(<Home />);
      
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(5);
  })
})