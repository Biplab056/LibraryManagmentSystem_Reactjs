import LandingPage from './components/landingpage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Adminportal from './components/admin/adminportal/adminportal';
import Adminlogin from './components/admin/adminlogin';
import Userlogin from './components/user/userlogin';
import Userportal from './components/user/userportal/userportal';
import './App.css';
function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
    
    <Routes>

      <Route element={<LandingPage/>} path="/"></Route>
      <Route element={<Adminlogin/>} path="/adminlogin"></Route>
      <Route element={<Userlogin/>} path="/userlogin"></Route>
      <Route element={<Adminportal/>} path="/adminportal/*"></Route>
      <Route element={<Userportal/>} path="/userportal/*"></Route>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
