# ThemeApp - Multi-Theme Switcher

A modern React TypeScript application demonstrating dynamic theming with three distinct themes, each providing a completely different user experience through layout, typography, colors, and interactions.

## 🎨 Features

### Three Unique Themes
1. **Minimalist Theme** - Clean, light design with simple sans-serif fonts and minimal layout
2. **Dark Professional Theme** - Dark mode with sidebar layout, bold serif fonts, and professional styling
3. **Playful Theme** - Colorful card-based grid layout with playful Google Font (Pacifico) and vibrant interactions

### Core Functionality
- **Dynamic Theme Switching** - Instant theme changes with smooth animations
- **Persistent Preferences** - Theme selection saved to localStorage
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Real API Integration** - Products fetched from Fake Store API
- **Multi-page Navigation** - Home, About, and Contact pages with React Router
- **Form Handling** - Contact form with validation and security measures
- **Error Boundaries** - Graceful error handling and recovery
- **Security Features** - Input sanitization, rate limiting, CSP headers

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd multi-theme
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (⚠️ irreversible)

## 🏗️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Styled Components** - CSS-in-JS with dynamic theming
- **React Router DOM** - Client-side routing

### Styling & Theming
- **Dynamic Theme System** - Context-based theme management
- **Responsive Design** - Mobile-first approach
- **Google Fonts** - Inter, Playfair Display, Pacifico
- **CSS-in-JS** - Styled components with theme integration

### Security & Performance
- **Input Sanitization** - XSS prevention
- **Rate Limiting** - Form submission protection
- **CSP Headers** - Content Security Policy
- **Error Boundaries** - Graceful error handling
- **Performance Optimization** - Lazy loading and efficient re-renders

## 📱 Theme Details

### Theme 1: Minimalist
- **Layout**: Traditional top header with centered content
- **Colors**: Light background, blue accents, subtle grays
- **Typography**: Inter font family, clean and readable
- **Spacing**: Comfortable padding and margins
- **Interactions**: Subtle hover effects and smooth transitions

### Theme 2: Dark Professional
- **Layout**: Sidebar navigation on desktop, stacked on mobile
- **Colors**: Dark backgrounds, amber accents, high contrast
- **Typography**: Playfair Display serif font, elegant and professional
- **Spacing**: Generous whitespace, bold visual hierarchy
- **Interactions**: Bold hover states and dramatic animations

### Theme 3: Playful
- **Layout**: Card-based grid system with colorful gradients
- **Colors**: Vibrant gradients, multiple accent colors
- **Typography**: Pacifico cursive font, fun and friendly
- **Spacing**: Generous padding, flowing layouts
- **Interactions**: Bouncy animations, gradient effects, and playful transitions

## 🔧 Project Structure

```
src/
├── components/
│   ├── UI/
│   │   ├── Button.tsx          # Reusable button component
│   │   └── Card.tsx            # Product card component
│   ├── ErrorBoundary.tsx       # Error handling wrapper
│   └── Header.tsx              # Navigation header
├── context/
│   └── ThemeContext.tsx        # Theme state management
├── hooks/
│   └── useFakeStore.ts         # API data fetching
├── pages/
│   ├── Home.tsx                # Homepage with products
│   ├── About.tsx               # About page
│   └── Contact.tsx             # Contact form page
├── styles/
│   ├── GlobalStyles.ts         # Global styles and layout
│   └── themes.ts               # Theme configurations
├── types/
│   └── theme.ts                # TypeScript type definitions
├── utils/
│   └── security.ts             # Security utilities
└── App.tsx                     # Main application component
```

## 🛡️ Security Features

### Input Validation & Sanitization
- XSS prevention through input sanitization
- Email format validation
- Length and content validation
- HTML tag removal

### Rate Limiting
- Form submission rate limiting
- Configurable attempt limits
- Time-window based restrictions

### Content Security Policy
- Strict CSP headers
- Whitelisted external resources
- XSS and injection protection

### Error Handling
- React Error Boundaries
- Graceful degradation
- User-friendly error messages
- Development vs production error details

## 📋 API Integration

The application integrates with the [Fake Store API](https://fakestoreapi.com/) to demonstrate real-world data fetching:

- **Endpoint**: `https://fakestoreapi.com/products`
- **Features**: Product listing, images, prices, ratings
- **Error Handling**: Network error management and retry logic
- **Loading States**: Smooth loading indicators

## 🎯 Usage

### Theme Switching
1. Use the dropdown in the header to switch between themes
2. Changes are applied instantly with smooth transitions
3. Your selection is automatically saved and persists across sessions

### Navigation
- **Home**: Browse products with the current theme styling
- **About**: Learn about the application and its features
- **Contact**: Submit inquiries through the contact form

### Responsive Behavior
- **Mobile**: Hamburger menu, stacked layouts, touch-friendly interactions
- **Tablet**: Optimized grid layouts and spacing
- **Desktop**: Full sidebar (Theme 2), multi-column grids, hover effects

## 🔍 Testing the Themes

To fully experience the theme differences:

1. **Start with Theme 1 (Minimalist)**
   - Notice the clean, minimal design
   - Observe the subtle animations and professional feel

2. **Switch to Theme 2 (Dark Professional)**
   - Experience the dramatic dark mode transformation
   - Navigate using the sidebar (on desktop)
   - Notice the serif typography and bold interactions

3. **Try Theme 3 (Playful)**
   - Enjoy the colorful, gradient-rich interface
   - Experience the bouncy animations and fun typography
   - Observe the card-based layout system

## 🐛 Troubleshooting

### Common Issues

**Theme not persisting**: Clear browser cache and localStorage
**API errors**: Check network connection and CORS settings
**Styling issues**: Ensure all dependencies are installed correctly

### Development Issues

**TypeScript errors**: Run `npm run type-check` to identify issues
**Build failures**: Clear `node_modules` and reinstall dependencies
**Port conflicts**: Change the port in package.json scripts

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Considerations
- Set appropriate CSP headers for your domain
- Configure HTTPS for security features
- Monitor API rate limits and usage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with tests
4. Submit a pull request with detailed description

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for product data
- [Google Fonts](https://fonts.google.com/) for typography
- [Styled Components](https://styled-components.com/) for styling system
- [React](https://reactjs.org/) team for the amazing framework

---

**Built with ❤️ using React, TypeScript, and Styled Components**
