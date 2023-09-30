// Implement an application that collects users contact details and submit it to the database.

// Pseudocode:
import axios from 'axios'
import React, {useState} from 'react'
import "./ContactForm.css"

function ContactForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")

    const submitForm = async (e)=> {
        e.preventDefault()
        const formData = {
            firstName,
            lastName,
            emailAddress,
            phoneNumber,
            address,
            subject,
            message
        }
        try {
            const res = await axios.post("https://6512e42bb8c6ce52b3966bea.mockapi.io/contactform",
            formData)
            console.log("Response data:", res.data)
            setFirstName("")
            setLastName("")
            setEmailAddress("")
            setPhoneNumber("")
            setAddress("")
            setSubject("")
            setMessage("")
        } catch (error) {
            console.log(error)
        }
       
    }

  return (
    <div>
        <h2>Contact Us</h2>
        <form action="" method="post">
            <div>
                <label htmlFor="firstName:">First Name:</label>
                <input type="text" value={firstName} onChange={ (e)=> setFirstName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="firstName:">Last Name:</label>
                <input type="text" value={lastName} onChange={ (e)=> setLastName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email:">Email:</label>
                <input type="email" value={emailAddress} onChange={ (e)=> setEmailAddress(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="number" value={phoneNumber} onChange={ (e)=> setPhoneNumber(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <input type="text" value={address} onChange={ (e)=> setAddress(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="subject">Subject:</label>
                <input type="text" value={subject} onChange={ (e)=> setSubject(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea value={message} onChange={ (e)=> setMessage(e.target.value)}></textarea>
            </div>
        </form>
        <button type="submit" onClick={submitForm}>Submit</button>
    </div>
  )
}

export default ContactForm
