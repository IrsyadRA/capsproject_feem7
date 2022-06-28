import './App.css';
import RegisterPage from './page/register';
import LoginPage from './page/login';
import ListCoursePage from './page/listCourse';
import DetailCoursePage from './page/detailCourse';
import { Switch, Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/detail/:id">
          <DetailCoursePage />
        </Route>
        <Route path="/">
          <ListCoursePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;