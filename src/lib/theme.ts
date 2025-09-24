export const themeSchema = {
  theme: {
    name: 'LottieFiles Inspired',
    modes: ['light', 'dark'] as const,
  },
  colors: {
    light: {
      primary: '#14B8A6',
      secondary: '#FBBF24',
      background: {
        default: '#FFFFFF',
        subtle: '#F9FAFB',
        dark: '#111827',
      },
      text: {
        primary: '#1F2937',
        secondary: '#6B7280',
        onDark: '#FFFFFF',
        onDarkSecondary: '#9CA3AF',
      },
      border: '#E5E7EB',
      white: '#FFFFFF',
    },
    dark: {
      primary: '#14B8A6',
      secondary: '#FBBF24',
      background: {
        default: '#111827',
        subtle: '#1F2937',
        dark: '#000000',
      },
      text: {
        primary: '#F9FAFB',
        secondary: '#9CA3AF',
        onDark: '#F9FAFB',
        onDarkSecondary: '#9CA3AF',
      },
      border: '#374151',
      white: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
    headings: {
      font: 'font-bold',
      sizes: {
        h1: 'text-4xl md:text-6xl',
        h2: 'text-3xl md:text-5xl',
      },
    },
    body: {
      font: 'font-normal',
      size: 'text-lg',
    },
    links: {
      font: 'font-medium',
    },
    buttons: {
      font: 'font-semibold',
    },
  },
  layout: {
    container: { padding: 'px-6' },
    sectionSpacing: 'py-20 md:py-32',
    gridGap: 'gap-6',
  },
  components: {
    button: { borderRadius: 'rounded-lg', padding: 'px-6 py-3' },
    input: {
      borderRadius: 'rounded-lg',
      padding: 'pl-12 pr-4 py-4',
      border: 'border-2',
    },
    card: { borderRadius: 'rounded-xl', shadow: 'shadow-md', padding: 'p-4' },
    header: {
      position: 'sticky',
      background: 'bg-white/80 backdrop-blur-md',
      border: 'border-b',
    },
  },
} as const;

export type ThemeSchema = typeof themeSchema;
