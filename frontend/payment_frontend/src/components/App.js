import React, { useState } from 'react'

import '../App.css'

import Subscription from './Subscription'
import Credit from './Credit.js'
import 'react-credit-cards/es/styles-compiled.css'
import {API_URL} from '../config/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import CSRFToken from './csrftoken';
import  { redirect } from 'react-router-dom'
function App () {
  // const [number, setNumber] = useState('')
  // const [name, setName] = useState('')
  // const [expiry, setExpiry] = useState('')
  // const [cvc, setCvc] = useState('')
  // const [focus, setFocus] = useState('')

  return (
    
      <>
   <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Credit/>} />
      <Route path='/sub' element={<Subscription />} />
      
    </Routes>
  </BrowserRouter>
 </>

   
   
    
  )
}

export default App