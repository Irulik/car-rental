import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';
import { Layout } from "./Layout";


const App = () => {
  return (
  <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='favorites' element={<Favorites />} />
      </Route>
  </Routes>
  )
}

export default App;
