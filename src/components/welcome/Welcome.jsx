import React from 'react'
import "./welcome.css"


export default function Welcome() {
  return (
   
    <div className="welcomeSection">
    <h1>
     Welcome, John Mathew!!
    </h1>
    <div className="welcomeCards">
     <div className="welcomeCard firstCardWelcome">
     
         <div className="flexRowIcon">
             
             <h6>Order Sync Successful!</h6>
         </div>
         <p>Your order details from the last 30 days have been successfully synced. Check them out now!</p>
         <button className="blackButton">Explore Your Orders</button>
         
     </div>
     <div className="welcomeCard secondCardWelcome">
         <div className="flexRowIcon">
             <span className="material-symbols-outlined">warning</span>

             <h6>Customize Customer Notification</h6>
         </div>
         <p>Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers</p>
         <button className="blackButton">Configure Notifications</button>

     </div>
     <div className="welcomeCard thirdCardWelcome">
         <div className="flexRowIcon">
             <span className="material-symbols-outlined">info</span>

             <h6>Your Tracking Link has been generated</h6>
         </div>
         <p>Include the <a href="">Link</a> to Your Store's Navigation Menu.</p>
         <div className="buttonCollection">
             
             <button className="whiteButton">Copy Link</button> <b></b>
             <button className="blackButton">Go To Navigation Menu</button>
         </div>

     </div>
    </div>
 </div>

  )
}
