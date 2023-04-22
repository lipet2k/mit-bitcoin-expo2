import '../styles/App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Patients from './Patients';
import NewRequest from './NewRequest';
import Profile from './Profile';
import NewReport from './NewReport';

import GenerateKeys from './Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const posts = [
    {text: "stonks", page_name: "Movie Review"}, 
    {text: "post", page_name: "post"}, 
    {text: "post", page_name: "post"}, 
];


  return (

    <Router>

      <div className="App bg-white-50 dark:bg-zinc-900">
        <Sidebar/>
        <Routes>
          <Route path="/new_request" element={<NewRequest/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/patients" element={<Patients/>} />
          <Route path="/patients/report" element={<NewReport/>} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;