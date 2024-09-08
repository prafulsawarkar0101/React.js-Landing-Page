import React from 'react'
import "./hexColorBlock.css"
import logo1 from "../../img/icon1.png" 
import logo2 from "../../img/icon2.png" 
import logo3 from "../../img/icon3.png" 
import logo4 from "../../img/icon4.png" 
import logo5 from "../../img/icon5.png" 

export default function HexColorBlock() {
  return (
    <div className="lastBlock">
    <h1>Discover the Heart of Our Functionality</h1>
    <div className="lastBlocksContainers">
        <div className="firstCol">
            <h1>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h1>
            <p>Immerse your customers in a branded experience by personalizing the colors on your tracking page. </p>
            <div className="firstCardHashColorBlock">
                <p>Accent Color</p>
                <div className="makeRowHashColor">
                    <input type="text" value="FF9898"></input>
                    <div className="ofSomeColor1">

                    </div>
                </div>
            </div>
            <div className="firstCardHashColorBlock">
                <p>Text Color</p>
                <div className="makeRowHashColor">
                    <input type="text" value="571010"></input>
                    <div className="ofSomeColor2">

                    </div>
                </div>
            </div>
            <div className="firstCardHashColorBlock">
                <p>Background Color</p>
                <div className="makeRowHashColor">
                    <input type="text" value="FFEAEA"></input>
                    <div className="ofSomeColor3">

                    </div>
                </div>
            </div>
            <div className="buttonCollection addMargin ">
            
                <button className="whiteButton marginRight cursorPointer">Priview</button>
              
                <button className="blackButton cursorPointer" >Apply Colors</button>
            </div>
         
        </div>
        <div className="secondCol">
            <div className="columnCardofLastBlock1">
                <h1>Exclusive Onboarding Support for High-Volume Brands</h1>
                <p>Unlock personalized guidance! Book a one-on-one 
                    onboarding call to streamline your experience.</p>
                    <button className="blackButton cursorPointer">Schedule A Call</button>  

            </div>
            <div className="columnCardofLastBlock2">
                <h1>Explore Our Integrated Ecosystem</h1>
              <p>Discover a variety of popular integrations tailored for your convenience. </p>
              <div className="iconCollection">
                <img src={logo1} alt=""></img>
                <img src={logo2} alt=""></img>
                <img src={logo3} alt=""></img>
                <img src={logo4} alt=""></img>
                <img src={logo5} alt=""></img>
               
               
              </div>
                    <button className="blackButton cursorPointer">Explore Integration</button> 

            </div>

        </div>
        <div className="thirdCol">
            <h1>Seamlessly Integrate Custom HTML Elements</h1>
            <p>Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>

            <h2>HTML Link</h2>
           <textarea  value = "Value" name="html link" id=""></textarea>
           <div className="buttonCollection">
            
            <button className="whiteButton marginRight cursorPointer">Preview</button>
            <button className="blackButton cursorPointer">Apply Changes</button>
        </div>

        </div>
    </div>

 </div>
  )
}
