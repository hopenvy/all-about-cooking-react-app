import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from './context/AuthContext';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

import Recipes from './components/Recipes/Recipes';
import Create from './components/Create/Create';


import './App.css';

function App() {
  const [auth, setAuth] = useState({});

  const loginHandler = (authData) => {
    setAuth(authData)
  }

  const logoutHandler = (authData) => {
    setAuth({})
  }


  return (
    <AuthContext.Provider value={{ user: auth, loginHandler, logoutHandler }}>
      <div className="App">

        <Header />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/create' element={<Create />} />

        </Routes>

        <Footer />
      </div>
    </AuthContext.Provider>

  );
}

export default App;
