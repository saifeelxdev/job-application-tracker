import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Recruiter from './pages/Recruiter';
import Candidate from './pages/Candidate';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/recruiter" element={<Recruiter />}></Route>
          <Route path="/candidate" element={<Candidate />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
