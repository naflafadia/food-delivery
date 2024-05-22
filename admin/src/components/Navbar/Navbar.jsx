import { assets } from '../../assets/assets'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="container-logo">
      <h1 className='logo'>Flavory.</h1>
      <h4>Admin Panel</h4>
      </div>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}
