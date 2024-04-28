import { useRef } from "react";
import "../../../style/addusers.css"
const Addusers = () => {

    
    let Name = useRef()
    let Email = useRef()
    let Phone = useRef()

    let Addusers = (e) =>{
        
        let addusers ={
               Name:Name.current.value,
               Email:Email.current.value,
               Phone:Phone.current.value 
             }
        fetch(`http://localhost:5000/users`,{
            method:'POST' ,
            header:{'content-Type':'application/json'},
            body:JSON.stringify(addusers)
        })
        alert('User added succesfull')
        e.preventDefault();
    }
    

    return ( 
        <div className="addusers">
            <div className="form">
            <h2>Add users here</h2>
           <form >
            <div className="input">
                <input type="text" ref={Name} placeholder="Enter the Users name" name="" id="" />
            </div>
            <div className="input">
                <input type="email" ref={Email} placeholder="Enter the email address" name="" id="" />
            </div>

            <div className="input">
                <input type="text" ref={Phone} placeholder="Enter Contact no" name="" id="" />
            </div>
            
            <div className="button">
                <button onClick={(e)=>Addusers(e)}>Add User</button>
            </div>
           </form>
        </div>

        </div>
     );
}
 
export default Addusers;