import CharacterPage from 'pages/CharacterPage';
import EpisodePage from 'pages/EpisodePage';
import MainPage from 'pages/MainPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="episode/:id" element={<EpisodePage />} />
        <Route path="character/:id" element={<CharacterPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
