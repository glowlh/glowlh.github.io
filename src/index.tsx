import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { App, Site } from './pages';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  body {
      display: flex;
      min-height: 100vh;
      height: 100%;
      flex-direction: column;
      margin: 0;
  }

  #root {
      position: relative;
      padding-bottom: 300px;
  }
  
  * {
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
      margin: 0;
      padding: 0;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<App />} />
              <Route path='/site' element={<Site />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
