import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Rules from './Rules';
import { BoardClickCountProvider } from './BoardClickCountProvider';
import NormalGameMode from './NormalGameMode';
import FreePlayMode from './FreePlayMode';


const store = createStore(reducers);

ReactDOM.render(
  <BoardClickCountProvider>
  <Provider store={store} >
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/gameboard/:rules" element={<Rules />} />
        <Route path="/gameboard/:normalgamemode" element={<NormalGameMode />} />
        <Route path="/gameboard/:freeplaymode" element={<FreePlayMode />} />
      </Routes>
    </Router>
  </Provider>
  </BoardClickCountProvider>,
  document.getElementById('root')
);
