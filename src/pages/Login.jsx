import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const neviagte = useNavigate()
  const {signIn} = useContext(AuthContext)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    signIn(data?.email , data?.password)
    .then((res) => {
      console.log(res)
      toast.success("Login successful")
      neviagte("/dashboard/cashmemo")
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="max-w-screen-lg mx-auto">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid">
          <input
            placeholder="Enter Email"
            type="email"
            {...register("email")}
            className="px-5 py-2.5 border-2 border-slate-500 mb-5  w-1/2 mx-auto"
          />
          <input
            placeholder="Enter Password"
            type="Password"
            {...register("password")}
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
