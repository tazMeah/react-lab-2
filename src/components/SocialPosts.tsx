import PostForm from "./PostForm";
import PostInList from "./PostInList";
import App from "../App";
import Post from "./Post"
import {useState} from "react";
import "./SocialPosts.css"


// interface Post {
//     title: string;
//     thought: string;
//   }


const postsArray: Post[] = [  {
    title: "Tricks or Treats?",
    thought: "We need to bring back the tricks! Too many treats."
  },
  {
    title: "Candy Corn Fan Post",
    thought: "I could eat it year-round.",
  }, 
  {
     title: "To my neighbor: You're not a vampire...", 
     thought: "You can't see your reflection because that's not a mirror. It's a window. #ISeeYou "
  }
]


function SocialPosts() {
    const [posts, setPosts] = useState(postsArray);
   
 
    return (
        <div>
            <h1>My Spooky Thoughts</h1> 
                
            <PostForm />

       <main>
           {posts.map((item,index) => <span key={index}>
               <PostInList title={item.title} thought={item.thought}/>
                </span>)}
       </main>

       </div>
       
       
    )
}

export default SocialPosts;