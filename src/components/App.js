import '../styles/App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Patients from './Patients';
import Employer from './EmployerConfirmation';

import GenerateKeys from './GenerateKeys';
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
          <Route path="/employer" element={<Employer />} />
          <Route path="/generate" element={<GenerateKeys/>} />
          <Route path="/Patients" element={<Patients/>} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;