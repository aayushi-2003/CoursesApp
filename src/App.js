import './App.css';
import CoursesPage from './CoursesPage';
import Hero from './Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/profile" element={<CoursesPage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
