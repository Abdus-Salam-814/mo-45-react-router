import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h1>User Data Here:{users.length} </h1>
        </div>
    );
};

export default Users;