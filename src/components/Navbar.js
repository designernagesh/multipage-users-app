import './Navbar.css';
import { FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Link to="/">
            <div className='navbar'>
                <FaUserTie className='icon' />
                <h1>User <span className='purple'>Search</span></h1>
            </div>
        </Link>
    );
  }
  
  export default Navbar;
  