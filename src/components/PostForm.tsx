import {Modal, Button} from "react-bootstrap";
import React, {useState} from "react";
import "./PostForm.css";


function PostForm ({
    onSubmit,
    setTitle,
    setThought,
}: {
    onSubmit: () => void;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setThought: React.Dispatch<React.SetStateAction<string>>;
}) {
    // bootstrap settings for modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
  
    return (
        <div className="formWrapper">{

    <>
      <Button className="button" variant="primary" onClick={handleShow}>
        New Thought
      </Button>

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share your thoughts...</Modal.Title>
        </Modal.Header>
        <form onSubmit={(event) => {
            event.preventDefault();
            onSubmit();  
        }}> 
        <Modal.Body className="modalBody">
            <label>
                <p>Title:</p>
                <input type="text" onChange={(event) => {setTitle(event.target.value)}}/>
            </label>
            <label>
                <p>Thought:</p>
                <input type="text" className="thoughtInput" onChange={(event) => {setThought(event.target.value)}}/>
            </label>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Add Spook
          </Button >
          </Modal.Footer>
        </form>  
      </Modal>
    </>
  
}
        </div>
       
    )
    
}

export default PostForm;