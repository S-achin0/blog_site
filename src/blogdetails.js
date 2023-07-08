import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const  BlogDetails= () => {
    const {id}=useParams();
    const{data :blog,error,ispending}=useFetch(  "http://localhost:8000/blogs/"+id);
    return ( 
<div className="blog_details">
     {ispending&&<div>Loading...</div>}
     {error&&<div>{error}</div>}
     {blog&&(
        <article>
           <h2 className="title">{blog.tiltle}</h2> 
           <h3>Author:{blog.author}</h3>
           <div>
            {blog.body}
           </div>
        </article>
     )}
</div>
     );
}
 
export default BlogDetails;