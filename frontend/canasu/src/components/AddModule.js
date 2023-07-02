import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MDBInput } from 'mdb-react-ui-kit';
import { servicePost } from "../utils/api";
import { useParams } from "react-router-dom";

export default function AddModule(props) {
  const [module, setmodule] = useState({
    name:"",
    description:''
  })
  const {id} = useParams()
  const handleSubmission = async()=>{
    try {
      const {name, description} = module;
      console.log(module);
        const mod = await servicePost(`/admin/module?bId=${id}`,{
          name,
          description
        })
        props.handleAddModule();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={props.handleAddModule}>
          <Modal.Title>Add Module</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="d-flex justify-content-between">
            <h5>Name</h5>
         <MDBInput  id='form1' type='text' value={module.name} onChange={(e)=>{setmodule({...module, name: e.target.value})}}/>
            </div>
            <div className="d-flex justify-content-between">
            <h5>Description</h5>
         <MDBInput  id='form1' type='text' value={module.description} onChange={(e)=>{setmodule({...module, description: e.target.value})}}/>
            </div>
          
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="secondary">Close</Button> */}
          <Button variant="primary" onClick={handleSubmission}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
