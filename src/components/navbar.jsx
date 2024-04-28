import { Link,useNavigate,useLocation } from "react-router-dom";
import "../style/navbar.css"


const Navbar = () => {
    let location =useLocation()
    let path = location.pathname.startsWith('/adminportal')
    let navigate = useNavigate()
    
    let logout= ()=>{
        navigate('/')
        alert('you have succesfully logged out')
    }
    return ( 
        
        <div className="navbar">
            <div className="marque">
             <marquee behavior="" direction=""><pre>welcome to kitabay library                                                                                                   contact us: Kitabay@gmail.com                                                                                                              @Available new collection on online </pre></marquee>
            </div>
            <div className="container">
                 <div className="logo">
                     <img src={"https://kitabay.com/cdn/shop/files/Kitabay_Logo_b53c04f3-b598-412a-b817-d1809c679d80.png?v=1697518243&width=120"}  alt="" />
                 </div>
                     <div className="links">
                        {
                            path?
                            <>
                         <Link className="linkitems" to="/adminportal/"><div>Home</div></Link>
                         <Link className="linkitems" to="/adminportal/books"><div>Books</div></Link>
                         <Link className="linkitems" to="/adminportal/users"><div>Users</div></Link>
                         <Link className="linkitems" to="/adminportal/addbooks"><div>Addbooks</div></Link>
                         <Link className="linkitems" to="/adminportal/addusers"><div>Addusers</div></Link> 
                         <div className="linkitems" onClick={logout}>Logout</div> 
                         </>
                         :
                         <>
                         <Link className="linkitems" to="/userportal/"><div>Home</div></Link>
                         <Link className="linkitems" to="/userportal/books"><div>Books</div></Link>
                         <div className="linkitems" onClick={logout}>Logout</div> 
                         </> 
                        }
                           
                     </div>
            </div>
             
        </div>
     );
}

 
export default Navbar;