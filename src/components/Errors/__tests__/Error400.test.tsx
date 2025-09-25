import { render, screen } from '@/test/test-utils';
import { Error400 } from '../index';

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Error400', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the 400 error code', () => {
    render(<Error400 />);

    expect(screen.getByText('400')).toBeInTheDocument();
  });

  it('renders the error title', () => {
    render(<Error400 />);

    expect(screen.getByText('Bad Request')).toBeInTheDocument();
  });

  it('renders the error description', () => {
    render(<Error400 />);

    expect(
      screen.getByText(/The request you made was invalid or malformed/)
    ).toBeInTheDocument();
  });

  it('renders the Go Home button', () => {
    render(<Error400 />);

    const goHomeButton = screen.getByRole('button', { name: /go home/i });
    expect(goHomeButton).toBeInTheDocument();
  });

  it('navigates to home when Go Home button is clicked', async () => {
    const user = await import('@testing-library/user-event');
    render(<Error400 />);

    const goHomeButton = screen.getByRole('button', { name: /go home/i });
    await user.userEvent.click(goHomeButton);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('has proper styling classes', () => {
    render(<Error400 />);

    const container = document.querySelector('.min-h-screen');
    expect(container).toHaveClass('min-h-screen', 'bg-background');
  });
});
