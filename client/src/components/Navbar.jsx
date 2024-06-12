import { Link } from "react-router-dom"
import '../App.css';
import Loginbutton from "../components/LoginButton"
import Logo from "../components/Logo"
import Searchbar from "../components/Searchbar"


export default function Navbar() {
  return (
  <>
    <div style={{display:"flex", justifyContent:"space-between"}}>
        <Link to="/" style={{textDecoration:"none"}}>
            <Logo />
        </Link>
        <Searchbar />
        <Loginbutton />
    </div>
  </>
  )
}