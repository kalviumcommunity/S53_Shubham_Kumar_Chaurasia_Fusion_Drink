import React from 'react';
import { Link } from "react-router-dom"
import '../App.css';

const SignupPage = () => {
    return (
        <>
            <div className="loginbody">
                <div className="logincontainer">
                    <div className="heading">
                        <h1>WELCOME BACK</h1>
                        <h4>Already have account<Link to="/login">Login Here!</Link></h4>
                    </div>
                    <div className="logininputs">
                        <form>
                            <div className="wave-group">
                                <input required type="text" className="input" />
                                <span className="bar"></span>
                                <label className="label">
                                    <span className="label-char" style={{ '--index': 0 }}>N</span>
                                    <span className="label-char" style={{ '--index': 1 }}>a</span>
                                    <span className="label-char" style={{ '--index': 2 }}>m</span>
                                    <span className="label-char" style={{ '--index': 3 }}>e</span>
                                </label>
                            </div>
                            <div className="wave-group">
                                <input required type="text" className="input" />
                                <span className="bar"></span>
                                <label className="label">
                                    <span className="label-char" style={{ '--index': 0 }}>U</span>
                                    <span className="label-char" style={{ '--index': 1 }}>s</span>
                                    <span className="label-char" style={{ '--index': 2 }}>e</span>
                                    <span className="label-char" style={{ '--index': 3 }}>r</span>
                                    <span className="label-char" style={{ '--index': 4 }}>n</span>
                                    <span className="label-char" style={{ '--index': 5 }}>a</span>
                                    <span className="label-char" style={{ '--index': 6 }}>m</span>
                                    <span className="label-char" style={{ '--index': 7 }}>e</span>
                                </label>
                            </div>
                            <div className="wave-group">
                                <input required type="text" className="input" />
                                <span className="bar"></span>
                                <label className="label">
                                    <span className="label-char" style={{ '--index': 0 }}>P</span>
                                    <span className="label-char" style={{ '--index': 1 }}>a</span>
                                    <span className="label-char" style={{ '--index': 2 }}>s</span>
                                    <span className="label-char" style={{ '--index': 3 }}>s</span>
                                    <span className="label-char" style={{ '--index': 4 }}>w</span>
                                    <span className="label-char" style={{ '--index': 5 }}>o</span>
                                    <span className="label-char" style={{ '--index': 6 }}>r</span>
                                    <span className="label-char" style={{ '--index': 7 }}>d</span>
                                </label>
                            </div>
                            <div className="wave-group" id='passmarginbottom'>
                                <input required type="text" className="input" />
                                <span className="bar"></span>
                                <label className="label">
                                    <span className="label-char" style={{ '--index': 0 }}>R</span>
                                    <span className="label-char" style={{ '--index': 1 }}>e</span>
                                    <span className="label-char" style={{ '--index': 2 }}>-</span>
                                    <span className="label-char" style={{ '--index': 3 }}>E</span>
                                    <span className="label-char" style={{ '--index': 4 }}>n</span>
                                    <span className="label-char" style={{ '--index': 5 }}>t</span>
                                    <span className="label-char" style={{ '--index': 6 }}>e</span>
                                    <span className="label-char" style={{ '--index': 7 }}>r</span>
                                    <span className="label-char" style={{ '--index': 8 }}> </span>
                                    <span className="label-char" style={{ '--index': 9 }}>P</span>
                                    <span className="label-char" style={{ '--index': 10 }}>a</span>
                                    <span className="label-char" style={{ '--index': 11 }}>s</span>
                                    <span className="label-char" style={{ '--index': 12 }}>s</span>
                                    <span className="label-char" style={{ '--index': 13 }}>w</span>
                                    <span className="label-char" style={{ '--index': 14 }}>o</span>
                                    <span className="label-char" style={{ '--index': 15 }}>r</span>
                                    <span className="label-char" style={{ '--index': 16 }}>d</span>
                                </label>
                            </div>
                            <button type="submit">LOGIN</button>
                        </form>
                    </div>
                    <div className="orsignupwith">
                        <div className="boder border1"><hr /></div>
                        <div className="signuptext">or Sign Up with</div>
                        <div className="boder border2"><hr /></div>
                    </div>
                    <div className="googleappleicons">
                        <div className="google">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" alt="" />
                        </div>
                        <div className="apple">
                            <img src="https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png" alt="" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default SignupPage;