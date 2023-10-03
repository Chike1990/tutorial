import React from 'react'
import { Routes, Route} from 'react-router-dom';
import ContactForm from './components/ContactForm/ContactForm';
import ThankYou from './components/ContactForm/ThankYou';

function App() {
  return (
    <Routes>
     <Route path='/' element={<ContactForm />} />
     <Route path='/thankyou' element={<ThankYou />} />
    </Routes>
  )
}

export default App
