import { render, screen } from '@testing-library/react';
import Projects from './Projects';



describe('Projects', () => {
  it('should render a heading', () => {
    render(<Projects />);
    const heading = screen.getByText(/recent work/i)

    expect(heading).toBeInTheDocument();
  })

  it('should render an article', () => {
    render(<Projects />);
    
  const article = screen.getAllByRole('article')
  expect(article).toHaveLength(3);
  })

})