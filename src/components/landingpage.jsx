import {Link} from 'react-router-dom'
const LandingPage = () => {
    return ( 
        <div className="landingpage">
            <div className="maincontainer">
                <div className="content">
                    <h1 className="heading">Kitabay.com</h1>
                    <Link to="/adminlogin"><button className="landingbutton">Admin login</button></Link>
                    <Link to="/userlogin"><button className="landingbutton">User login</button></Link>
                </div>
            </div>
        </div>
     );
}
 
export default LandingPage;