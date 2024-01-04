import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { registerAdmin } from '../../JS/Actions/admin'
import './Inscription.css'
import { useNavigate } from 'react-router-dom';
import eye from './eye.png';
import hide from './hide.png'
import { Helmet } from 'react-helmet'

const Inscription = () => {

  const [newAdmin, setNewAdmin] = useState({}) 
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuthAdmin = useSelector((state) => state.userReducer.isAuthAdmin)
   const handleChange = (e) => {
     setNewAdmin({...newAdmin , [e.target.name] : e.target.value})
   }

   const handleAdmin = (e) => {
     e.preventDefault();
     newAdmin.isAdmin=true
     dispatch(registerAdmin(newAdmin))
     
   }
   
   const [passwordShown, setPasswordShown] = useState(false);
   const togglePassword = () => {
     setPasswordShown(!passwordShown);
   };

  return (
    <div>
      <Helmet>
  <meta charSet="utf-8" />
  <title>CRÉER UN NOUVEAU COMPTE Admin</title>
  <link rel="canonical" />
      </Helmet>

<h1 className='Inscription'>CRÉER UN NOUVEAU COMPTE Admin</h1>
{isAuthAdmin?navigate('/')  : (
  <div className='cadre2'>
  <div className='cadres'>
          <Form  onSubmit={handleAdmin} >
  
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label  className='forms'> Prénom</Form.Label>
      <Form.Control type="text" placeholder="Prénom" name="firstname" onChange={handleChange}/>
  
      <Form.Label className='forms'>Nom</Form.Label>
      <Form.Control type="text" placeholder="Nom" name="name" onChange={handleChange} />
  
      <Form.Label className='forms'>Adresse e-mail</Form.Label>
      <Form.Control type="email" placeholder="E-mail" name="email" onChange={handleChange}/>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='forms'>Mot de passe</Form.Label>
    {passwordShown ? (<img src={hide} onClick={togglePassword}  className='eye5' alt='show'/>) : (<img src={eye} onClick={togglePassword}  className='eye5'alt='hide' />)}
    
      <Form.Control type={passwordShown ? "text" : "password"} placeholder="Mot de passe" name="password" onChange={handleChange} />
  </Form.Group>
  
  <Button  className='bouton'variant="light" type="submit"><span className='boutontext' onClick={handleAdmin}>Créer compte </span></Button>
    <hr/>
    
    <Form.Text className="text-muted">
    Vous avez un compte déjà?
    <a href="/login">Se connecter</a>
      </Form.Text>
     
    <Button variant="primary" href="/"><span className='boutontext'>Revenir a la page d'accueil</span></Button>{' '}
  </Form>
  </div>
  </div>
)}

                      
        </div>
  )
}

export default Inscription