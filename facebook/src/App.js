// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
