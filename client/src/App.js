import { Routes, Route } from 'react-router-dom';
//import { useState } from 'react';
import { lazy, Suspense } from "react";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

import Recipes from './components/Recipes/Recipes';
import Create from './components/Create/Create';
import PrivateRoute from "./components/common/PrivateRoute";



import './App.css';
import { AuthProvider } from './context/AuthContext';

const Register = lazy(() => import('./components/Register/Register'));

function App() {


  return (
    <AuthProvider>
      <div className="App">

        <Header />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path="/register" element={
            <Suspense fallback={<span>Loading....</span>}>
              <Register />
            </Suspense>
          } />
          <Route path="/create" element={(
            <PrivateRoute>
              <Create />
            </PrivateRoute>
          )} />

          <Route element={<PrivateRoute />}>
            <Route path="/logout" element={<Logout />} />
          </Route>

        </Routes>

        <Footer />
      </div>
    </AuthProvider>

  );
}

export default App;
