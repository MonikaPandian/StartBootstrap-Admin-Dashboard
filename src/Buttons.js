import React from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';
import Button from './Button';
import Footer from './Footer';
import Scrolltop from './Scrolltop';
import Logout from './Logout';

const Buttons = () => {
    return (
        <div>
            <div id="wrapper">
                <SideBar />
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">
                        <Navbar />
                        <Button/>
                    </div>

                    <Footer />
                </div>
            </div>
            <Scrolltop />
            <Logout />
        </div>
    )
}

export default Buttons;