import react, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from '../firebase'
import {useNavigate} from 'react-router-dom'
import Message from '../componant/Message'
const Login = () => {
    const navigate = useNavigate()
    const [error,setError] = useState()
    
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSumbit = (e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,values.email,values.password).then(res=>console.log(res)).catch((error)=>console.log(error))
  }
  return (
    <>
      <Form className="m-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter Username"
          onChange={(e)=>setValues((i)=>({...i,name:e.target.value}))}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email" 
          onChange={(e)=>setValues((i)=>({...i,email:e.target.value}))}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password" 
          onChange={(e)=>setValues((i)=>({...i,password:e.target.value}))}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSumbit}>
          Submit
        </Button>
      </Form>
       
    </>
  );
};
export default Login;
