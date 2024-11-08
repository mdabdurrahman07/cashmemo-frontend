import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // const name = data?.name
    // const email = data?.email
    // const phoneNumber = data?.phoneNumber
    // const username = data?.username
    // const password = data?.password
    // const nid = data?.nid
    // const tradeLicense = data?.tradeLicense
    // const TIN = data?.TIN
    // const image = data?.image

console.log(data)
    // console.log(name,
    //   email,
    //   phoneNumber,
    //   username,
    //   password,
    //   nid,
    //   tradeLicense,
    //   TIN,
    //   image)


  };
  return (
    <div className="max-w-screen-lg mx-auto">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid">
          <input
            placeholder="Enter Full Name"
            type="text"
            {...register("name")}
            className="px-5 py-2.5 border-2 border-slate-500 mb-5  w-1/2 mx-auto"
          />
          <input
            placeholder="Enter Email"
            type="email"
            {...register("email")}
            className="px-5 py-2.5 border-2 border-slate-500 mb-5 w-1/2 mx-auto"
          />
          <input
            placeholder="Enter Phone Number"
            type="number"
            {...register("phoneNumber")}
            className="px-5 py-2.5 border-2 border-slate-500 mb-5 w-1/2 mx-auto"
          />
          <input
            placeholder="Enter Username"
            type="text"
            {...register("username")}
            className="px-5 py-2.5 border-2 border-slate-500 mb-5 w-1/2 mx-auto"
          />
          <input
            placeholder="Enter Password"
            type="password"
            {...register("password")}
            className="px-5 py-2.5 border-2 border-slate-500 mb-5 w-1/2 mx-auto"
          />
          <input
            placeholder="Enter NID"
            type="number"
            {...register("nid")}
            className="px-5 py-2.5 border-2 border-slate-500 mb-5 w-1/2 mx-auto"
          />
          <input
            placeholder="Enter TradeLicense"
            type="number"
            {...register("tradeLicense")}
            className="px-5 py-2.5 border-2 border-slate-500 mb-5 w-1/2 mx-auto"
          />
          <input
            placeholder="Enter Tin Number"
            type="number"
            {...register("TIN")}
            className="px-5 py-2.5 border-2 border-slate-500 mb-5 w-1/2 mx-auto"
          />
          <input
            placeholder="Enter direct img link"
            type="text"
            {...register("image")}
            className="px-5 py-2.5 border-2 border-slate-500 mb-5 w-1/2 mx-auto"
          />
            
          <input
            className="px-3.5 py-2 bg-blue-500 text-white rounded-xl w-20 mx-auto"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
