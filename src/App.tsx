import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/routes';
import GlobalStyle from './styles/global';

export const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>

    <GlobalStyle />
  </>
);
