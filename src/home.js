 
import Bloglist from "./bloglist";
import useFetch from "./useFetch";


const Home = () => {
   
   const{data:blogs,ispending,error}=useFetch(' http://localhost:8000/blogs');
   
    
  
    
    

    return ( 
        <div className="home">
            {error &&<div>{error}</div>}
          { ispending&&<div>Loading....</div>}
         {blogs&&  <Bloglist blogs={blogs} Title="All Blogs!" />}
           
        </div>
     );
}
 
export default Home;