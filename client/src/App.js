import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Recipes from './components/Recipes/Recipes';
import Create from './components/Create/Create';



import './App.css';

function App() {
  return (
    <div className="App">

      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />} />

      </Routes>

      <Footer />
    </div>

  );
}

export default App;
