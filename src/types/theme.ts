export type ThemeType = 'theme1' | 'theme2' | 'theme3';

export interface Colors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  accent: string;
  border: string;
  card: string;
  hover: string;
}

export interface Typography {
  fontFamily: string;
  fontSize: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    bold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    loose: number;
  };
}

export interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface Layout {
  type: 'minimalist' | 'sidebar' | 'grid';
  maxWidth: string;
  containerPadding: string;
  headerHeight: string;
  sidebarWidth?: string;
  gridGap: string;
  borderRadius: string;
}

export interface Animation {
  transition: string;
  duration: string;
  easing: string;
}

export interface Theme {
  id: ThemeType;
  name: string;
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  layout: Layout;
  animation: Animation;
}

export interface ThemeContextType {
  currentTheme: ThemeType;
  theme: Theme;
  changeTheme: (theme: ThemeType) => void;
  isLoading: boolean;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}