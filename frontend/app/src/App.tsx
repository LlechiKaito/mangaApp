import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Top from './components/Top';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top/>} />
        <Route path="/works" element={<Top/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
