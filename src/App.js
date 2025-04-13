import MeIDLayout from './layout/MeIDLayout';
import Login from './page/Authen/Login/Login';
import Register from './page/Authen/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './page/Dashboard/page/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/*" element={<MeIDLayout />}></Route>

        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
