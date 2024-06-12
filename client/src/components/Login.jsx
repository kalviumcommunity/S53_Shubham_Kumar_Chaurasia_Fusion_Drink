import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


export default function Login() {
  return (
    <header>
      <SignedOut>
        <SignInButton>
          <button>
            Login
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}