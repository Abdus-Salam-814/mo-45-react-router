import { useLoaderData } from "react-router-dom";
import Uder from "../User/Uder";

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h1>User Data Here:{users.length} </h1>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-1/2 mx-auto ">
           {
                users.map(user => <Uder user={user}></Uder> )
            }
           </div>
        </div>
    );
};

export default Users;