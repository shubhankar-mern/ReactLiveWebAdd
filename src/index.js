import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Detailspage from './components/Detailspage';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import 'font-awesome/css/font-awesome.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route exact path='/details' element={<Detailspage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);
