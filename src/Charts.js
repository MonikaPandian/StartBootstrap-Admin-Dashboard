import React from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';
import Chart from './Chart';
import Footer from './Footer';
import Scrolltop from './Scrolltop';
import Logout from './Logout';

const Charts = () => {
  return (
    <div>
      <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">
                    <Navbar />
                    <Chart/>
                </div>

                <Footer />
            </div>
            </div>
            <Scrolltop/>
            <Logout/>
    </div>
  )
}

export default Charts;
