import React from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar'
import Animation from './Animation';
import Footer from './Footer';
import Scrolltop from './Scrolltop';
import Logout from './Logout';

const Animations = () => {
  return (
    <div>
      <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">
                    <Navbar />
                    <Animation />
                </div>

                <Footer />
            </div>
            </div>
            <Scrolltop/>
            <Logout/>
    </div>
  )
}

export default Animations;
