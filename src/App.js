import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/detail/:leagueId'>
          <Detail/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='*'>
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
