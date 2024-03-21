import React from 'react';
import '../App.css';

const LoginPage = () => {
  return (
    <>
      <div className="loginbody">
        <div className="logincontainer">
          <div className="heading">
            <h1>WELCOME BACK</h1>
            <h4>New User? Sign Up Here!</h4>
          </div>
          {/* <div className="logininputs">
            <form>
              
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
              <button type="submit">LOGIN</button>
            </form>
          </div> */}
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
      </div>
    </>
  );
}

export default LoginPage;