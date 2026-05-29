"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { toast } from "react-toastify";
import GlobalLoading from "@/app/(main)/loading";
import { Menu } from "lucide-react";

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
    <section className="fixed top-0 left-0  w-full z-50">
      {/* bg-white/10 backdrop-blur-md border-b border-white/20 */}
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
              <span className="font-logo font-bold italic text-[#15508b] t text-[clamp(1.2rem,3vw,2rem)]">
                Royal
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

          {/* ── DESKTOP: Logged In ── */}
          {!isPending && user && (
            <div className=" items-center justify-center hidden md:flex cursor-pointer">
              {/* Avatar */}
              <div className="md:flex flex items-center gap-3 justify-center ">
                {/* Avatar Dropdown */}
                <div className="dropdown dropdown-end ">
                  <div tabIndex={0}>
                    <Avatar>
                      <Avatar.Image
                        alt={user?.name?.charAt(0)}
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

          {/* ── DESKTOP: Logged Out ── */}
          {!isPending && !user && (
            <Link href={"/login"} >
              <button
                size="sm"
                className="hidden md:flex cursor-pointer relative overflow-hidden px-6 py-2 rounded bg-[#15508b] text-white group"
              >
                {/* Hover Background */}
                <span className=" absolute inset-0 w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 z-0 "></span>

                {/* Text */}
                <span className="relative z-10">Login</span>
              </button>
            </Link>
          )}

          {/* ── MOBILE: Hamburger Dropdown ── */}
          <div className="md:hidden">
            <Dropdown>
              <Dropdown.Trigger>
                <Button
                  isIconOnly
                  size="sm"
                  variant="flat"
                  aria-label="Open navigation menu"
                  className=" bg-[#15508b] text-white cursor-pointer"
                >
                  <Menu />
                </Button>
              </Dropdown.Trigger>

              <Dropdown.Popover className="w-full mt-3">
                {!isPending && user && (
                  <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                      <Avatar size="sm">
                        <Avatar.Image
                          alt={user?.name?.charAt(0)}
                          src={user?.image || user?.name?.charAt(0)}
                          referrerPolicy="no-referrer"
                        />
                        <Avatar.Fallback delayMs={600}>
                          {user?.name?.charAt(0)}
                        </Avatar.Fallback>
                      </Avatar>
                      <div className="flex flex-col gap-0">
                        <p className="text-sm leading-5 font-medium">
                          {user?.name?.charAt(0)}
                        </p>
                        <p className="text-xs leading-none text-muted">
                          {user?.email || "User"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <Dropdown.Menu aria-label="Navigation menu">
                  {/* Nav Links */}
                  {navLinks.map((link) => (
                    <Dropdown.Item key={link.href} textValue={link.label}>
                      <Link
                        href={link.href}
                        className="block w-full font-medium text-foreground"
                      >
                        {link.label}
                      </Link>
                    </Dropdown.Item>
                  ))}

                  {/* My Profile — only when logged in */}
                  {user ? (
                    <Dropdown.Item key="user-actions" textValue="User Actions">
                      <div className="flex items-center justify-between gap-4 w-full">
                        <Link
                          href="/profile"
                          className="font-medium text-[#15508b] btn btn-outline w-[50%]"
                        >
                          My Profile
                        </Link>

                        <button
                          onClick={handleLogout}
                          className="font-medium w-[50%] text-white cursor-pointer btn-error btn"
                        >
                          Logout
                        </button>
                      </div>
                    </Dropdown.Item>
                  ) : (
                    <Dropdown.Item key="user-actions" textValue="user-actions">
                      <div className="flex items-center justify-between gap-4 w-full">
                        <Link
                          href="/login"
                          className="font-medium text-white btn btn-info w-[50%]"
                        >
                          Login
                        </Link>

                        <Link
                          href="/register"
                          className="font-medium text-[#15508b] btn btn-active w-[50%]"
                        >
                          Register
                        </Link>
                      </div>
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
