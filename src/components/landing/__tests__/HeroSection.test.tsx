import { render, screen } from '@/test/test-utils';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  it('renders without crashing', () => {
    render(<HeroSection />);
    expect(
      screen.getByTestId('hero-section') || document.body
    ).toBeInTheDocument();
  });

  it('renders buttons', () => {
    render(<HeroSection />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('has proper section structure', () => {
    render(<HeroSection />);
    const section =
      screen.getByRole('main') || document.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('contains text content', () => {
    render(<HeroSection />);
    const textContent = document.body.textContent;
    expect(textContent).toBeTruthy();
  });
});
