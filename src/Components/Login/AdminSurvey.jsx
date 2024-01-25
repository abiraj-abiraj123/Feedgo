import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminSurvey  () {
  const navigate=useNavigate();
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={()=>navigate('userfeedback')}>User Feedback</button>
    </div>


  )
}
export default AdminSurvey;
