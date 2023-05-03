import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const {signIn, googleLogin} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')


  const handleLogin = (event) =>{
    event.preventDefault()
    const form = event.target 
    const email = form.email.value
    const password = form.password.value
    const confirm = form.confirm.value
    console.log(email, password)

    if(password != confirm){
      setError('Your password and confirm password did not matched.')
      return
    }
    else if(password.length < 6){
      setError('please add at least 6 characters long')
      return
    }

    signIn(email, password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser)
      setSuccess('User Login successful.')
      setError(' ')
      form.reset()
    })
    .catch(error =>{
      console.log(error)
      setError(error.message)
    })
   }

   //google login
   const handleGoogleLogin = () =>{
    googleLogin()
    .then(result =>{
      const loggedUser = result.user 
      console.log(loggedUser)
    })
    .catch(error =>{
      console.log(error)
    })
}

    return (
        <Container className='w-25 mx-auto m-4'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
          
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" name='confirm' placeholder="Confirm Password" required/>
                </Form.Group>
                <Button className='w-100 mb-2' variant="primary" type="submit">
                  Login
                </Button>
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register"> Register</Link>
                </Form.Text>
                <Form.Text className="text-success">
                  <p>{success}</p>
                </Form.Text>
                <Form.Text className="text-danger">
                  {error}
                </Form.Text>
            </Form>
            <div>
              <Link><Button onClick={handleGoogleLogin} variant="outline-secondary" className='fw-semibold m-2'><FaGoogle style={{color:"red"}}/> Google Login</Button></Link>
              <Link><Button variant="outline-secondary" className='fw-semibold'><FaGithub style={{color:"black"}}/> Github Login</Button></Link>
            </div>
        </Container>
    );
};

export default Login;