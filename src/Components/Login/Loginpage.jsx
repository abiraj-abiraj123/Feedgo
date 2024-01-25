import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../Assets/Images/img5.jpg';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './Login.css';
import Validation from './LoginValidate';

 const Loginpage = () => {
    // const [values,setValue]=useState({
    //     email:'',
    //     password:''
    // })
    // const [errors,setErrors]=useState({

    // })
    // const handleInput=(event)=>{
    //     setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    // }
    // const handleSubmit=(event)=>{
    //     event.preventDefault();
    //     setError(Validation(values));
    // }
    const navigate = useNavigate();
    return (
        <div>
            <Container className='my-5'>
                <Card>
                    <Row className='g-0'>
                        <Col md='6'>
                            <Card.Img src={img1} alt='login img' className='rounded-start w-100' />
                        </Col>

                        <Col md='6'>
                            <Card.Body className='d-flex flex-column' >
                                <div className='d-flex flex-row mt-2'>
                                    <span className='h1 fw-bold mb-0'>Login</span>
                                </div>

                                <div className='headd'><h5 className='fw-normal my-4 pb-3' style={{ letterSpacing: '1px' }}><b>Sign into your account</b></h5></div>

                                <Form.Group as={Row} className='mb-3' controlId='formplaintextId'>
                                    <Form.Label column sm="2">
                                        <div className='text1' name="userid"
                                        // onChange={handleInput}
                                        ><strong>E-mail:</strong></div>
                                    </Form.Label>
                                    <Col sm='5'>
                                        <div className='input1'><Form.Control type="text" placeholder='email' /></div>
                                        {/* {errors.email && <span className='text-danger'> */}
                                            {/* {errors.email} */}
                                            {/* </span> */}
                                            {/* } */}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        <div className="text1" name="password"
                                        // onChange={handleInput}
                                        >
                                            <strong>Password:</strong></div>
                                    </Form.Label>
                                    <Col sm="5" required>
                                        <div className="input1"><Form.Control type="text" placeholder="Password" /></div>
                                        {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
                                    </Col>
                                </Form.Group>

                                <div className='btn1'><button type="submit" className='mb-4 px-5' color="dark" size='sm' onClick={() => navigate("card")}
                                // onSubmit={handleSubmit}
                                >Login</button></div>
                                <div className='a11'><a className='small text-muted' href="#">Forgot Password?</a></div>
                                <h6 className='mb-5 pb-lg-2' style={{ color: '#393f81' }} >Not a user?<a href="#" style={{ color: '#393f81' }} onClick={() => navigate('signup')}>SignUp!!!</a></h6>


                            </Card.Body>
                        </Col>
                    </Row>
                </Card>

            </Container>
        </div>
    )
}
export default Loginpage;