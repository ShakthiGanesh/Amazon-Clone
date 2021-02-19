import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';


function App() {
  const [{ cart, user }, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
