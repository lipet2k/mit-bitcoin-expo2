import React, { useContext } from 'react';
import UserTypeContext from './UserTypeContext';
import { FaUser, FaBuilding, FaStethoscope } from 'react-icons/fa';

const Signin = () => {
  const { setUserType } = useContext(UserTypeContext);

  const handleUserTypeClick = (type) => {
    setUserType(type);
  };

  return (
    <div className="generate-keys">
        <h1>Sign in as:</h1>
        <div>
            <button className="circular-button" onClick={() => handleUserTypeClick('user')}>
                <FaUser />
            </button>
            <button className="circular-button" onClick={() => handleUserTypeClick('company')}>
                <FaBuilding />
            </button>
            <button className="circular-button" onClick={() => handleUserTypeClick('doctor')}>
                <FaStethoscope />
            </button>
            </div>
    </div>
  );
};

export default Signin;