import logo from './logo.svg';
import './App.css';
import RegisterPage from './page/register';
import LoginPage from './page/login';
import {Switch, Route, Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/">
            <LoginPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
