import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Reading from './Pages/Reading';
import LoginSignUp from './Pages/LoginSignUp';
import Reading from './Pages/Reading';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginSignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/reading' element={<Reading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
