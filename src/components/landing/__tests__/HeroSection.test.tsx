import { render, screen } from '@/test/test-utils';
import HeroSection from '../HeroSection';
import userEvent from '@testing-library/user-event';

describe('HeroSection', () => {
  it('renders without crashing', () => {
    render(<HeroSection />);
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('renders main heading (h1)', () => {
    render(<HeroSection />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('renders start application link', () => {
    render(<HeroSection />);
    const startLink = screen.getByRole('link', {
      name: /heroSection.startBtnText/i,
    });
    expect(startLink).toBeInTheDocument();
    expect(startLink).toHaveAttribute('href', '/apply');
  });

  it('renders learn more link', () => {
    render(<HeroSection />);
    const learnMoreLink = screen.getByRole('link', {
      name: /heroSection.learnMoreText/i,
    });
    expect(learnMoreLink).toBeInTheDocument();
    expect(learnMoreLink).toHaveAttribute('href', '#how');
  });

  it('renders feature cards', () => {
    render(<HeroSection />);
    // Check for the three feature cards with icons
    const cards = document.querySelectorAll('.group.rounded-xl.border');
    expect(cards.length).toBe(3);
  });

  it('contains description text', () => {
    render(<HeroSection />);
    const description = screen.getByText(/heroSection.description/i);
    expect(description).toBeInTheDocument();
  });

  it('navigates to apply page when start button is clicked', async () => {
    const user = userEvent.setup();
    render(<HeroSection />);
    const startLink = screen.getByRole('link', {
      name: /heroSection.startBtnText/i,
    });
    await user.click(startLink);
    // The link should have the correct href
    expect(startLink).toHaveAttribute('href', '/apply');
  });
});
