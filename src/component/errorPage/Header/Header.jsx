import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex  items-center gap-6">
            <Link className="hover:bg-amber-200 px-2" to={'/'} >Home</Link>
            <Link className="hover:bg-amber-200 px-2" to={'/about'} >About</Link>
            <Link className="hover:bg-amber-200 px-2" to={'/contect'} >Contect</Link>
            <Link className="hover:bg-amber-200 px-2" to={'/users'} >User Data</Link>
            <Link className="hover:bg-amber-200 px-2" to={'/login'} >LogIn</Link>
          
          
          
          
           
        </div>
    );
};

export default Header;