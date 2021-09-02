import "./PostInList.css";


function PostInList(props: {
    title:string;
    thought:string;
    onDelete: () => void;
}) {
  
  return (
      <div className="postInList">
        <div className="postDiv">
          <div className="headerP">
            <h3>{props.title}</h3>
            <p>{props.thought}</p>
          </div>
          <div className="dumpster">
            <i className="fas fa-dumpster"
            onClick={() => { props.onDelete()
            }}
            ></i>
          </div>
        </div>
      </div> 
  );
}

export default PostInList;
