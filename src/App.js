import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/registration' Component={Registration}/>
      </Routes>
    </div>
  );
}

export default App;
