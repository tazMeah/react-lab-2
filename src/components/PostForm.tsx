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
    const onClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
   
  
    return (
        <div className="formWrapper">{

    <>
      <Button 
      role="button"
      aria-label="showForm"
      className="button" 
      variant="primary" 
      onClick={handleShow}>
        New Thought
      </Button>

      <Modal 
      role="modal"
      aria-label="modalForm"
       show={show} 
       className={show === true ? "modal show" : "modal"}
       onHide={onClose}>

        <Modal.Header closeButton>
          <Modal.Title>Share your thoughts...</Modal.Title>
        </Modal.Header>

        <form 
            role="form"
            aria-label="form"
            onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
            onClose();
              
        }}> 

        <Modal.Body className="modalBody">
            <label>
                <p>Title:</p>
                <input 
                role="textbox1" 
                aria-label="titleInput"
                type="text" 
                onChange={(event) => {setTitle(event.target.value)}}/>
            </label>
            <label>
                <p>Thought:</p>
                <input 
                role="textbox2"
                aria-label="thoughtInput"
                type="text" 
                className="thoughtInput" 
                onChange={(event) => {setThought(event.target.value)}}/>
            </label>
        </Modal.Body>
        <Modal.Footer>
          <Button 
          role="button"
          aria-label="onSubmit"
          type="submit" 
          variant="primary" 
          >
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