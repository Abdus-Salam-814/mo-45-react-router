const Uder = ({ user }) => {
  const { name, email, phone, website } = user;
  return (
    <div className="bg-amber-50 p-6 rounded-2xl text-center cursor-pointer 
    transform transition-transform duration-2000 hover:scale-200 ">
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
      <h1>{website}</h1>
    </div>
  );
};

export default Uder;
