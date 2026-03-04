import './styles.css'
import {assets} from '../../utiles/image.js'

const AdminNavbar = () => {
  return (
    <div className='navbar'>
     <img className='logo' src={assets.logo} alt="logo" />
     <img className='profile' src={assets.profile_image} alt="image" />
    </div>
  )
}

export default AdminNavbar;