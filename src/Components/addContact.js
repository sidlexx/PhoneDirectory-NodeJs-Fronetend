import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

class AddContact extends React.Component{
    
state={
  firstName:'',
  lastName:'',
  phone:'',
  Redirect:''
}

setRedirect = () => {
  this.setState({
    Redirect: true
  })
}

handleChange = event => {
  const value = event.target.value;
  
  this.setState({ 
    ...this.state,
    [event.target.name]:value
});

}


handleSubmit = event=>{
event.preventDefault();

    const user = {
    firstName: this.state.firstName,
    lastName:this.state.lastName,
    phone:this.state.phone
    };
  
console.log(user)
Axios.post("http://localhost:4000/phone/",{ firstName: this.state.firstName,lastName:this.state.lastName,phone:this.state.phone}).then(
  res=>{
    console.log(res)
  }
).catch(err => {
  console.log(err)})

  this.setRedirect()
  if (1) {
    return <Redirect to='/' />
  }
}



  render(){
  return(
        <div>
            <br/>

   <Container>         
   <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="firstName"   onChange={this.handleChange}>
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="first name " name='firstName' />
  </Form.Group>
  <Form.Group controlId="lastName"  value={this.state.lastName} onChange={this.handleChange}>
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="last name " name='lastName' />
  </Form.Group>
  <Form.Group controlId="phone"  value={this.state.phone} onChange={this.handleChange}>
    <Form.Label>Phone </Form.Label>
    <Form.Control type="number" placeholder="Enter number " maxLength={10} name='phone'/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
 
</Form>
</Container>
        </div>
    )
  }
}

export default  AddContact