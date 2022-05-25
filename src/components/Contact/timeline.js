import React from "react";
import Collapsible from 'react-collapsible';


export default function Timeline(){


    return(
        <div className="container">
            <div className="timeline">
                <ul>
                    <li>
                        <div>
                            <Collapsible 
                                trigger="2020-21" 
                                className="timeline-content" 
                                open = {false}
                            >
                                <div className="mentor">
                                    <div>
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877605/Wildbeats-ppl/bivek_yq4xob.png" className="mentor-img two-itm" alt=""/>
                                        <h1>Bivek Paul</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                    <div>
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877736/Wildbeats-ppl/rahul_u0w4eq.png" className="mentor-img two-itm" alt=""/>
                                        <h1>Rahul Nayak</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>
                        
                    </li>
                    <li>
                        <div>
                            <Collapsible 
                                trigger="2019-20"
                                className="timeline-content"
                                open = {false}
                            >
                                           
                                <div className="lead">
                                    <div className="lead1-19">
                                        <div>
                                            <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877600/Wildbeats-ppl/Keerthi_kftxcp.png" className="mentor-img" alt=""/>
                                            <h1>Keerthi Sreenivas</h1>
                                            <h4>Mentor</h4>
                                        </div>
                                        <div>
                                            <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877721/Wildbeats-ppl/Mekala_qpb2yn.png" className="mentor-img" alt=""/>
                                            <h1>Mekala Bhargav</h1>
                                            <h4>Mentor</h4>
                                        </div>
                                    </div>  
                                    <div className="lead1-19">
                                        <div>
                                            <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877546/Wildbeats-ppl/deepesh_lfcyvk.png" className="leadimg" alt=""/>
                                            <h1>Deepesh Sharma</h1>
                                            <h4>Lead</h4>
                                        </div>
                                        <div>
                                            <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877547/Wildbeats-ppl/sangeetha_dz2rhj.png" className="leadimg" alt=""/>
                                            <h1>Sangeetha Suresh</h1>
                                            <h4>Lead</h4>
                                        </div>
                                        
                                    </div>
                                    <div className="lead1-19">
                                        <div>
                                            <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877605/Wildbeats-ppl/bivek_yq4xob.png" className="leadimg" alt=""/>
                                            <h1>Bivek Paul</h1>
                                            <h4>Lead</h4>
                                        </div>
                                        <div>
                                            <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877580/Wildbeats-ppl/anurag_rxmeuz.png" className="leadimg" alt=""/>
                                            <h1>Anurag Reddy</h1>
                                            <h4>Lead</h4>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="lead1-19">
                                        <div>
                                            <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877544/Wildbeats-ppl/tumun_qi6gwq.png" className="leadimg" alt=""/>
                                            <h1>Tumun Shaily</h1>
                                            <h4>Lead</h4>
                                        </div>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Collapsible 
                                trigger="2018-19" 
                                className="timeline-content"
                                open = {false}
                            >
                                <div className="mentor">
                                    <div>
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877544/Wildbeats-ppl/sai_dnbthd.png" className="mentor-img two-itm" alt=""/>
                                        <h1>Sai Surya Kiran</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                    <div>
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877547/Wildbeats-ppl/sandeep_da7tes.png" className="mentor-img two-itm" alt=""/>
                                        <h1>Sandeep Kumar</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>
                    </li>
                    <li>
                        <div >
                            <Collapsible 
                                trigger="2017-18"
                                className="timeline-content"
                                open = {false}
                            >
                                <div className="mentor">
                                    <div>
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877543/Wildbeats-ppl/pushpak_bq9zjx.png" className="mentor-img two-itm" alt=""/>
                                        <h1>Pushpak Raj</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                    <div> 
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877551/Wildbeats-ppl/srija_b7gbcq.png" className="mentor-img two-itm" alt=""/>
                                        <h1>Srija Munjuluri</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}