// import logo from './logo.svg';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import './App.css';
import DetailCoursePage from './page/detailCourse';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<DetailCoursePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;