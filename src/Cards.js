import React from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import Scrolltop from './Scrolltop';
import Logout from './Logout';

const Cards = () => {
  return (
    <div>
      <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">
                    <Navbar />
                    <Card />
                </div>

                <Footer />
            </div>
            </div>
            <Scrolltop/>
            <Logout/>
    </div>
  )
}

export default Cards;
