import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import GoogleLogin from "../../../shared/SocialLogin/GoogleLogin";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        navigate('/')
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  return (
    <div className="w-full  max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            name="email"
            id="Email"
            placeholder="Email"
            className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.email?.type === "required" && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            name="password"
            id="password"
            placeholder="Password"
            className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.password?.type === "required" && (
            <span className="text-red-500">This field is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-500">password must be 6 characters</span>
          )}
          <div className="flex justify-end text-xs dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
          Login
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm dark:text-gray-600">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <GoogleLogin></GoogleLogin>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Don't have an account?
        <Link
          to="/register"
          rel="noopener noreferrer"
          href="#"
          className="underline dark:text-gray-800"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
