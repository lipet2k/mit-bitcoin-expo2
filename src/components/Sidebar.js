import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
    return (
      <div className="sidenav mt-10 flex-col flex w-48">
        <div className="links-container ml-10">
          <Link className="nav-item mt-5" to="/generate">
            <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Patients
            </button>
          </Link>
          <Link className="nav-item mt-5" to="/employer">
            <button class="bg-white hover:bg-blue-700 text-black py-2 px-4 rounded">
              Profile
            </button>
          </Link>

          <Link className="nav-item mt-5" to="/hospital">
            <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              New Request
            </button>
          </Link>
        </div>
      </div>
    );
}



const Header = () => {

    return (
      <div className="heading-container bg-white flex mb-5">
        <button className="text-lg large-font heading-font shrink-0 mx-5 mt-2 ">
          Concealed Care
        </button>
        <NavigationBar />
      </div>
    );
}

export default Header
