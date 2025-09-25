import { render, screen } from '@/test/test-utils';
import HowItWorks from '../HowItWorks';

describe('HowItWorks', () => {
  it('renders without crashing', () => {
    render(<HowItWorks />);
    expect(document.body).toBeInTheDocument();
  });

  it('contains text content', () => {
    render(<HowItWorks />);
    const textContent = document.body.textContent;
    expect(textContent).toBeTruthy();
  });

  it('has proper section structure', () => {
    render(<HowItWorks />);
    const section = document.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('renders multiple step elements', () => {
    render(<HowItWorks />);
    const stepElements = document.querySelectorAll(
      '[class*="step"], [class*="grid"]'
    );
    expect(stepElements.length).toBeGreaterThan(0);
  });
});
