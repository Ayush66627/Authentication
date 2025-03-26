import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-hot-toast';

function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
     const userInfo = {
        email: data.email,
        password: data.password,
     }
     axios.post("http://localhost:4000/users/login", userInfo)
     .then((res) => {
       
        if(res.data) {
          toast.success('Login Successful');
          document.getElementById("my_modal_3").close()   
          setTimeout(() => {
            window.location.reload()    
            localStorage.setItem("User", JSON.stringify(res.data.user))     
          }, 3000);
         
        }
        
     }).catch((err) => {
        console.log("Error", err)
        toast.error('Login Failed!');         
        setTimeout(() => {}, 3000);
     })
  }

  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box px-6 p-10">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm outline-offset-1 btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-xl -mt-7 text-center">Login!</h3>
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
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="flex justify-between mt-4 ">
              <button className="p-1 md:hover:bg-blue-400  bg-blue-500 text-white px-2 text-md font-bold rounded-md">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline font-semibold text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default login;
