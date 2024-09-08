import React from 'react'
import "./statistics.css";
import { PieChart } from 'react-minimal-pie-chart';

export default function Statistics() {
    return (
        <>
            <div className="statisticsBlock">
                <h1>
                    Instant Dive into Your Performance Metrics
                </h1>
                <div className="stataButtonCollectioni">

                    <div className="stataButton">
                        Life time
                    </div>
                    <div className="stataButton">
                        Last Week
                    </div>
                    <div className="stataButton">Last Month</div>
                    <div className="stataButton">Last Year</div>
                    <div className="stataButton">
                        Customize Time Line
                        <span class="material-symbols-outlined setIconsDetails">calendar_today</span>
                    </div>

                </div>

                <div className="stataCardCollection">
                    <div className="stataCard1">
                        <div className="stataTitleCollection">
                            <h1>Shipment Updates</h1>
                            <p>Total Orders : 394</p>

                        </div>
                        <div className="stataButtonScroll">
                            <div className="stataButtonCollectioni makeScroll">

                                <div className="stataButtonScrools activeStataButton">
                                    Delivered
                                </div>
                                <div className="stataButtonScrools">
                                    Out of delivery
                                </div>
                                <div className="stataButtonScrools">
                                    Instransit
                                </div>
                                <div className="stataButtonScrools">
                                    Pending
                                </div>
                                <div className="stataButtonScrools">
                                    Exception
                                </div>

                            </div>

                        </div>
                      
                        <div className="circleBarChart">

                        
                            <PieChart
                                data={[
                                    { title: 'Three', value: 40, color: '#5E4200' },
                                    { title: 'Two', value: 10, color: '#956F00' },
                                    { title: 'four', value: 35, color: '#FFDDB6' },
                                    { title: 'five', value: 40, color: '#FFC879' },
                                    { title: 'One', value: 15, color: '#E5A500' },  
                                ]}
                                lineWidth={60}
                                paddingAngle= {2}
                                animate = {false}

                          

                                
                                
                            />

                        </div>
                        <div className='colorTitles'>
                            <div className="colorBlock1stCol">
                                <div className="ofSomeColorCard colorCard1">

                                </div>
                                <p>Exception</p>
                                <div className="ofSomeColorCard colorCard2">

                                </div>
                                <p>Intransit</p>
                                <div className="ofSomeColorCard colorCard2">

                                </div>
                                <p>Pending</p>

                                
                            </div>
                            <div className="colorBlock1stCol">
                                <div className="ofSomeColorCard colorCard4">

                                </div>
                                <p>Delivered</p>
                                <div className="ofSomeColorCard colorCard5">

                                </div>
                                <p>Out for delivery</p>
      

                                
                            </div>
                  
                        </div>
                        

                    </div>

                    <div className="stataCard2">
                        <h1>Star Facts about your orders!!!</h1>
                        <p>There are 8 shipments that have been in out for delivery for more than 3 days.</p>
                        <p>  There are 5 shipments in exception right now</p>
                        <p>  The maximum chargebacks are from Miami.</p>
                        <button className="whiteButton addMarding">Check Orders Page</button>

                    </div>
                    <div className="stataCard3">
                        <h1>Tracking Page Views Vs Orders</h1>
                        <p>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
                        <div className="subStataCardWithIcon subCard1">
                            <div className="subCardTextColumn">
                                <p>Orders</p>
                                <h1>80</h1>

                            </div>
                            <span className="material-symbols-outlined">
                                shopping_bag
                            </span>

                        </div>
                        <div className="subStataCardWithIcon subCard2">
                            <div className="subCardTextColumn">
                                <p>Tracking Page Views                                  </p>
                                <h1>40</h1>

                            </div>
                            <span className="material-symbols-outlined">
                                visibility
                            </span>

                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}
