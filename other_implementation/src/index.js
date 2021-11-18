import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import { BoardClickCountProvider } from './BoardClickCountProvider';
import Game from './Game';


const store = createStore(reducers);

ReactDOM.render(
  <BoardClickCountProvider>
  <Provider store={store} >
    <h4>Welcome to BattleShip</h4>
 
    <Router>
    <Link to={"/"}>Home</Link>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/gameBoard/:gameType" element={<Game />} />
      </Routes>
    </Router>
  </Provider>
  </BoardClickCountProvider>,
  document.getElementById('root')
);
