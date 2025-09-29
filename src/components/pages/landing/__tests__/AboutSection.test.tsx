import { render, screen } from '@/test/test-utils';
import AboutSection from '../AboutSection';

describe('AboutSection', () => {
  it('renders without crashing', () => {
    render(<AboutSection />);
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('renders main section title (h2)', () => {
    render(<AboutSection />);
    const mainHeading = screen.getByRole('heading', { level: 2 });
    expect(mainHeading).toBeInTheDocument();
  });

  it('renders section description', () => {
    render(<AboutSection />);
    const description = screen.getByText(/aboutSection.description/i);
    expect(description).toBeInTheDocument();
  });

  it('renders four feature cards', () => {
    render(<AboutSection />);
    // Check for the four feature cards
    const cards = document.querySelectorAll('.group.rounded-xl.border');
    expect(cards.length).toBe(4);
  });

  it('has proper section ID for navigation', () => {
    render(<AboutSection />);
    const section = document.querySelector('section');
    expect(section).toHaveAttribute('id', 'about');
  });

  it('renders feature cards with icons', () => {
    render(<AboutSection />);
    // Check that feature cards contain icon spans
    const iconSpans = document.querySelectorAll(
      '.inline-grid.place-items-center'
    );
    expect(iconSpans.length).toBe(4);
  });

  it('has responsive grid layout', () => {
    render(<AboutSection />);
    // Check for responsive grid classes
    const gridContainer = document.querySelector(
      '.grid.grid-cols-1.sm\\:grid-cols-2'
    );
    expect(gridContainer).toBeInTheDocument();
  });

  it('contains proper text content', () => {
    render(<AboutSection />);
    const textContent = document.body.textContent;
    expect(textContent).toBeTruthy();
    expect(textContent?.length).toBeGreaterThan(0);
  });
});
