import { Link, Outlet } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>This is About Component</h1>
            <Link className="btn btn-secondary" to={'/about/myInfo'}>My Info</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default About;