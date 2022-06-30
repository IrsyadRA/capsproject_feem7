// import logo from './logo.svg';
import './App.css';
import JobVacancyPage from './page/jobVacancy';
import RegisterPage from './page/register';
import LoginPage from './page/login';
import ListCoursePage from './page/listCourse';
import DetailCoursePage from './page/detailCourse';
import MyCoursePage from './page/myCourse';
import { Switch, Route } from 'react-router-dom';

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
        <Route path="/mycourse">
          <MyCoursePage />
        </Route>
        <Route path="/job">
          <JobVacancyPage />
        </Route>
        <Route path="/">
          <ListCoursePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;