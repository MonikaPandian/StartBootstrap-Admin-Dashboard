import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Register from './Register';
import { Routes, Route } from "react-router-dom";
import Buttons from './Buttons';
import Cards from './Cards';
import Colors from './Colors';
import Borders from './Borders';
import Animations from './Animations';
import Others from './Others';
import ErrorPage from './ErrorPage';
import Charts from './Charts';
import Tables from './Tables';
import BlankPage from './BlankPage';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/dashboard/*" element={<Dashboard/>}/>
        <Route path="/buttons/*" element={<Buttons />} />
        <Route path="/cards/*" element={<Cards />} />
        <Route path="/colors/*" element={<Colors />} />
        <Route path="/borders/*" element={<Borders />} />
        <Route path="/animations/*" element={<Animations />} />
        <Route path="/others/*" element={<Others />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/forgot_password/*" element={<ForgotPassword />} />
        <Route path="/404/*" element={<ErrorPage />} />
        <Route path="/blank/*" element={<BlankPage />} />
        <Route path="/charts/*" element={<Charts />} />
        <Route path="/tables/*" element={<Tables />} />
      </Routes>
    </div>
  );
}

export default App;
