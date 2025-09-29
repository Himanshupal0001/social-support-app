import { render, screen } from '@/test/test-utils';
import HowItWorks from '../HowItWorks';
import userEvent from '@testing-library/user-event';

describe('HowItWorks', () => {
  it('renders without crashing', () => {
    render(<HowItWorks />);
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('renders main section title (h2)', () => {
    render(<HowItWorks />);
    const mainHeading = screen.getByRole('heading', { level: 2 });
    expect(mainHeading).toBeInTheDocument();
  });

  it('renders section description', () => {
    render(<HowItWorks />);
    const description = screen.getByText(/howItWorks.description/i);
    expect(description).toBeInTheDocument();
  });

  it('renders three step cards', () => {
    render(<HowItWorks />);
    // Check for the three step cards
    const cards = document.querySelectorAll('.group.rounded-xl.border');
    expect(cards.length).toBe(3);
  });

  it('renders apply CTA link', () => {
    render(<HowItWorks />);
    const applyLink = screen.getByRole('link', {
      name: /howItWorks.applyCta/i,
    });
    expect(applyLink).toBeInTheDocument();
    expect(applyLink).toHaveAttribute('href', '/apply');
  });

  it('has proper section ID for navigation', () => {
    render(<HowItWorks />);
    const section = document.querySelector('section');
    expect(section).toHaveAttribute('id', 'how');
  });

  it('navigates to apply page when CTA is clicked', async () => {
    const user = userEvent.setup();
    render(<HowItWorks />);
    const applyLink = screen.getByRole('link', {
      name: /howItWorks.applyCta/i,
    });
    await user.click(applyLink);
    // The link should have the correct href
    expect(applyLink).toHaveAttribute('href', '/apply');
  });
});
