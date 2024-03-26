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
            </div>
        </>    
    );

}
    
export default DashboardPage;