import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Authentication from './Components/NavComponents/Authentication';
import Storage from './Components/NavComponents/Storage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='Authentication' element={<Authentication/>} />
          <Route path='Database' element={<Authentication />} />
          <Route path='Storage' element={<Storage />} />
          <Route path='Hosting' element={<Authentication />} />
          <Route path='Functions' element={<Authentication />} />
          <Route path='Machine-learning' element={<Authentication />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

