import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';

import './App.css';

function App() {
  return (
    <div className="App">

      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />

      </Routes>

      <Footer />
    </div>

  );
}

export default App;
