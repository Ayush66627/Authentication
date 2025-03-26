import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-hot-toast';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
    }
    await axios.post("https://authentication-pp61.onrender.com/users/signup", userInfo)
    .then((res) => {
     
      if(res.data) {
        toast.success("Signup successfull")
      }
      localStorage.setItem("User", JSON.stringify(res.data.user))
    }).catch((err) => {
       if(err.response){
        console.log("Error", err.response.data.message)
        toast.error("Signup failed: " + err.response.data.message) 
       }
    })
  }
    

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <div
            id="my_modal_3"
            className="border-[2px] shadow-md bg-blue-200 rounded-md"
          >
            <div className="modal-box px-6 p-10">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to="/">
                  <button className="btn btn-sm outline-offset-1 btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </Link>
                <h3 className="font-bold text-xl -mt-7 text-center">Signup!</h3>

                <div className="mt-5">
                  <span className="font-semibold">Name</span>
                  <br />
                  <input
                    className="mt-1 w-80 px-3 border rounded-md outline-none"
                    type="text"
                    placeholder="Enter your full name"
                    {...register("username", { required: true })}
                  />
                  <br />
                  {errors.username && <span className="text-sm text-red-500">This field is required</span>}
                </div>

                <div className="mt-5">
                  <span className="font-semibold">Email</span>
                  <br />
                  <input
                    className="mt-1 w-80 px-3 border rounded-md outline-none"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                </div>

                <div className="mt-5">
                  <span className="font-semibold">Password</span>
                  <br />
                  <input
                    className="mt-1 w-80 px-3 border rounded-md outline-none"
                    type="password"
                    placeholder="Enter your Password"
                    {...register("password", { required: true })}
                  />
                   <br />
                   {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                </div>

                <div className="grid  mt-4 ">
                  <button className="p-1 md:hover:bg-blue-400 items-center justify-center  bg-blue-500 text-white px-2 text-md font-bold rounded-md">
                    Signup
                  </button>
                  <br />
                  <p>
                    Already have an account?{" "}
                    <Link
                      to="/"
                      className="underline font-semibold text-blue-500 cursor-pointer"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
