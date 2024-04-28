import { useRef } from "react";
import {  useNavigate } from "react-router-dom";



const Adminlogin = () => {

    let navigate=useNavigate();
    let email=useRef();
    let password=useRef();


    let login=() =>{
       
        let admin={
            email:"admin@gmail.com",
            password:"1234"

        }
        if(email.current.value===admin.email && password.current.value===admin.password){
            navigate('/adminportal')
        }
        else{
            alert("invalid Admin credentials")
        }
    }


    return ( 
        <div className="adminlogin">
            <h1>Admin login</h1>
            <div className="adminform">



                <form >
                    <div className="adminemail">
                        <input type="email" ref={email} placeholder="enter email"name="" id="" />
                    </div>

                    <div className="adminpassword">
                        <input type="password" ref={password} placeholder="enter password" name="" id="" />
                    </div>

                    <div className="adminbutton">
                        <button onClick={login}>Login</button>
                    </div>
                </form>



            </div>

        </div>
     );
}
 
export default Adminlogin;