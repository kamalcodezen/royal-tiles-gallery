"use client";

import "@/app/(auth)/auth.css";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // LOGIN
  const handleSignUp = async (data) => {
    console.log(data);

 
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(handleSignUp)}
          className=" px-8 p-10 border   border-zinc-200/60 dark:border-white/10
            bg-white/80 dark:bg-zinc-900/70
            backdrop-blur-xl
            shadow-[0_8px_30px_rgb(0,0,0,0.08)]
            dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] rounded-xl"
        >
          <p className="font-semibold text-2xl text-orange-600 ">
            Create Account
          </p>
          <p className="mb-2 text-sm text-gray-400">
            Start exploring Premium Tiles
          </p>
          {/* name */}
          <div className="mb-4">
            <div className="input-group ">
              <input
                type="text"
                {...register("name", { required: "kamalUddin*" })}
                placeholder=" "
              />
              <label>Your Name</label>{" "}
            </div>
            {errors.name && (
              <p className="text-[12px] text-red-700 mt-2">
                {errors.name?.message}
              </p>
            )}
          </div>

          {/* email */}
          <div className="mb-4">
            <div className="input-group ">
              <input
                type="email"
                {...register("email", { required: "kamal@exmaple.com*" })}
                placeholder=" "
              />
              <label>Email Address</label>{" "}
            </div>
            {errors.email && (
              <p className="text-[12px] text-red-700 mt-2">
                {errors.email?.message}
              </p>
            )}
          </div>

          {/* photo */}
          <div className="mb-4">
            <div className="input-group ">
              <input
                type="photo"
                {...register("photo", { required: "https/Example*" })}
                placeholder=" "
              />
              <label>Profile Image URL</label>{" "}
            </div>
            {errors.photo && (
              <p className="text-[12px] text-red-700 mt-2">
                {errors.photo?.message}
              </p>
            )}
          </div>

          {/* password */}
          <div className="mb-3">
            <div className="input-group ">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" "
                {...register("password", {
                  required:
                    "Must be at least 6 characters with 1 uppercase and 1 number*",
                })}
              />
              <label>Password</label>
              <span
                className="absolute right-2 top-2 text-gray-600 "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="w-4.5" />
                ) : (
                  <EyeOff className="w-4.5" />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="text-[12px] text-red-700 mt-2">
                {errors.password?.message}
              </p>
            )}
          </div>

          {/* confirmPassword */}
          <div className="mb-3">
            <div className="input-group ">
              <input
                type={confirmPassword ? "text" : "password"}
                placeholder=" "
                {...register("confirmPassword", {
                  required: "Passwords do not match*",
                })}
              />
              <label>Confirm Password</label>
              <span
                className="absolute right-2 top-2 text-gray-600 "
                onClick={() => setConfirmPassword(!confirmPassword)}
              >
                {confirmPassword ? (
                  <Eye className="w-4.5" />
                ) : (
                  <EyeOff className="w-4.5" />
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-[12px] text-red-700 mt-2">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>

          {/* create button */}
          <button
            type="submit"
            disabled={loading}
            className="btn w-full bg-linear-to-t  from-red-600 via-red-500 to-orange-500 text-white mb-3   disabled:cursor-not-allowed
              disabled:opacity-70 rounded-full"
          >
            {loading ? (
              <>
                <p>
                  Create Account...
                  <span className="loading loading-spinner w-4.5"></span>
                </p>
              </>
            ) : (
              "Create Account"
            )}
          </button>

          {/* Google */}
          <Button
            variant="secondary"
            className="w-full bg-linear-to-t  from-red-600 via-red-500 to-orange-500 text-white mb-3 border border-border rounded-full "
            onPress={() =>
              toast.info("Google signup coming soon! 🚀", {
                position: "top-right",
                autoClose: 3000,
              })
            }
          >
            {loading ? (
              <>
                <p>
                  <FcGoogle size={20} />
                  <span>Continue with Google</span>
                  <span className="loading loading-spinner w-4.5"></span>
                </p>
              </>
            ) : (
              <>
                <FcGoogle size={20} />
                <span>Continue with Google</span>
              </>
            )}
          </Button>

          <p className="text-sm text-center text-gray-700 ">
            Already have an account? ?
            <span className="text-orange-600">
              <Link href={"/login"}> Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;
