import React, { useEffect, useState } from 'react'
import {PayPalButton} from 'react-paypal-button-v2'
function Support() {
    const [scriptLoadeed,setScriptLoaded]=useState(false)
    const [donateAmount,setDonateAmount]=useState(0)

const addPaypalScript=()=>{
    if(window.paypal){
        setScriptLoaded(true)
        return
    }
    const script=document.createElement("script");
    script.src="https://www.paypal.com/sdk/js?client-id=AXzHSA2ERj4A1EoANeIXhNiiwFG_2BQd6HYiYZ2iJMrUP5bsPSFNSgwFdKmwQ7y1gpgoHam1aft2DTrY";
    script.type='text/javascript';
    script.async=true;
    script.onload=()=>{
        setScriptLoaded(true)
    }
    document.body.appendChild(script);
}

const updateAmount=(e)=>{
e.preventDefault()
console.log(amount)
}
useEffect(()=>{
    addPaypalScript();
})
  return (
    <div className='support-container'>
        <div>
            <h1>Welcome to WeCollab</h1>
            <p>We collab despite being a new setup is contributing immensely to the world and help make this world a better place to 
                live. As for now we collab is helping refugess in various contries to help them live a better and stable if you feel like please 
                donate to this noble cause 100% of the amounts goes to the charity and WeCollab matches every donation made by you.
            </p>
        </div>
       
          <div className="paypal-btn">
        {scriptLoadeed?<PayPalButton 
        amount= '2'
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Thank you for donation ");
        }}
      />:''}
      </div>
      {/* <PayPalButton
        amount="2"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Thank you for donation ");
        }}
      /> */}
    </div>
  )
}

export default Support