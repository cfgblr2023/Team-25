import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MDBInput } from 'mdb-react-ui-kit';
export default function AddModule(props) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add Module</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="d-flex justify-content-between">
            <h5>Name</h5>
         <MDBInput  id='form1' type='text' />
            </div>
            <div className="d-flex justify-content-between">
            <h5>Description</h5>
         <MDBInput  id='form1' type='text' />
            </div>
          
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="secondary">Close</Button> */}
          <Button variant="primary" onClick={props.handleAddModule}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
