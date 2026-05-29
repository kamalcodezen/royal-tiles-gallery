"use client";

import "@/app/(auth)/auth.css";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginFrom = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Google login
  const googleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  // LOGIN
  const handleLogin = async (data) => {
    // console.log(data);
    const email = data?.email?.toLowerCase()?.trim();
    const password = data?.password?.trim();

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const { data: DataRes, error } = await authClient.signIn.email(
        {
          email,
          password,
        },
        {
          onRequest: () => {
            setLoading(true);
          },

          onSuccess: () => {
            setLoading(false);
            toast.success("Welcome back! 🌸 Login successful", {
              position: "top-right",
              autoClose: 3000,
            });
            router.push("/");
          },

          onError: (ctx) => {
            setLoading(false);
            toast.error(ctx.error.message || "Login failed. Please try again", {
              position: "top-right",
              autoClose: 4000,
            });
          },
        },
      );
      // console.log(DataRes, error);
    } catch (error) {
      setLoading(false);
      toast.error("An unexpected error occurred", {
        position: "top-right",
        autoClose: 4000,
      });
      // console.log(error);
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <div
        className="min-h-[100vh] w-full flex flex-col items-center justify-center   px-8 p-10 border   border-zinc-200/60 dark:border-white/10
            bg-white/80 dark:bg-zinc-900/70
            backdrop-blur-xl
            shadow-[0_8px_30px_rgb(0,0,0,0.08)]
            dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] rounded-xl"
      >
        <div className="text-start">
          {/* header */}
          <p className="font-semibold text-2xl  bg-linear-to-r from-[#15508b] via-[#1c6ab7] to-orange-500 bg-clip-text text-transparent">
            Welcome Back
          </p>
          <p className="mb-6 text-sm text-gray-400">
            Sign in to your Premium Tiles account
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit(handleLogin)} >
          {/* email */}
          <div className="mb-6">
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

          {/* password */}
          <div className="mb-2">
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
                className="absolute right-2 top-2 text-gray-600 cursor-pointer"
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
                {errors.password.message}
              </p>
            )}
          </div>

          {/* forgot option */}
          <p className="text-[12px] text-gray-600 underline hover:text-orange-600 mb-3">
            <Link href="">Forgot password?</Link>
          </p>

          {/* submit button */}
          <button
            type="submit"
            disabled={loading}
            className="btn w-full  bg-linear-to-r
                from-[#15508b]
                via-[#1c6ab7]
                to-orange-500 text-white mb-3   rounded-full disabled:cursor-not-allowed
              disabled:opacity-70"
          >
            {loading ? (
              <>
                <p>
                  Logging...
                  <span className="loading loading-spinner w-4.5"></span>
                </p>
              </>
            ) : (
              "Login"
            )}
          </button>

          {/* Google */}
          <Button
            variant="secondary"
            className="w-full 
            inset-0 hover:bg-linear-to-r
                from-[#15508b]
                via-[#1c6ab7]
                to-orange-500 hover:text-white mb-3 border border-border rounded-full transition-all duration-500"
            onPress={() => {
              googleSignUp();
              toast.info("Google signup coming soon! 🚀", {
                position: "top-right",
                autoClose: 3000,
              });
            }}
          >
            <FcGoogle size={20} />
            <span>Continue with Google</span>
          </Button>

          <p className="text-sm text-center text-gray-700 ">
            Don&apos;t have an account?
            <span className="text-orange-600">
              <Link href={"/register"}> Create one</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LoginFrom;
