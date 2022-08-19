import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from "react";
import * as dishService from './services/dishService';
import { AuthProvider } from './context/AuthContext';
import { DishContext } from './context/DishContext';

//import { useState } from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Recipes from './components/Recipes/Recipes';
import CreateDish from './components/CreateDish/CreateDish';
import PrivateRoute from "./components/common/PrivateRoute";
import uniqid from 'uniqid';


import './App.css';

const Register = lazy(() => import('./components/Register/Register'));



function App() {

  const [dishes, setDishes] = useState([]);
  console.log(dishes)
  const navigate = useNavigate();

  const dishAdd = (dishData) => {
    setDishes(state => [
      state,
      {
      ...dishData,
      _id: uniqid()
      }
    ]);

    navigate('/recipes');
  };

  useEffect(() => {
    dishService.getAll()
      .then(result => {
        console.log(result);
        setDishes(result);
      });
  }, []);

  return (
    <AuthProvider>
      <div className="App">

        <Header />
        <DishContext.Provider value={{ dishes, dishAdd }}>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/recipes' element={<Recipes dishes={dishes} />} />
            <Route path="/register" element={
              <Suspense fallback={<span>Loading....</span>}>
                <Register />
              </Suspense>
            } />
            <Route path="/create" element={<CreateDish />} />

            <Route element={<PrivateRoute />}>
              <Route path="/logout" element={<Logout />} />
            </Route>

          </Routes>
        </DishContext.Provider>
        <Footer />
      </div>
    </AuthProvider>

  );
}

export default App;
