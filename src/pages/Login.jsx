import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="max-w-screen-lg mx-auto">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid">
          <input
            placeholder="Enter Email"
            type="email"
            {...register("name")}
            className="px-5 py-2.5 border-2 border-slate-500 mb-5  w-1/2 mx-auto"
          />
          <input
            placeholder="Enter Password"
            type="Password"
            {...register("email")}
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

export default Login;
