import { Link, useNavigate } from "react-router-dom";

const Uder = ({ user }) => {
  const { id, name, email, phone, website } = user;
  const navigate = useNavigate();
function hendailOnClickBtn(){
  navigate(`/user/${id}`)
}
  return (
    <div className="bg-amber-50 p-6 rounded-2xl text-center cursor-pointer 
    transform transition-transform duration-1000 hover:scale-200 ">
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
      <h1>{website}</h1>
      <Link className="btn btn-primary mt-5" to={`/user/${id}`}>Show Detials</Link>
      <button onClick={() => hendailOnClickBtn() } className="btn btn-primary  mt-6">Show Deatils Button Click</button>
    </div>
  );
};

export default Uder;
