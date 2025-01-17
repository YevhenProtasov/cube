import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './styles/index.scss';
import App from './App.tsx';
import { HomePage } from './modules/HomePage/HomePage.tsx';
import { PositionPage } from './modules/PositionPage/PositionPage.tsx';
import { AboutUsPage } from './modules/AboutUsPage/AboutUsPage.tsx';
import { EyesPage } from './modules/EyesPage/EyesPage.tsx';
import { BreathingPage } from './modules/BreathingPage/BreathingPage.tsx';
import { MindPage } from './modules/MindPage/MindPage.tsx';
import { TimePage } from './modules/TimePage/TimePage.tsx';
import { EndPage } from './modules/EndPage/EndPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />

          <Route path='/position' element={<PositionPage />} />
          <Route path='/eyes' element={<EyesPage />} />
          <Route path='/breathing' element={<BreathingPage />} />
          <Route path='/mind' element={<MindPage />} />
          <Route path='/time' element={<TimePage />} />
          <Route path='/end' element={<EndPage />} />

          <Route path='/about-us' element={<AboutUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
