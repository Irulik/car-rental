import { Routes, Route } from "react-router-dom";
import { lazy } from "react"; 
import { Layout } from "./Layout";

const HomePage = lazy(() => import("../components/pages/HomePage"));
const Catalog = lazy(() => import("../components/pages/Catalog"));
const Favorites = lazy(() => import("../components/pages/Favorites"));


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
