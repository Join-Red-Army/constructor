import { createRoot } from 'react-dom/client';
import App from './components/App';
import ThemeProvider from './theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
