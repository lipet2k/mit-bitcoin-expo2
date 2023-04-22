import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { RiHospitalFill } from "react-icons/ri";
import {TbReportMedical} from "react-icons/tb";


const NavigationBar = () => {
    return (
      <div className="sidenav flex-col flex w-48">
        <div><img id="logo" src="/assets/cc-logo.svg"></img></div>
        <div className="links-container ml-10">
          <Link className="nav-item mt-5" to="/patients">
            <button class="btn-col-main hover:bg-blue-700 text-white py-2 px-4 rounded">
              <RiHospitalFill /> Patients
            </button>
          </Link>
          <Link className="nav-item mt-5" to="/profiles">
            <button class="bg-white text-black py-2 px-4 rounded">
              <FiUser /> Profile
            </button>
          </Link>

          <Link className="nav-item mt-5" to="/new_request">
            <button class="btn-col-main hover:bg-blue-700 text-white py-2 px-4 rounded">
              <TbReportMedical /> New Request
            </button>
          </Link>
        </div>
      </div>
    );
}



const Header = () => {

    return (
      <div className="heading-container bg-main">
        <button className="profile-info text-lg large-font heading-font shrink-0 mx-5 mt-2 ">
          <h3>Hospital</h3>
          <p>MIIBOgIBAAJBAKj34GkxFhD90vcNLYL</p>
        </button>
        <NavigationBar />
      </div>
    );
}

export default Header
