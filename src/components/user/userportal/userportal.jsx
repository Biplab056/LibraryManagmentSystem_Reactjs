import Navbar from "../../navbar";
import Home from "../../home";
import Books from "../../books";
import ReadBook from "../../readBook";
import { Routes,Route } from "react-router-dom";


const Userportal = () => {
    return ( 
        <div>
        <Navbar></Navbar>
        <Routes>
            <Route element={<Home/>} path="/"></Route>
            <Route element={<Books/>} path="/books"></Route>
            <Route element={<ReadBook/>} path="/books/:id"></Route>
        </Routes>
        </div>  
     );
}
 
export default Userportal;