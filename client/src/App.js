import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from './context/AuthContext';

import { DishContext } from './context/DishContext';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

import Recipes from './components/Recipes/Recipes';
import Create from './components/Create/Create';


import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';

//const Register = lazy(() => import('./components/Register/Register'));

function App() {
  const [dish, setDish] = useState([]);
  console.log(dish)
  const [auth, setAuth] = useLocalStorage('auth', {});
  const navigate = useNavigate();

  const loginHandler = (authData) => {
    setAuth(authData)
  }

  const logoutHandler = () => {
    setAuth({});
  }

  const addDishHandler = (dishData) => {
    setDish(state => [
      //console.log(state)
      ...state,
      dishData,
    ]);

    navigate('/recipes')
  }


  return (
    <AuthContext.Provider value={{ user: auth, loginHandler, logoutHandler }}>
      <div className="App">

        <Header />

        <DishContext.Provider value={{}}>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/create' element={<Create addDishHandler={addDishHandler} />} />

          </Routes>
        </DishContext.Provider>

        <Footer />
      </div>
    </AuthContext.Provider>

  );
}

export default App;
