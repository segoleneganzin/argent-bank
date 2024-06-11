import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { UserProvider } from './context/UserContext';

import './stylesheet/main.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <Router />
    </UserProvider>
  </BrowserRouter>
);
