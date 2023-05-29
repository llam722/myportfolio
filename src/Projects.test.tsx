import { render, screen } from '@testing-library/react';
import Projects from './Projects';



describe('Projects', () => {
  it('should render a heading', () => {
    render(<Projects />);
    const heading = screen.getByText(/tinkerer/i)

    expect(heading).toBeInTheDocument();
  })

  it('should render an image', () => {
    render(<Projects />);
    
  const image = screen.getAllByRole('img')
  expect(image).toHaveLength(5);
  })

})