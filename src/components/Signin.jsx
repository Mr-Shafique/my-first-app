import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';

const Signin = () => {

    const [value, setValue] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    function passwordset(e)
    {
        setPassword(e)

    }

    function runlogin()
    {
        (value == "admin" && password == "admin") ? (navigate('/dashboard')) : console.log("admin")
    }




    return (
        
        <MDBContainer fluid className='yoyo '>
        {
            console.log(value)
        }
            <MDBCard className=" border-0 mt-5">
                <MDBRow className='g-0'>

                    <MDBCol md='6' className='yoyo '>
                        <div> <img src='https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701509_1280.jpg'  alt="login form" className=' w-100 p-4 pt-5 ' />  </div>
                    </MDBCol>
                    

                    <MDBCol md='6' className=''>
                        <MDBCardBody className='d-flex flex-column'>

                            <div className='d-flex flex-row mt-2'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                                <span className="h1 fw-bold mb-0">Logo</span>
                            </div>

                            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"   value={value}    onChange={(e) => setValue(e.target.value)}
     />
                            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => passwordset(e.target.value)}  />

                            <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={runlogin}>Login</MDBBtn>
                            <a className="small text-muted" href="#!">Forgot password?</a>

                            <div className='d-flex flex-row justify-content-start'>
                                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                            </div>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>
        </MDBContainer>
    );
}

export default Signin;
