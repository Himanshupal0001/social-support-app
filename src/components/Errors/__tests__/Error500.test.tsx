import { render, screen } from '@/test/test-utils';
import { Error500 } from '../index';

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Error500', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the 500 error code', () => {
    render(<Error500 />);

    expect(screen.getByText('500')).toBeInTheDocument();
  });

  it('renders the error title', () => {
    render(<Error500 />);

    expect(screen.getByText('Internal Server Error')).toBeInTheDocument();
  });

  it('renders the error description', () => {
    render(<Error500 />);

    expect(
      screen.getByText(/Something went wrong on our end/)
    ).toBeInTheDocument();
  });

  it('renders the Go Home button', () => {
    render(<Error500 />);

    const goHomeButton = screen.getByRole('button', { name: /go home/i });
    expect(goHomeButton).toBeInTheDocument();
  });

  it('navigates to home when Go Home button is clicked', async () => {
    const user = await import('@testing-library/user-event');
    render(<Error500 />);

    const goHomeButton = screen.getByRole('button', { name: /go home/i });
    await user.userEvent.click(goHomeButton);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('has proper styling classes', () => {
    render(<Error500 />);

    const container = document.querySelector('.min-h-screen');
    expect(container).toHaveClass('min-h-screen', 'bg-background');
  });
});
