"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, Button } from "@heroui/react";

const Navbar = () => {
  const pathname = usePathname();

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

  return (
    <nav className="w-11/12 mx-auto py-1 flex items-center justify-between ">
      {/* log */}
      <Link href={"/"}>
        <div className="flex items-center">
          <Image width={70} height={30} src={logo} alt="logo" />
          <div className="text-center ">
            <span className="font-logo text-3xl font-bold text-[#15508b] italic ">
              Royal Tiles
            </span>
            <p className="font-body font-medium text-lg text-[#15508b]">
              Ceraamics
            </p>
          </div>
        </div>
      </Link>

      {/*desktop  navLink */}
      <ul className="flex items-center justify-between gap-4 font-[500]">
        {navLinks.map((link, ind) => (
          <li key={ind}>
            <Link
              className={`transition-colors duration-200 text-[#15508b] hover:text-orange-600 ${
                pathname === link.href ? "text-orange-600" : ""
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
        {!isPending && user ? (
          <div>
            {/* Avatar */}
            <div className="md:flex items-center gap-3 justify-center ">
              {/* Avatar Dropdown */}
              <div className="dropdown dropdown-end ">
                <div tabIndex={0} >
                  <Avatar>
                    <Avatar.Image
                      alt="kamal"
                      src={user?.image || user?.name?.charAt(0)}
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
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
                    <Link href="/my-profile">My Profile</Link>
                  </li>
                </ul>
              </div>

              {/* Logout */}
              <button
                size="sm"
                variant="flat"
                // onPress={handleLogout}
                className="py-[7px] px-4 cursor-pointer rounded-full  text-white bg-orange-600 outline-none font-medium  transition-colors "
              >
                Logout
              </button>
            </div>
          </div>
        ) : <></>}
      </div>
    </nav>
  );
};

export default Navbar;
