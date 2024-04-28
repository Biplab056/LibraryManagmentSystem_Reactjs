import "../../../style/addbooks.css"
import { useRef } from "react";
const Addbooks = () => {


    let title = useRef()
    let thumbnail = useRef()
    let author = useRef()
    let pagecount = useRef()
    let catagories = useRef()

    let addbooks = (e) =>{
        
        let addbooks ={
            thumbnailUrl:thumbnail.current.value,
            title:title.current.value,
            authors:author.current.value,
            pageCount:pagecount.current.value,
            catagories:catagories.current.value

            
        }
        fetch(`http://localhost:5000/books`,{
            method:'POST' ,
            header:{'content-Type':'application/json'},
            body:JSON.stringify(addbooks)
        })
        alert('book added succesfull')
        e.preventDefault();
    }
    

    return (  
       
        <div className="addbooks">
           
            <div className="form">
            <h2>You can add your favorite book here</h2>
           <form >
            <div className="input">
                <input type="text" ref={title} placeholder="Enter the title of the book" name="" id="" />
            </div>
            <div className="input">
                <input type="text" ref={thumbnail} placeholder="Enter the thumbnailURl of the book" name="" id="" />
            </div>

            <div className="input">
                <input type="text"ref={author} placeholder="Enter the author" name="" id="" />
            </div>
            <div className="input">
                <input type="text" ref={pagecount} placeholder="Enter the pagecount of book"  name="" id="" />
            </div>
            <div className="input">
                <input type="text"ref={catagories} placeholder="Enter the catagories of book" name="" id="" />
            </div>
            <div className="button">
                <button onClick={(e)=>addbooks(e)}>Add Books</button>
            </div>
           </form>
        </div>
        </div>
        
    );
}
 
export default Addbooks;