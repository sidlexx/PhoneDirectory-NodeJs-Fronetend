import React from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class ContactList extends  React.Component{
 
  state = {
    data:[]
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/phone/`)
      .then(res => {
        const persons = res.data;
        this.setState({ data: res.data})
        console.log(this.state.data)
      })
  }

deleteData=(data)=>{
  console.log(data)
  axios.delete(`http://localhost:4000/phone/delete/${data}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error=>{
        console.log(error)
      })
      window.location.reload(false)
    }
 render(){
  return (
     <div>
 <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Number</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
     { this.state.data.map(person =>
       <tr>
      <td>x</td>
      <td>{person.FirstName}</td>
     <td>{person.LastName}</td>
     <td>{person.phone}</td>
     <Button variant='danger' onClick={()=>{this.deleteData(person._id)}}>Delete</Button >
     </tr>)
     }
      
    
  
    
  </tbody>
</Table>
     </div>
 
 )
  }
}

