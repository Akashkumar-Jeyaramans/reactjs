import React from 'react';

import axios from 'axios';

class ImageSearch extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
        images:[],loding:true,searchText:"",page:0
        }
    }
    //  componentDidMount() {
    //      const url="https://api.unsplash.com/search/photos?client_id=h1IadB0voqEtSNObhx0u4EvZ6uLitZuN6V23X7_UVpE&page=1&query=lions";
    //      axios.get(url)
    //      .then((res)=>{console.log(res)
    //          this.setState({images:res.data.results,loding:false})  })
    //      .catch((err)=>{console.log(err)})

    //    }
       handleSearch=(event)=>{
         this.setState({searchText:event.target.value})
       }
      
       handleSubmit=(event)=>{
           event.preventDefault();
           this.setState({loding:true})
           this.getImages(this.state.searchText)
       }
       handlePage=(action)=>
       {
           if(action==="next")
           {
               this.setState({page:this.state.page+1});
           }
           else if(action==="previous")
           {
                 if(this.state.page>0)
               this.setState({page:this.state.page-1});
           }
       }
 getImages=(query,page)=>{
     const url="https://api.unsplash.com/search/photos?client_id=h1IadB0voqEtSNObhx0u4EvZ6uLitZuN6V23X7_UVpE&page="+page+"&query="+query;
     axios.get(url)
     .then((res)=>{console.log(res)
         this.setState({images:res.data.results,loding:false})  })
     .catch((err)=>{console.log(err)})

 }
      render(){
          return(
              <>
               <h4>Image search</h4>   
            <form onSubmit={this.handleSubmit}>
                 <label>
                   <input type="text" value={this.state.value} onChange ={this.handleSearch}  />
                </label>
                    <input type="submit" value="Submit" />
                    </form>
                    
	            {
	               this.state.loding?(<div className="spinner-border text-primary" role="status">
	                <span className="visually-hidden">Loading...</span>
	              </div>)
	                :( this.state.images.map((images)=>(
	                <img src={images.urls.thumb}></img>))
                )
                }
                {/* <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" onClick={()=>this.counterevent("previous")} >Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href={"https://api.unsplash.com/search/photos?client_id=h1IadB0voqEtSNObhx0u4EvZ6uLitZuN6V23X7_UVpE&page=1&query="+query}>1</a></li>
    <li class="page-item" aria-current="page">
      <a class="page-link" href={"https://api.unsplash.com/search/photos?client_id=h1IadB0voqEtSNObhx0u4EvZ6uLitZuN6V23X7_UVpE&page=2&query="+query}>2</a>
    </li>
    <li class="page-item"><a class="page-link" href={"https://api.unsplash.com/search/photos?client_id=h1IadB0voqEtSNObhx0u4EvZ6uLitZuN6V23X7_UVpE&page=3&query="+query}>3</a></li>
    <li class="page-item">
      <a class="page-link"onClick={()=>this.counterevent("next")} href="#">Next</a>
    </li>
  </ul>
</nav> */}
                                  </>
          );
      }
    }
    export default ImageSearch; 