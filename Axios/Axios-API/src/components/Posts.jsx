import {  useEffect, useState } from "react";
import { deletePost, getPosts } from "../Api/Axios";
import "./style.css"

function Posts() {
 const [data , SetData] = useState([]);
const GetpostData = async () => {
        try {
          const response = await getPosts();
          SetData(response.data);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
    
useEffect(() => {
    GetpostData();
}, []);

const HandleDelete = async (id) => {
    try {
      const response = await deletePost(id);
      if (response.status === 200) {
        const updatedData = data.filter((post) => post.id !== id);
        return SetData(updatedData);
      }
      else {        console.error("Failed to delete post. Status code:", response.status);
      }

    }
    catch (error) {
        console.error("Error deleting post:", error);
    }}
    
  return (
    <section className="MainContainer">
      <ul>
        {data.map((post) => {
            const {id , title , body} = post;
           return  <li key={id}>
            <p>{title}</p>
            <p>{body}</p>
            <button>Edit</button>
            <button onClick={()=>HandleDelete(id)}>Delete</button>
            </li>
        }
            
        )}
      </ul>
    </section>
  )
}

export default Posts;
