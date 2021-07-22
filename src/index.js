import { render } from 'react-dom';
import App from './App';
import { AppProvider } from './context';

render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
