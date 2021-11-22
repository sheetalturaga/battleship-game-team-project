import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Rules from './Rules';
import { BoardClickCountProvider } from './BoardClickCountProvider';
import Game from './Game';


const store = createStore(reducers);

ReactDOM.render(
  <BoardClickCountProvider>
  <Provider store={store} >
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/gameboard/:rules" element={<Rules />} />
        {/* <Route path="/gameboard/:normal-mode" element={<NormalGameMode />} />
        <Route path="/gameboard/:normal-mode" element={<FreeGameMode />} /> */}
        <Route path="/gameBoard/:gameType" element={<Game />} />
      </Routes>
    </Router>
  </Provider>
  </BoardClickCountProvider>,
  document.getElementById('root')
);
