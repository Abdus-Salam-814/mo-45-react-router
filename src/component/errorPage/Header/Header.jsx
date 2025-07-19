const Header = () => {
    return (
        <div className="flex  items-center gap-6">
           <a className="hover:bg-amber-200 px-2" href="/">Home</a>
           <a className="hover:bg-amber-200 px-2" href="/about">About</a>
           <a className="hover:bg-amber-200 px-2" href="/contect">Contect Us</a>
           <a className="hover:bg-amber-200 px-2" href="/login">Log in</a> 
        </div>
    );
};

export default Header;