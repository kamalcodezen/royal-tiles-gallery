"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { toast } from "react-toastify";
import GlobalLoading from "@/app/(main)/loading";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "All Tiles",
      href: "/all-tiles",
    },
    {
      label: "My Profile",
      href: "/profile",
    },
  ];

  /* =========================
	   LOGOUT
	========================= */

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("See you soon! 👋 Logged out successfully", {
            position: "top-right",
            autoClose: 3000,
          });

          router.push("/");
          router.refresh();
        },
      },
    });
  };

  if (isPending) {
    return <GlobalLoading />;
  }

  return (
    <section className="fixed top-0 left-0  w-full z-50 bg-white/40 backdrop-blur-md border-b border-white/20">
      <nav className="w-11/12 mx-auto py-1 md:py-0 flex items-center justify-between ">
        {/* logo */}
        <Link href={"/"}>
          <div className="flex items-center">
            <Image
              width={70}
              height={30}
              src={logo}
              alt="logo"
              className="w-[clamp(2.8rem,6vw,4.4rem)] h-auto "
            />

            <div className="text-center">
              <span
                className="font-logo font-bold italic bg-linear-to-r from-[#15508b] via-[#1c6ab7]
 to-orange-500 bg-clip-text text-transparent text-[clamp(1.2rem,3vw,2rem)]"
              >
                Royal Tiles
              </span>

              {/* <p className="font-body font-medium text-[#15508b] text-[clamp(0.7rem,2vw,1.1rem)]">
                Ceramics
              </p> */}
            </div>
          </div>
        </Link>

        {/*desktop  navLink */}
        <ul className="hidden md:flex items-center justify-between gap-4 font-[500]">
          {navLinks.map((link, ind) => (
            <li key={ind}>
              <Link
                className={`transition-colors duration-200 text-blue-800 hover:text-orange-600 ${
                  pathname === link.href ? "text-orange-500" : ""
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* right section */}
        <div>
          {/* Loading skeleton */}
          {isPending && (
            <div className="h-10 w-24 animate-pulse rounded-2xl bg-muted" />
          )}
          {!isPending && user && (
            <div className="flex items-center justify-center">
              {/* Avatar */}
              <div className="md:flex flex items-center gap-3 justify-center ">
                {/* Avatar Dropdown */}
                <div className="dropdown dropdown-end ">
                  <div tabIndex={0}>
                    <Avatar>
                      <Avatar.Image
                        alt="kamal"
                        src={user?.image || user?.name?.charAt(0)}
                        referrerPolicy="no-referrer"
                      />
                      <Avatar.Fallback className="text-[#15508b] text-3xl">
                        {user?.name?.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar>
                  </div>

                  {/* Dropdown Content */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[100] w-54 p-4 shadow"
                  >
                    {/* User Info */}
                    <div className="mb-3">
                      <h2 className="font-semibold text-[#15508b]">
                        {user.name}
                      </h2>

                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    <li>
                      <Link href="/profile" className="flex gap-4">
                        <Avatar>
                          <Avatar.Image
                            alt={user?.name?.charAt(0)}
                            src={user?.image || user?.name?.charAt(0)}
                            referrerPolicy="no-referrer"
                          />
                        </Avatar>
                        <p className="text-xl font-medium"> My Profile</p>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="
    relative
    overflow-hidden
    px-5
    py-2
    rounded
    bg-[#15508b]
    text-white
    group
  "
                >
                  {/* Hover Background */}
                  <span
                    className="
      absolute
      inset-0
      w-0
      group-hover:w-full
      transition-all
      duration-700
      bg-gradient-to-r
      from-red-600
      via-red-500
      to-orange-500
      z-0
    "
                  ></span>

                  {/* Text */}
                  <span className="relative z-10">Logout</span>
                </button>
              </div>
            </div>
          )}

          {!isPending && !user && (
            <Link href={"/login"}>
              <button
                size="sm"
                className=" relative overflow-hidden px-6 py-2 rounded bg-[#15508b] text-white group"
              >
                {/* Hover Background */}
                <span className=" absolute inset-0 w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 z-0 "></span>

                {/* Text */}
                <span className="relative z-10">Login</span>
              </button>
            </Link>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
