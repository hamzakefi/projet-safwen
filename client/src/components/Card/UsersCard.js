import React from 'react'
import { Card } from 'react-bootstrap'
import userico from './user.png'
import './UsersCard.css'

const UsersCard = ({user}) => {
 
  return (
    <div> 
         <div align='center' className='profileCard12'>
      <Card style={{ width: '14rem' }} >

  <Card.Img  src={userico} />
  <Card.Body>

    <Card.Title>-Profil-</Card.Title>
    
    <Card.Text>
    <span  className='forms'>Prénom :</span>  {user.firstname} 
    </Card.Text>

    <Card.Text>
    <span  className='forms'>Nom :</span> {user.name} 
    </Card.Text>
    <Card.Text>

    <span  className='forms'>E-mail :</span>  {user.email} 
    </Card.Text>    
  </Card.Body>
</Card>

      </div>


    </div>
  )
}

export default UsersCard