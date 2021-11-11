import React,{useState} from 'react';

import axios from 'axios';

function ImageSearchfn()
{
    const [images,setImages] = useState([]);
    const [loading,setLoading] = useState(true);
    const[searchText,setSearchText]=useState("dogs");

    const handleSearch=(event)=>{
        setSearchText(event.target.value)
      }
      const handleSubmit=(event)=>{
          event.preventDefault();
          setLoading(true)
          getImages(searchText)
      }
const getImages=(query)=>{
    const url="https://api.unsplash.com/search/photos?client_id=h1IadB0voqEtSNObhx0u4EvZ6uLitZuN6V23X7_UVpE&page=1&query="+query;
    axios.get(url)
    .then((res)=>{console.log(res)
        setImages(res.data.results) 
        setLoading(false) })
    .catch((err)=>{console.log(err)})

}
    return(
        <>
         <h4>Image search</h4>   
            <form onSubmit={handleSubmit}>
                 <label>
                   <input type="text"  onChange ={handleSearch}  />
                </label>
                    <input type="submit" value="Submit" />
            </form>
	            {
	               loading?(<div className="spinner-border text-primary" role="status">
	                <span className="visually-hidden">Loading...</span>
	              </div>)
	                :( images.map((images)=>(
	                <img src={images.urls.thumb}></img>))
                )
                }
                
  
        </>
    )
}

export default ImageSearchfn;