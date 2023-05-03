import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const {user, createUser, updateUserProfile} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

     const handleRegister = (event) =>{
       event.preventDefault()
       const form = event.target 
       const name = form.name.value
       const email = form.email.value
       const password = form.password.value
       const photo = form.photo.value
       console.log(name, email, password, photo)
   
       createUser(email, password)
       .then(result =>{
         const loggedUser = result.user
         console.log(loggedUser)
         setSuccess('User Login successful.')
         setError(' ')
         form.reset()

        form.reset()
         updateUserData(result.user, name, photo)
       })
       .catch(error =>{
         console.log(error)
         setError(error.message)

       })
      }

      //update profile
      const updateUserData = (user, name, photo) =>{
        updateProfile(user, {
          displayName: name,
          photoURL: photo
        })
        .then(() =>{
          console.log("user name updated")
        })
        .catch(error =>{
          console.log(error)
        })

      }

    return (
        <Container className='w-25 mx-auto m-4'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Photo URL</Form.Label>
                  <Form.Control type="text" name='photo' placeholder="Enter your url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
          
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" name='accept' label="Accept Term & Conditions" />
                </Form.Group>
                <Button className='w-100 mb-2' variant="primary" type="submit">
                  Register
                </Button>
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login"> Login</Link>
                </Form.Text>
                <Form.Text className="text-success">
                  <p>{success}</p>
                </Form.Text>
                <Form.Text className="text-danger">
                  {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;