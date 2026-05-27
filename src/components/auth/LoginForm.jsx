import Link from "next/link";
import "@/app/(auth)/auth.css";

const LoginForm = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className=" flex flex-col items-center justify-center">
        <form
          className=" px-8 p-20  rounded-xl  
            max-w-md       
            border border-zinc-200/60 dark:border-white/10
            bg-white/80 dark:bg-zinc-900/70
            backdrop-blur-xl
            shadow-[0_8px_30px_rgb(0,0,0,0.08)]
            dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)]          
            transition-all
            duration-300"
        >
          <p className="font-semibold text-2xl text-orange-600 mb-7">
            Login your account
          </p>
          <div className="mb-6">
            <div className="input-group ">
              <input type="email" placeholder=" " />
              <label>Email Address</label>{" "}
            </div>
          </div>
          <div className="mb-2">
            <div className="input-group ">
              <input type="password" placeholder=" " />
              <label>Password</label>
              <span className="absolute right-2 top-2 text-gray-600 "></span>
            </div>
          </div>
          <p className="text-[12px] text-gray-600 underline hover:text-orange-600 mb-3">
            <Link href="">Forgot password</Link>
          </p>
          <button
            type="submit"
            className="btn w-full bg-linear-to-t bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white mb-3   disabled:cursor-not-allowed
              disabled:opacity-70"
          >
            Login
          </button>
          <p className="text-sm text-center text-gray-700 ">
            Don’t have an account ?
            <span className="text-orange-600">
              <Link href={""}> Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
