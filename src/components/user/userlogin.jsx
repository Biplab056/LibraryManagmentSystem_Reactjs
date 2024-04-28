import { useNavigate } from "react-router-dom";
const User = () => {

    
    let navigate=useNavigate();

    let login=() =>{
            navigate('/userportal')
        }
    
    return ( 
        <div className="user">
            <h1>user login</h1>

         <div className="userlogin">
         <form >
                    <div className="useremail">
                        <input type="email" placeholder="enter email"name="" id="" />
                    </div>

                    <div className="userpassword">
                        <input type="password"  placeholder="enter password" name="" id="" />
                    </div>

                    <div className="userbutton">
                        <button onClick={login}>Login</button>
                    </div>
                </form>
         </div>
        </div>
     );
}
 
export default User;