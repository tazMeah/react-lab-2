import {Modal, Button} from "react-bootstrap";
import {useState} from "react";
import "./PostForm.css";

function PostForm () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[formSubmission, setFormSubmission] = useState("");
    const[title, setTitle] = useState("");
    const[thought, setThought] = useState("");

    return (
        <div className="formWrapper">

           {

    <>
      <Button className="button" variant="primary" onClick={handleShow}>
        New Thought
      </Button>

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share your thoughts...</Modal.Title>
        </Modal.Header>
        <form onSubmit={() => {}}> 
        <Modal.Body className="modalBody">
            <label>
                <p>Title:</p>
                <input type="text" onChange={() => {}}/>
            </label>
            <label>
                <p>Thought:</p>
                <input type="text" className="thoughtInput" onChange={() => {}}/>
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