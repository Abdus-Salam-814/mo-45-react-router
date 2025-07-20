import { Link, NavLink } from "react-router-dom";
import '../../../style/style.css'

const Header = () => {
    return (
        <nav className="flex  items-center gap-6">
            <NavLink className="hover:bg-amber-200 px-2" to={'/'} >Home</NavLink>
            
            <NavLink className="hover:bg-amber-200 px-2" to={'/about'} >About</NavLink>
            <NavLink className="hover:bg-amber-200 px-2" to={'/contect'} >Contect</NavLink>
            <NavLink className="hover:bg-amber-200 px-2" to={'/users'} >User Data</NavLink>
            <NavLink className="hover:bg-amber-200 px-2" to={'/login'} >LogIn</NavLink>
          
          
          
          
           
        </nav>
    );
};

export default Header;