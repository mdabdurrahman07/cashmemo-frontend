import { useForm } from "react-hook-form";
import { BsPinMap } from "react-icons/bs";
import { CiMail, CiPhone } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { LuScanFace } from "react-icons/lu";
import { TbLicense } from "react-icons/tb";
import { RiUser6Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { IoDocument } from "react-icons/io5";
import { Modal, ModalAction, ModalContent, ModalHeader } from "keep-react";

const Profile = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="px-5">
      <h1 className="text-3xl font-medium font-serif underline  my-5 text-center">
        Profile
      </h1>
      {/* profile parent div */}
      <div className="flex gap-5">
        {/* profile card */}
        <div className="border-2 border-slate-300  rounded-lg bg-[#F5F5F5] p-5 w-1/2 h-80">
          <div className="text-center space-y-5">
            <div className="flex justify-center items-center">
              <img
                src="https://i.ibb.co.com/mXdy82f/jjjjjjjjjjjjjjjjjjjjjjjjjjjjjssssssssssssssssssss.jpg"
                alt=""
                className="w-32 h-auto"
              />
            </div>
            <h1 className="text-2xl font-medium">MD Abdur Rahman</h1>
            <div className="flex gap-2 justify-center items-center">
              <span>
                <BsPinMap className="text-xl" />
              </span>
              <h1 className="text-xl"> Dhaka Bangladesh</h1>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <span>
                <CiShop className="text-2xl" />
              </span>
              <h1 className="text-xl"> Tabiz Baba</h1>
            </div>
          </div>
        </div>
        {/* update option and other info */}
        <div className="border-2 border-slate-300 rounded-lg bg-[#F5F5F5] p-5 w-4/5">
          <h1 className="text-2xl text-center font-medium underline my-3">
            User Info
          </h1>
          <div >
            <div className="space-y-4">
              <div className="flex gap-3 justify-start items-center">
                <span>
                  <CiMail className="text-3xl" />
                </span>
                <h1 className="text-2xl">jamildx4@gmail.com</h1>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <span>
                  <LuScanFace className="text-3xl" />
                </span>
                <h1 className="text-2xl">511334455262</h1>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <span>
                  <TbLicense className="text-3xl" />
                </span>
                <h1 className="text-2xl">456-879621-21</h1>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <span>
                  <CiSettings className="text-3xl" />
                </span>
                <h1 className="text-2xl">Supplier</h1>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <span>
                  <RiUser6Line className="text-3xl" />
                </span>
                <h1 className="text-2xl">mdabdurrahman</h1>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <span>
                  <CiPhone className="text-3xl" />
                </span>
                <h1 className="text-2xl">+880178161661</h1>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <span>
                  <IoDocument className="text-3xl" />
                </span>
                <h1 className="text-2xl">8347467934874</h1>
              </div>
            </div>
            <Modal>
              <ModalAction asChild>
                <div className="flex justify-center items-center my-5">
                  <button className="bg-blue-500 text-white px-4 py-2.5 rounded-lg">
                    Update Info
                  </button>
                </div>
              </ModalAction>
              <ModalContent className="max-w-[20rem] lg:max-w-[26rem]">
                <ModalHeader className="mb-6 flex flex-col items-center justify-center space-y-3">
                  <div>
                    <h1>Update Info</h1>
                  </div>
                  <div className="space-y-1 text-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        {...register("email")}
                        name="email"
                        placeholder="Email"
                        required
                        className="border mb-2 p-2 w-full"
                      />
                      <input
                        {...register("password")}
                        name="password"
                        placeholder="Password"
                        required
                        className="border mb-2 p-2 w-full"
                      />
                      <input
                        {...register("avatar")}
                        name="avatar"
                        placeholder="Upload avatar"
                        required
                        type="file"
                        className="border mb-2 p-2 w-full"
                      />
                      <input
                        {...register("nid")}
                        name="nid"
                        placeholder="NID"
                        required
                        className="border mb-2 p-2 w-full"
                      />
                      <input
                        {...register("tradeLicense")}
                        name="tradeLicense"
                        placeholder="Trade License"
                        className="border mb-2 p-2 w-full"
                      />
                      <select
                        name="role"
                        {...register("role")}
                        required
                        className="border mb-2 p-2 w-full"
                      >
                        <option value="">Select Role</option>
                        <option value="supplier">Supplier</option>
                        <option value="wholesaler">Wholesaler</option>
                      </select>
                      <input
                        {...register("name")}
                        name="name"
                        placeholder="Full Name"
                        required
                        className="border mb-2 p-2 w-full"
                      />
                      <input
                        {...register("username")}
                        name="username"
                        placeholder="Username"
                        required
                        className="border mb-2 p-2 w-full"
                      />
                      <input
                        {...register("location")}
                        name="location"
                        placeholder="Address"
                        className="border mb-2 p-2 w-full"
                      />
                      <input
                        {...register("phoneNumber")}
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="border mb-2 p-2 w-full"
                      />
                      <input
                        {...register("TIN")}
                        name="TIN"
                        placeholder="TIN"
                        className="border mb-2 p-2 w-full"
                      />
                      <input
                        type="submit"
                        value="Update"
                        className="bg-blue-500 text-white p-2 rounded"
                      />
                    </form>
                  </div>
                </ModalHeader>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
