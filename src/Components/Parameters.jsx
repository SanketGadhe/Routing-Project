import React from 'react'
import { useParams } from 'react-router-dom'

const Parameters = () => {
    const param=useParams();
    
  return (
    <div>
        {param.userid}
      
    </div>
  )
}

export default Parameters
