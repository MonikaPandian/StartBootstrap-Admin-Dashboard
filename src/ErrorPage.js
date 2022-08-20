import React from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';
import Error from './Error';
import Footer from './Footer';
import Logout from './Logout';

const ErrorPage = () => {
  return (
    <div>
      <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">
                    <Navbar />
                    <Error />
                </div>

                <Footer />
            </div>
            </div>
            
            <Logout/>
    </div>
  )
}

export default ErrorPage;
