import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';


const App = () => {
  return (
  <Routes>
    <Route path='/' element={<HomePage />} />
  <Route path='/catalog' element={<Catalog />} />
  <Route path='/favorites' element={<Favorites />} />
   
    </Routes>
  )
}

export default App;
