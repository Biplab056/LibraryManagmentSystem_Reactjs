import { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "../style/books.css"
const Books = () => {

    let navigate = useNavigate()
    let [books,setbooks] = useState([])

    let location = useLocation()
    let path = location.pathname.startsWith('/adminportal')
   
        useEffect(()=>{
            let fetchData = async() => {
            let response = await fetch(' http://localhost:5000/books')
            let data = await response.json()
            setbooks(data)
            }
            fetchData()
        },[books])

        let readBook = (id) =>{
           if(path){
            navigate(`/adminPortal/books/${id}`)
           }
           else{
            navigate(`/userPortal/books/${id}`)
           }
        }

        let handleDelete = (id, title) =>{
            fetch(`http://localhost:5000/books/${id}`,{
                method:'DELETE'

            })
            alert(`${title} got Deleted`)
        }
        
    
    
    return (  
        <div className="books">
           
           <div className="bookcover">
                
                </div>
            <div className="bookcollection">
           
                {books.map((data)=>(
                    
                    <div className="booklist">
                            <div className="bookimage">
                                <img src={data.thumbnailUrl} width="200px" height="270px"alt="" />
                             </div>
                         <div className="bookdetails">
                            <h2>{data.title}</h2>
                            <p>written by-{data.authors}</p>
                            <p>pages no-{data.pageCount}</p>
                            <div className="button">
                                <button onClick={()=>readBook(data.id)}>Read book</button>
                                {
                                  path && <button onClick={()=> handleDelete(data.id,data.title)}>Delete book</button>
                                }
                             
                            </div>

                        </div>

                    </div>
                ))}
            </div>
            </div>
       
    );
}
 
export default Books;