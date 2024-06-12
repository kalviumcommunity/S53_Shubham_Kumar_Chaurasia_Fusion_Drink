import React from "react";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/clerk-react";
import "../App.css";

const UserButtonWithImageAndName = () => {
  const { user } = useUser();

  if (!user) return null;

  const firstName = user.firstName || user.fullName?.split(" ")[0];
  const imageUrl = user.imageUrl;

  return (
    <div>
      <img
        src={imageUrl}
        alt="User Image"
        style={{ borderRadius: "50%", width: "30px", height: "30px", marginRight: "8px" }}
      />
      <span className="user-name">{firstName}</span>
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
