import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>FindMyEvents</h1>
            <div className="links">
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/create" style={{
                    color: "white",
                    backgroundColor: "#1061be",
                    borderRadius: "8px"
                }}>New Event</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;