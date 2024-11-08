import './App.css';
import CoursesPage from './CoursesPage';
import Hero from './Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router basename='/CoursesApp'>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/profile" element={<CoursesPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
