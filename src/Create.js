import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const Create = () => {
    const[tiltle,settiltle]=useState('');
    const[body,setbody]=useState('');
    const[author,setauthor]=useState('');
    const[ispending ,setispending]=useState('false');
    const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={tiltle,body,author};
        setispending(true)
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
             setispending(true);
             console.log("blog added");
             history.push('/');
        })
    }
    return ( 
       
        <div className="create">
            <h2>Add a new blog!</h2>
            <form onSubmit={handleSubmit}>
                <label className="tbox">Blog title</label>

                 
                <input type="text" required
                value={tiltle}
                onChange={(e)=>settiltle(e.target.value)} />
                
                <label className="abox">Blog Auther</label>
                <input type="text" required
                 value={author}
                 onChange={(e)=>setauthor(e.target.value)} />
                <label className="bbox"> Blog Body</label>

                <textarea required
                     value={body}
                     onChange={(e)=>setbody(e.target.value)} >
                    
                </textarea>
             {ispending&& <button >ADD BLOG</button>}
             {!ispending&& <button disabled>ADDING BLOG</button>}
                 
                 
            </form>
        </div>
     );
}
 
export default Create;