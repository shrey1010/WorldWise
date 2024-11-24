import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Product from "./pages/Product"; 
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Pagenotfound from "./pages/Pagenotfound";
import AppLayout from "./pages/AppLayout";
import Login from './pages/Login';
import CityList from './components/CityList';
import { useState,useEffect } from 'react';

function App(){

  const [cities , setCities] = useState([]);
  const [isLoading , setIsLoading] = useState(false)

  useEffect(function(){
    async function fetchCities(){
      try{
      setIsLoading(true);
      const res = await fetch(`http://localhost:9000/cities`);
      const data = await res.json();
      setCities(data);}
    catch{
      alert("Error fetching cities");
    }finally{
      setIsLoading(false);
    }
  }
  fetchCities();
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product/" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<p>List of Countries</p>} />
          <Route path="form" element={<p>List of form</p>} />
        </Route>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;