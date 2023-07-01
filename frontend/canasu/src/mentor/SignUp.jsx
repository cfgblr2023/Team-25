import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { toast } from 'react-hot-toast';
import { servicePost } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function App() {
  const [mentor, setmentor] = useState({
    name:'',
    email:'',
    language:'',
    password:'',
    cnfpass:''
  });
  const navigate = useNavigate();
  const handleSubmit = async()=>{
    try {
      if(mentor?.password !== mentor?.cnfpass){
        toast.error("password dont match");
        return;
      }
      const {token, user} = await servicePost('/auth/mentor/signup',{
        ...mentor
      })
      localStorage.setItem('token', token);
      localStorage.setItem('type', 'mentor');
      navigate('/mentor');
    } catch (error) {
        toast.error(error.data.message);
    }
  }
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up as a Volunteer</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100' value={mentor?.name} onChange={(e)=>{setmentor({...mentor, name:e.target.value})}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' value={mentor?.email} onChange={(e)=>{setmentor({...mentor, email:e.target.value})}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Language' id='form2' type='text' value={mentor?.language} onChange={(e)=>{setmentor({...mentor, language:e.target.value})}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' value={mentor?.password} onChange={(e)=>{setmentor({...mentor, password:e.target.value})}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password' value={mentor?.cnfpass} onChange={(e)=>{setmentor({...mentor, cnfpass:e.target.value})}}/>
              </div>

             

              <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;