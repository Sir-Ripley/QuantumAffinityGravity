import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Holodeck from '../Holodeck';

// Mock Oracle to simplify Holodeck tests
jest.mock('../Oracle', () => () => <div data-testid="mock-oracle">Oracle Component</div>);

// Mock MathJax
beforeAll(() => {
  window.MathJax = {
    typesetPromise: jest.fn().mockResolvedValue(),
  };
});

describe('Holodeck Component', () => {
  test('renders with default "life" tab active', () => {
    render(<Holodeck />);
    expect(screen.getByTestId('tab-life')).toBeInTheDocument();
    expect(screen.getByText(/The Psychon/i)).toBeInTheDocument();
  });

  test('switches to "Galactic" tab on button click', () => {
    render(<Holodeck />);
    const galacticBtn = screen.getByRole('button', { name: /galactic/i });
    fireEvent.click(galacticBtn);
    expect(screen.getByTestId('tab-galactic')).toBeInTheDocument();
    expect(screen.getByText(/The Ghost in the Machine/i)).toBeInTheDocument();
    expect(window.MathJax.typesetPromise).toHaveBeenCalled();
  });

  test('switches to "Connectome" tab on button click', () => {
    render(<Holodeck />);
    const connectomeBtn = screen.getByRole('button', { name: /connectome/i });
    fireEvent.click(connectomeBtn);
    expect(screen.getByTestId('tab-cosmic')).toBeInTheDocument();
    expect(screen.getByText(/The Universe is Thinking/i)).toBeInTheDocument();
  });

  test('switches to "Affiniton" tab on button click', () => {
    render(<Holodeck />);
    const affinitonBtn = screen.getByRole('button', { name: /affiniton/i });
    fireEvent.click(affinitonBtn);
    expect(screen.getByTestId('tab-particle')).toBeInTheDocument();
    expect(screen.getByText(/The Guitar String/i)).toBeInTheDocument();
  });

  test('switches to "Pixelverse" tab on button click', () => {
    render(<Holodeck />);
    const pixelverseBtn = screen.getByRole('button', { name: /pixelverse/i });
    fireEvent.click(pixelverseBtn);
    expect(screen.getByTestId('tab-pixel')).toBeInTheDocument();
    expect(screen.getByText(/The Soft Grid/i)).toBeInTheDocument();
  });

  test('switches to "Oracle AI" tab on button click', () => {
    render(<Holodeck />);
    const oracleBtn = screen.getByRole('button', { name: /oracle ai/i });
    fireEvent.click(oracleBtn);
    expect(screen.getByTestId('mock-oracle')).toBeInTheDocument();
  });
});
