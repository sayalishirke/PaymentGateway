import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import {subscription_URL} from '../config/index';
function Subscription () {
    // <form
    //     action={`${subscription_URL}`}
    //     method='post'
    //   >
    //     this is dubscription page
    //   </form>

    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')
    const [subscription_name, setSN] = useState('')
    const [occurrence, setoccurrence] = useState('')
    const [interval, setInterval] = useState('')
    const [amount, setAmount] = useState('')
    return(
    <div>
        <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form
        action={`${subscription_URL}`}
        method='post'
      >
        {/* <CSRFToken/> */}
        <input
          type='tel'
          name='number'
          placeholder='Card Number'
          value={number}
          onChange={e => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <input
          type='text'
          name='expiry'
          placeholder='MM/YYYY Expiry'
          value={expiry}
          onChange={e => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <input
          type='tel'
          name='cvc'
          placeholder='CVC'
          value={cvc}
          onChange={e => setCvc(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />

        <input
          type='text'
          name='subscription_name'
          placeholder='Subscription Name'
          value={subscription_name}
          onChange={e => setSN(e.target.value)}
        //   onFocus={e => setFocus(e.target.name)}
        />

       <input
          type='tel'
          name='amount'
          placeholder='Amount'
          value={amount}
          onChange={e => setAmount(e.target.value)}
        //   onFocus={e => setFocus(e.target.name)}
        />

        <input
          type='tel'
          name='occurrence'
          placeholder='No. of occurrence'
          value={occurrence}
          onChange={e => setoccurrence(e.target.value)}
        //   onFocus={e => setFocus(e.target.name)}
        />

        <input
          type='tel'
          name='interval'
          placeholder='Interval(days)'
          value={interval}
          onChange={e => setInterval(e.target.value)}
        //   onFocus={e => setFocus(e.target.name)}
        />
        <button>
          submit
        </button>
         
      </form>
    </div>
    )
    
}
export default Subscription