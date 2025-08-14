import React from 'react'
import '../Style/Payment.css'

function Payment() {
  return (
    <div className='payment-container'>
      <form action="" onSubmit={e => e.preventDefault()}>
        <div id='checkbox'>
          <input id='cash' name='pay-type' type="radio" />
          <label htmlFor="cash">Cash on Delivery</label>
          <input id='credit' name='pay-type' type="radio" defaultChecked />
          <label htmlFor="credit">Credit Card</label>
        </div>
        <div id='inputs'>
          <label htmlFor="card-no">Enter your card number:</label><br />
          <input className='input-box' id='card-no' type="number" placeholder='Card Number' required maxLength={16} /><br />
          <label htmlFor="exp-date">Enter your card's expiry date:</label><br />
          <input className='input-box' type="date" id='exp-date' required placeholder='Expiry Date' /><br />
          <label htmlFor="cvv">Enter your CVV number:</label><br />
          <input className='input-box' type="number" id='cvv' required placeholder='CVV' maxLength={3} /><br />
        </div>

        <button id='payment-button' className='cart-button'>Confirm Payment</button>
      </form>
    </div>
  )
}

export default Payment