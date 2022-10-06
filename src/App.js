import './App.css';
import Dash from './Dash';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Register from './Register';
import { Routes, Route } from "react-router-dom";
import Button from './Button';
import Card from './Card';
import Color from './Color';
import Border from './Border';
import Animation from './Animation';
import Other from './Other';
import Error from './Error';
import Chart from './Chart';
import Table from './Table';
import Blank from './Blank';
import SideBar from './SideBar';
import Logout from './Logout';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {

  return (
    <div id="page-top">
      <Routes>
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/forgot_password/*" element={<ForgotPassword />} />
      </Routes>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">

          {/* <!-- Main Content --> */}
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <Routes>
                <Route path="/*" element={<Dash />} />
                <Route path="/dashboard/*" element={<Dash />} />
                <Route path="/buttons/*" element={<Button />} />
                <Route path="/cards/*" element={<Card />} />
                <Route path="/colors/*" element={<Color />} />
                <Route path="/borders/*" element={<Border />} />
                <Route path="/animations/*" element={<Animation />} />
                <Route path="/404/*" element={<Error />} />
                <Route path="/blank/*" element={<Blank />} />
                <Route path="/others/*" element={<Other />} />
                <Route path="/charts/*" element={<Chart />} />
                <Route path="/tables/*" element={<Table />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      <Logout />
    </div>
  );
}

export default App;




