import React, { useState } from 'react'

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MDBInput } from 'mdb-react-ui-kit';
import { servicePost } from '../utils/api';
export default function AddSession(props) {
  const [session, setsession] = useState({
    link:'',
    startDate:'',
    endDate:''
  })
  const handleSubmission = async ()=>{
    try {
      const s = await servicePost(`/admin/session/${props.module}`,{
        link:  session.link,
        start_date: session.startDate,
        end_date: session.endDate
      })
      props.handleAddSession();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={props.handleAddSession}>
          <Modal.Title>Add Session</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="d-flex justify-content-between">
            <h5>Link</h5>
         <MDBInput  id='form1' type='text' value={session.link} onChange={(e)=>{setsession({...session, link: e.target.value})}} />
            </div>
            <div className="d-flex justify-content-between">
            <h5>Start Date</h5>
         <MDBInput  id='form1' type='date'  value={session.startDate} onChange={(e)=>{setsession({...session, startDate: e.target.value})}}/>
            </div>
            <div className="d-flex justify-content-between">
            <h5>End Date</h5>
         <MDBInput  id='form1' type='date' value={session.endDate} onChange={(e)=>{setsession({...session, endDate: e.target.value})}}/>
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
  )
}
