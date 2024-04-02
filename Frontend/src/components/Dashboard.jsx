import React from "react";
import { Link } from "react-router-dom"
import '../App.css';

const DashboardPage = () => {
    return (
        <>
            <div className="dashboardbody">
                <nav className="dashboardnav">
                    <div className="logo"><img src="" alt="logo" /></div>
                    <div className="searchbar">searchbar</div>
                    <div className="useraccount"><img src="" alt="user image" /></div>
                </nav>

                <div className="firstContainer">
                    <h1>FIRST CONTAINER</h1>
                </div>

                <div className="randomCocktails">
                    <div className="randomcard random1">CONTAINER 1</div>
                    <div className="randomcard random2">CONTAINER 2</div>
                    <div className="randomcard random3">CONTAINER 3</div>
                    <div className="randomcard random4">CONTAINER 4</div>
                </div>

                <div className="alcoholcon">
                    <div className="alcobox alcobox1">
                        <div className="alcoimage">
                            {/* <img src="https://us.123rf.com/450wm/ogovorka/ogovorka1701/ogovorka170100075/71044248-margarita-cocktail-with-lime-and-salt-glass-of-margarita-alcoholic-cocktail-on-black-background.jpg?ver=6" alt="alcoimage" /> */}
                        </div>
                        <div className="alconame">
                            <h2>Gin</h2>
                        </div>
                    </div>
                    <div className="alcobox alcobox2">
                        <div className="alcoimage">
                            <img src="" alt="alcoimage" />
                        </div>
                        <div className="alconame">
                            <h2>Gin</h2>
                        </div>
                    </div>
                    <div className="alcobox alcobox3">
                        <div className="alcoimage">
                            <img src="" alt="alcoimage" />
                        </div>
                        <div className="alconame">
                            <h2>Gin</h2>
                        </div>
                    </div>
                    <div className="alcobox alcobox4">
                        <div className="alcoimage">
                            <img src="" alt="alcoimage" />
                        </div>
                        <div className="alconame">
                            <h2>Gin</h2>
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