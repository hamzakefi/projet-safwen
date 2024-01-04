import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addMessages} from '../../JS/Actions/messages'
import './AddMessage.css'
import send from './paper-plane.png'
const AddMessages = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        setMessage( {...message,[e.target.name] : e.target.value}) }

      const handleMessage= (e) => {
        e.preventDefault()  
        dispatch(addMessages(message));
        window.scrollTo({
          top : 0 
      })
    
    }  
  return (
    <div>
      <div className='container543'>
        <Form>
        <h2 style={{color : 'white'}}>Contactez nous</h2>
        <div className='containers12'>
        <div>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

    
  <div className='label1'>
    <Form.Control  type="email" placeholder="Nom et Prénom" name='name' onChange={handleChange} />
    </div> 
    <div className='label1'>
    <Form.Control  type="text" placeholder="Numéro de téléphone" name='phone' onChange={handleChange}/>
    </div> 
  <div className='label1'>
    <Form.Control  type="text" placeholder="Mail" name='email' onChange={handleChange} />
    </div> 
  </Form.Group>
  </div>
<div>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <div className='label2'>
    <Form.Control as="textarea" rows={9} placeholder="Message" name='message' onChange={handleChange}/>
    </div>
  </Form.Group>
  </div>
  </div>
</Form>
<Button className='v33' variant="light" onClick={handleMessage}> <span className='v3'>ENVOYER UN MESSAGE <img src={send} className="send" alt='send'/></span></Button>
</div>
</div>
  )
}

export default AddMessages