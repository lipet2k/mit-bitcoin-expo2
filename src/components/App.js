import '../styles/App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Project from './projects/Project';
import Hospital from './HospitalConfirmation';
import Employer from './EmployerConfirmation';
import BlogPost from './BlogPost';

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
          <Route path="/blog" element={<Blog upload={posts}/>}/>
          <Route path="/employer" element={<Employer />} />
          <Route path="/generate" element={<GenerateKeys/>} />
          <Route path="/hospital" element={<Hospital/>} />
          {posts.map((items, index) => (
            <Route key={index} path={`/${items.page_name}`} element={<BlogPost page_name={items.page_name}/>}/>
          ))}
        </Routes>
      </div>

    </Router>
  );
}

export default App;