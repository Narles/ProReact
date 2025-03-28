import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch.js";

const BlogDetails = () => {

  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useNavigate();

  // Deleta o blog atual
  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history('/');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h1>{ blog.title }</h1>
          <p>Written by { blog.author }</p>
          <hr></hr>
          <br></br>
          <p>{ blog.body }</p>
          <br></br>
          <hr></hr>
          <br></br>
          <button onClick={handleClick}>Delete this Blog!</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;