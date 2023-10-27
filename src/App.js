import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { createTheme } from "@mui/material/styles";
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';

// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';


// ----------------------------------------------------------------------

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
