import { Route,Routes } from "react-router-dom";
import Navbar from "../../navbar";
import Home from "../../home";
import Books from "../../books";
import Users from "./users";
import Addbooks from "./addbooks";
import Addusers from "./addusers";
import ReadBook from "../../readBook";

const Portal = () => {
    return ( 
        <div className="adminportal">
            <Navbar/>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Books/>} path="/books"/>
                <Route element={<Users/>} path="/users"/>
                <Route element={<Addbooks/>} path="/addbooks"/>
                <Route element={<Addusers/>} path="/addusers"/>
                <Route element={<ReadBook/>} path="/books/:id"/>
             </Routes>
    

        </div>
     );
}
 
export default Portal;