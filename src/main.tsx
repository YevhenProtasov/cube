// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './styles/index.scss';
import App from './App.tsx';
import { HomePage } from './modules/HomePage/HomePage.tsx';

createRoot(document.getElementById('root')!).render(
  // hide strickMode for dev because it's render useEffect twice
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />

      </Route>
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
