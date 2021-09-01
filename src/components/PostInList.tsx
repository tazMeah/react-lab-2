import Post from "./Post";
import { useState } from "react";
import "./PostInList.css";

const postsArray: Post[] = [
  {
    title: "Tricks or Treats?",
    thought: "We need to bring back the tricks! Too many treats.",
  },
  {
    title: "Candy Corn Fan Post",
    thought: "I could eat it year-round.",
  },
  {
    title: "To my neighbor: You're not a vampire...",
    thought:
      "You can't see your reflection because that's not a mirror. It's a window. #ISeeYou ",
  },
];

function PostInList(props: {
    title:string;
    thought:string;
}) {
  const [posts, setPosts] = useState(postsArray);
  return (
      <div className="postInList">
        <div className="postDiv">
          <div className="headerP">
            <h3>{props.title}</h3>
            <p>{props.thought}</p>
          </div>
          <div className="dumpster">
            <i className="fas fa-dumpster"></i>
          </div>
        </div>
      </div> 
  );
}

export default PostInList;
