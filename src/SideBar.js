import React from 'react';
import img1 from './img/undraw_rocket.png';
import { useNavigate } from "react-router-dom";

function SideBar() {

    const navigate = useNavigate();

    return (
        
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                 <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>
  
                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <a className="nav-link" href="" onClick={() => navigate("/dashboard")}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Interface
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#collapseTwo" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <a className="collapse-item" href="" onClick={() => navigate("/buttons")}>Buttons</a>
                            <a className="collapse-item" href="" onClick={() => navigate("/cards")}>Cards</a>
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Utilities</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <a className="collapse-item"  href="" onClick={() => navigate("/colors")} >Colors</a>
                            <a className="collapse-item"  href="" onClick={() => navigate("/borders")}>Borders</a>
                            <a className="collapse-item"  href="" onClick={() => navigate("/animations")}>Animations</a>
                            <a className="collapse-item"  href="" onClick={() => navigate("/others")}>Other</a>
                        </div>
                    </div>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Addons
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <a className="collapse-item"  href="" onClick={() => navigate("/login")} >Login</a>
                            <a className="collapse-item"  href="" onClick={() => navigate("/register")}>Register</a>
                            <a className="collapse-item"  href="" onClick={() => navigate("/forgot_password")}>Forgot Password</a>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <a className="collapse-item"  href="" onClick={() => navigate("/404")}>404 Page</a>
                            <a className="collapse-item"  href="" onClick={() => navigate("/blank")}>Blank Page</a>
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Charts --> */}
                <li className="nav-item">
                    <a className="nav-link" href="" onClick={() => navigate("/charts")} >
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>

                {/* <!-- Nav Item - Tables --> */}
                <li className="nav-item">
                    <a className="nav-link"  href="" onClick={() => navigate("/tables")}>
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

                {/* <!-- Sidebar Message --> */}
                <div className="sidebar-card d-none d-lg-flex">
                    <img className="sidebar-card-illustration mb-2" src={img1} alt="..." />
                    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                    <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                </div>                                          
            </ul>                       
                //  {/* <!-- End of Sidebar --> */}
     )
 }

 export default SideBar;


