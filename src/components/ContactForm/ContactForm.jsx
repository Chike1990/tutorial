// A client need a contact form to be implimented on their website. 
// You have been provided an endpoint: "https://6512e42bb8c6ce52b3966bea.mockapi.io/contactform"
// Build a contact page and integrate the api to submit the user detail
// The information users submit vai the form: firstName,lastName,emailAddress, phoneNumber, address,subject, and message
// Implement an application that collects users contact details and submit it to the database.

//Add user notification
// A page that shows form submision was successful


import React,{useState} from 'react';
import axios from 'axios';
import "./ContactForm.css"

const ContactForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [message, setMessage] = useState("")
const submitForm = async(e) => {
  e.preventDefault()
  const data = {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    address,
    message
  }
  try {
    const response = await axios.post("https://6512e42bb8c6ce52b3966bea.mockapi.io/contactform", 
    data)
    console.log(response)
    setFirstName('')
    setLastName('')
    setEmailAddress('')
    setPhoneNumber('')
    setAddress('')
    setMessage('')
  } catch (error) {
    
  }
    
}

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={submitForm}>
        <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" value={firstName} onChange={(e) =>{setFirstName(e.target.value)}}/>
        </div>
        <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" value={lastName} onChange={(e) =>{setLastName(e.target.value)}}/>
        </div>
        <div>
        <label htmlFor="emailAddress">Email Address</label>
        <input type="text" value={emailAddress} onChange={(e) =>{setEmailAddress(e.target.value)}}/>
        </div>
        <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" value={phoneNumber} onChange={(e) =>{setPhoneNumber(e.target.value)}}/>
        </div>
        <div>
        <label htmlFor="address">Address</label>
        <input type="text" value={address} onChange={(e) =>{setAddress(e.target.value)}}/>
        </div>
        <div>
        <label htmlFor="message">Message</label>
        <input type="text" value={message} onChange={(e) =>{setMessage(e.target.value)}}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm; 
