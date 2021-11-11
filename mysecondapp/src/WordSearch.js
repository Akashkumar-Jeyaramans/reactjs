import React,{useState} from 'react';

import axios from 'axios';
import ImageSearch from './ImageSearch';

function WordSearch(){
    
    const [words,setWords] = useState([]);
    
    const[searchText,setSearchText]=useState("dogs");
    
    const handleSearch=(event)=>{
        setSearchText(event.target.value)
      }
     
      const handleSubmit=(event)=>{
          event.preventDefault();
          
          getWords(searchText)
      }

      const getWords=(query)=>{
    const url="https://api.unsplash.com/search/photos?client_id=h1IadB0voqEtSNObhx0u4EvZ6uLitZuN6V23X7_UVpE&page=1&query="+query;
    axios.get(url)
    .then((res)=>{console.log(res)
        setWords(res.data.results) 
         })
    .catch((err)=>{console.log(err)})

}

    return(
        <>
        <div>
            <h1>Pocket Dictionary</h1>
            <form onSubmit={handleSubmit}>
                <label>
                <input type='text' onChange ={handleSearch}  />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {
                words.map((words)=>
                <img src={words.urls.thumb}></img>
                )}
            
	             
           
        </div>
        </>
    )
}


export default WordSearch;