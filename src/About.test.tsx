import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';
import 'testing-@testing-library/jest-dom'


describe('About', () => {
  it('renders a paragraph', () => {
    render(<About />);

    const heading = screen.getByRole('heading', {
      name: /from legos to code: a journey of building and problem-solving/i,
    })
    expect(heading).toBeInTheDocument();
  })
})