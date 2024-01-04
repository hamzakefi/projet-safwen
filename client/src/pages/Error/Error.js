import React from 'react'
import './Error.css'
import Badway from './warning.gif'

const Error = () => {
  
  return (
    <div>

    <h1 className='err1'>Error 404 </h1>
    <h4 className='err2'>La page que vous avez demandée n'a pas été trouvée</h4>
    <h4 className='err2'>Si vous avez saisi l'URL directement, assurez-vous que l'orthographe est correcte.</h4>
    <div >
    <img src={Badway} className='errorIcon' alt='Error'/>

    </div>
    </div>

    
  )
}

export default Error