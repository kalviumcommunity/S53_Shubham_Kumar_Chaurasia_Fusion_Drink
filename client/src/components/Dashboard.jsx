import React from "react";
import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import '../App.css';
import martiniGlass from "../assets/martiniGlass.png"
import Random1 from "../assets/random1.jpg"
import Random2 from "../assets/random2.jpg"
import Random3 from "../assets/random3.webp"
import Random4 from "../assets/random4.webp"
import Gin from "../assets/Gin Bombay Sapphire.jpeg"
import Vodka from "../assets/Absolut Vodka.jpeg"
import Beer from "../assets/beer.jpg"
import Rum from "../assets/rum.jpeg"

const DashboardPage = () => {
    return (
        <>
            <Navbar />
            <div className="dashboardbody">
                <div className="firstContainer">
                    <h1>The best TASTE <br />comes after MIXING</h1>
                    <img src={martiniGlass} alt="" />
                </div>

                <div className="randomCocktails">
                    <div className="randomcard"><Link to="/recipepage" style={{textDecoration:"none"}}><img src={Random1} alt="" /></Link></div>
                    <div className="randomcard"><Link to="/recipepage" style={{textDecoration:"none"}}><img src={Random2} alt="" /></Link></div>
                    <div className="randomcard"><Link to="/recipepage" style={{textDecoration:"none"}}><img src={Random3} alt="" /></Link></div>
                    <div className="randomcard"><Link to="/recipepage" style={{textDecoration:"none"}}><img src={Random4} alt="" /></Link></div>
                </div>

                <div className="alcoholcon">
                    <div className="alcobox alcobox1">
                        <div className="alcoimage">
                            <img src={Gin} alt="alcoimage" />
                        </div>
                        <div className="alconame">
                            <h2>Gin</h2>
                        </div>
                    </div>
                    <div className="alcobox alcobox2">
                        <div className="alcoimage">
                            <img src={Vodka} alt="alcoimage" />
                        </div>
                        <div className="alconame">
                            <h2>Vodka</h2>
                        </div>
                    </div>
                    <div className="alcobox alcobox3">
                        <div className="alcoimage">
                            <img src={Beer} alt="alcoimage" />
                        </div>
                        <div className="alconame">
                            <h2>Beer</h2>
                        </div>
                    </div>
                    <div className="alcobox alcobox4">
                        <div className="alcoimage">
                            <img src={Rum} alt="alcoimage" />
                        </div>
                        <div className="alconame">
                            <h2>Rum</h2>
                        </div>
                    </div>
                    <div className="alcobox alcobox5">
                        <div className="alcoimage">
                            <img src="" alt="alcoimage" />
                        </div>
                        <div className="alconame">
                            <h2>Gin</h2>
                        </div>
                    </div>
                    <div className="alcobox alcobox6">
                        <div className="alcoimage">
                            <img src="" alt="alcoimage" />
                        </div>
                        <div className="alconame">
                            <h2>Gin</h2>
                        </div>
                    </div>
                    <div className="alcobox alcobox7">
                        <div className="alcoimage">
                            <img src="" alt="alcoimage" />
                        </div>
                        <div className="alconame">
                            <h2>Gin</h2>
                        </div>
                    </div>
                    <div className="alcobox alcobox8">
                        <div className="alcoimage">
                            <img src="" alt="alcoimage" />
                        </div>
                        <div className="alconame">
                            <h2>Gin</h2>
                        </div>
                    </div>
                    <div className="alcobox alcobox9">
                        <div className="alcoimage">
                            <img src="" alt="alcoimage" />
                        </div>
                        <div className="alconame">
                            <h2>Gin</h2>
                        </div>
                    </div>
                    <div className="alcobox alcobox10">
                        <div className="alcoimage">
                            <img src="" alt="alcoimage" />
                        </div>
                        <div className="alconame">
                            <h2>Gin</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    );

}
    
export default DashboardPage;