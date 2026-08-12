// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CrewKey title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CrewKey/i);
    expect(titleElement).toBeInTheDocument();
});
