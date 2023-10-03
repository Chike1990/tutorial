// A client need a contact form to be implimented on their website. 
// You have been provided an endpoint: "https://6512e42bb8c6ce52b3966bea.mockapi.io/contactform"
// Build a contact page and integrate the api to submit the user details
// The information users submit via the form must include: firstName,lastName,emailAddress, phoneNumber, address,subject, and message

// Prompt: Implement an application that collects users contact details as above and submit it to the database.



import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./ContactForm.css"
import loadingimg from "../../images/load.gif"

function ContactForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")

    const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState('') // for user experience
    // const [isSuccessful] = useState("") useNavigate does the job  better
    const navigate = useNavigate()


    const submitForm = async (e)=> {
        e.preventDefault() // what does prevent default do in a browser? Read more
        setIsLoading(true) // When u fire a button, u want to display something.
        const formData = {
            firstName,
            lastName,
            emailAddress,
            phoneNumber,
            address,
            subject,
            message
        }
        try { // used to handle exceptions
            const res = await axios.post("https://6512e42bb8c6ce52b3966bea.mockapi.io/contactform",
            formData)
            if(res.status === 201){
                navigate('/thankyou')
            }
            setIsLoading(false)
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
        <form onSubmit={submitForm}>
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
                <input type="text" value={phoneNumber} onChange={ (e)=> setPhoneNumber(e.target.value)}/>
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
        <button type="submit" >{isLoading? "Submitting form..." : "Submit"}</button>
        </form>
        
       {/* <h2 style={{color: 'green'}}>{isSuccessful}</h2>
        {isLoading && (
            <img src={loadingimg} alt="loading" />
        )} */}
    </div>
  )
}

export default ContactForm