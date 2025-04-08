import Login from './page/Authen/Login/Login';
import Register from './page/Authen/Register/Register';
import IndividulDetail from './page/IndividulDetail/IndividulDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './page/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndividulDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/product" element={<ProductList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
