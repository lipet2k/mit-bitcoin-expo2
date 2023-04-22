import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Patients from './Patients';
import NewRequest from './NewRequest';
import Profile from './Profile';
import NewReport from './NewReport';
import UserRequest from './UserRequest';
import Signin from './Signin';
import UserTypeContext from './UserTypeContext';


import GenerateKeys from './Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [userType, setUserType] = useState(null);

  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      <Router>
        <div className="App bg-white-50 dark:bg-zinc-900">
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Signin/>} />
            <Route path="/new_request" element={<NewRequest/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/patients" element={<Patients/>} />
            <Route path="/patients/report" element={<NewReport/>} />
            <Route path="/user-request" element={<UserRequest/>} />
          </Routes>
        </div>
      </Router>
    </UserTypeContext.Provider>
  );
}

export default App;