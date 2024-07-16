import React, { useState } from "react";
import { SignedIn, SignedOut, SignInButton, useUser, useSignOut } from "@clerk/clerk-react";
import "../App.css";

const UserButtonWithImageAndName = () => {
  const { user } = useUser();
  const { signOut } = useSignOut();
  const [showLogout, setShowLogout] = useState(false);

  if (!user) return null;

  const firstName = user.firstName || user.fullName?.split(" ")[0];
  const imageUrl = user.imageUrl;

  const handleUserClick = () => {
    setShowLogout((prev) => !prev);
  };

  const handleLogoutClick = () => {
    signOut();
  };

  return (
    <div>
      <div onClick={handleUserClick} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <img
          src={imageUrl}
          alt="User Image"
          style={{ borderRadius: "50%", width: "30px", height: "30px", marginRight: "8px" }}
        />
        <span className="user-name">{firstName}</span>
      </div>
      {showLogout && (
        <button onClick={handleLogoutClick} className="logout-button">
          Logout
        </button>
      )}
    </div>
  );
};

export default function LoginPage() {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <button className="login-container">
            <span className="google-login-btn">Login</span>
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <button className="login-container">
          <span className="google-login-btn"><UserButtonWithImageAndName /></span>
        </button>
      </SignedIn>
    </>
  );
}
