import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HomePage } from './home-page';

describe('HomePage', () => {
  it('shows the product name', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1, name: 'FinePrint' })).toBeInTheDocument();
  });

  it('always shows the not-legal-advice disclaimer', () => {
    render(<HomePage />);
    expect(screen.getByText(/does not give legal advice/i)).toBeInTheDocument();
  });
});
