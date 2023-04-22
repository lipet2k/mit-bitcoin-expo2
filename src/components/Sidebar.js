import '../styles/Sidebar.css';
import React, { useContext } from 'react';
import UserTypeContext from './UserTypeContext';
import { Link } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { RiHospitalFill } from "react-icons/ri";
import {TbReportMedical} from "react-icons/tb";

const NavigationBar = () => {
    const { userType } = useContext(UserTypeContext);
    return (
      <div className="sidenav flex-col flex w-48">
        <div><a href="/"><img id="logo" src="/assets/cc-logo.svg"></img></a></div>
        <div className="links-container ml-10">
          <Link className="nav-item mt-5" to="/patients">
          {userType === 'doctor' && <button class="btn-col-main hover:bg-blue-700 text-white py-2 px-4 rounded">
              <RiHospitalFill /> Patients
            </button>}
          </Link>

          {userType === 'company' && <Link className="nav-item mt-5" to="/new_request">
            <button class="btn-col-main hover:bg-blue-700 text-white py-2 px-4 rounded">
              <TbReportMedical /> New Request
            </button>
          </Link> }

          {userType === 'user' && <Link className="nav-item mt-5" to="/user-request">
            <button class="btn-col-main hover:bg-blue-700 text-white py-2 px-4 rounded">
              <TbReportMedical /> Requests
            </button>
          </Link> }

          <Link className="nav-item mt-5" to="/profiles">
            <button class="bg-white text-black py-2 px-4 rounded">
              <FiUser /> Profile
            </button>
          </Link>
        </div>
      </div>
    );
}



const Header = () => {
    const { userType } = useContext(UserTypeContext);
    return (
      <div className="heading-container bg-main">
        {userType === 'doctor' && <div className="profile-info text-lg large-font heading-font shrink-0 mx-5 mt-2 ">
         <h3>Hospital</h3>
          <p>MIIBOgIBAAJBAKj34GkxFhD90vcNLYL</p>
        </div>}

        {userType === 'user' && <div className="profile-info text-lg large-font heading-font shrink-0 mx-5 mt-2 ">
         <h3>Ruby</h3>
          <p>hdI4yZ5ew18JH4JW9jbhUFrviQzM7</p>
        </div>}

        {userType === 'company' && <div className="profile-info text-lg large-font heading-font shrink-0 mx-5 mt-2 ">
         <h3>Fake Starbucks</h3>
          <p>GRIBOgIBAAJBAKj34GkxFhD90vcNLJK</p>
        </div>}
        <NavigationBar />
      </div>
    );
}

export default Header
