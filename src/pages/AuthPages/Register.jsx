import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useAuthContext } from '../../Authorize/AuthContext';
import { useParams,useNavigate } from 'react-router-dom';

function Register() {
  const params = useParams()
  const navigate = useNavigate()
  const {state,dispatch} = useAuthContext()
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    member: '',
    id: uuidv4()
  })


  function handleChange(event) {
    console.log(event.target)

    setUserForm({ ...userForm, [event.target.name]: event.target.value })
  }

  function handleSubmit(e) {

    
    params.user = userForm.id
    let userAtt = '/home/' + params.user

    console.log(dispatch({ type: 'GET_USER', payload: state }))
    dispatch({ type: 'LOGIN', payload: userForm })
    navigate(userAtt)
    console.log(dispatch({ type: 'GET_USER', payload: state }))

    console.log(userForm)
  }


  return (
    <div>Register
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={userForm.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={userForm.lastName} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={userForm.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name="password" value={userForm.password} onChange={handleChange} />
        </label>
        <label>
          1:
          <input
            type="radio"
            name="member"
            value="option1" // Set a unique value for option 2
            checked={userForm.member === "option1"} // Check if this option is selected
            onChange={handleChange}
          />
        </label>
        <label>
          2:
          <input
            type="radio"
            name="member"
            value="option2" // Set a unique value for option 2
            checked={userForm.member === "option2"} // Check if this option is selected
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Register