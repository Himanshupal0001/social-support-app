import { render, screen } from '@/test/test-utils';
import Navbar from '../Navbar';
import userEvent from '@testing-library/user-event';

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
    expect(document.querySelector('header')).toBeInTheDocument();
  });

  it('renders brand logo link', () => {
    render(<Navbar />);
    const brandLink = screen.getByRole('link', {
      name: /Social Support Portal/i,
    });
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute('href', '/');
  });

  it('renders navigation links', () => {
    render(<Navbar />);

    // Check for home link
    const homeLink = screen.getByRole('link', { name: /navbar.home/i });
    expect(homeLink).toBeInTheDocument();

    // Check for about link
    const aboutLink = screen.getByRole('link', { name: /navbar.about/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '#about');

    // Check for how it works link
    const howLink = screen.getByRole('link', { name: /navbar.howItWorks/i });
    expect(howLink).toBeInTheDocument();
    expect(howLink).toHaveAttribute('href', '#how');

    // Check for apply now link
    const applyLink = screen.getByRole('link', { name: /navbar.applyNow/i });
    expect(applyLink).toBeInTheDocument();
    expect(applyLink).toHaveAttribute('href', '/apply');
  });

  it('renders theme and language toggles', () => {
    render(<Navbar />);
    // Check if toggle buttons are present (they might be custom components)
    const toggles = document.querySelectorAll('button');
    expect(toggles.length).toBeGreaterThan(0);
  });

  it('navigates to home when brand logo is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const brandLink = screen.getByRole('link', {
      name: /Social Support Portal/i,
    });
    await user.click(brandLink);
    expect(brandLink).toHaveAttribute('href', '/');
  });

  it('navigates to apply page when apply link is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const applyLink = screen.getByRole('link', { name: /navbar.applyNow/i });
    await user.click(applyLink);
    expect(applyLink).toHaveAttribute('href', '/apply');
  });

  it('has proper header structure', () => {
    render(<Navbar />);
    const header = document.querySelector('header');
    expect(header).toHaveClass('sticky', 'top-0');
  });

  it('has mobile responsive design', () => {
    render(<Navbar />);
    // Check for mobile controls div
    const mobileControls = document.querySelector('.md\\:hidden');
    expect(mobileControls).toBeInTheDocument();
  });
});
