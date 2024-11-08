import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";

import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nevigate = useNavigate()
  const { creatUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    creatUser(data?.email, data?.password)
      .then((res) => {
        console.log(res);
        toast.success("User created successfully")
        nevigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
      
      axios.post("http://localhost:5000/api/v1/users/register" , data)
      .then(res => {
        console.log(res.data)
        
      })
      .catch(error => {
        toast.error(error)
      })
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
          <select
            {...register("role")}
            className="px-5 py-2.5 border-2 border-slate-500 mb-5 w-1/2 mx-auto"
          >
            <option value="supplier">Supplier</option>
            <option value="wholesaler">Wholesaler</option>
          </select>
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
