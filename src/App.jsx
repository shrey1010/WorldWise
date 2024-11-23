import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Product from "./pages/Product"; 
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Pagenotfound from "./pages/Pagenotfound";
import AppLayout from "./pages/AppLayout";

function App(){
  return <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Homepage />} />
      <Route path="product/" element = {<Product />} />
      <Route path="pricing" element={<Pricing/>} />
      <Route path="app" element={<AppLayout />} />
      <Route path="*" element={<Pagenotfound/>} />
    </Routes>
  </BrowserRouter>
}

export default App;