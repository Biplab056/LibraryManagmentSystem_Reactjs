import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import"../style/readBook.css"

const ReadBook = () => {
   let params = useParams()
   let book_id = params.id
   let navigate = useNavigate()

    let[book,setBook]= useState([])
    useEffect(()=>{
        let fetchData =async() =>{
            let response = await fetch(`http://localhost:5000/books/${book_id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData()
    })

    function back(){
        navigate('../books')
    }
    return ( 
       <div className="container">
        <div className="readBook">
            <div className="poster">
                <img src={book.thumbnailUrl} alt="" />
            </div>

            <div className="book_details">
                <h2>{book.title}</h2>
                <p>{book.shortDescription}</p>
                <div className="button">
                <button onClick={back}>Back</button>
                
                </div>
               
            </div>
           

        </div>
       
        </div>
       
     );
}
 
export default ReadBook;