import React from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';
import Blank from './Blank';
import Footer from './Footer';
import Logout from './Logout';

const BlankPage = () => {
  return (
    <div>
       <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">
                    <Navbar />
                    <Blank />
                </div>

                <Footer />
            </div>
            </div>
            
            <Logout/>
    </div>
  )
}

export default BlankPage;
