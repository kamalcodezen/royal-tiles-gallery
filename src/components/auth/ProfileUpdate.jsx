"use client";
import GlobalLoading from "@/app/(main)/loading";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Input } from "@heroui/react";

import { FaCamera, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const ProfileUpdate = () => {
  const { data, isPending } = authClient.useSession();
  //   console.log(data,"session")
  const user = data?.user;

  const submit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    const result = await authClient.updateUser({
      name,
      image,
    });

    if (result?.data) {
      toast.success(`Profile Updated Successfully`);
    }

    if (result?.error) {
      toast.error("Something went wrong");
      //   toast.error(result.error.message);
    }
  };
  
  if (isPending) {
    return <GlobalLoading />;
  }

  return (
    <section className="min-h-screen bg-[#f8fafc] py-16">
      <div className="w-11/12 lg:w-8/12 mx-auto">
        <Card
          className="
            rounded-[2rem]
            shadow-2xl
            overflow-hidden
            border
            border-gray-100
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-3
            "
          >
            {/* Left Side */}
            <div
              className="
                bg-gradient-to-br
                from-[#15508b]
                via-[#1c6ab7]
                to-orange-500
                p-10
                flex
                flex-col
                items-center
                justify-center
                text-white
                relative
              "
            >
              {/* Avatar */}
              <div className="relative">
                <Avatar
                  className="
                    w-40
                    h-40
                    text-large
                    ring-4
                    ring-white/40
                  "
                >
                  <Avatar.Image
                    className="absolute"
                    alt={user?.name?.charAt(0)}
                    src={user?.image || user?.name?.charAt(0)}
                    referrerPolicy="no-referrer"
                  />
                </Avatar>
                {/* Upload Icon */}
                <button
                  className="
                    absolute
                    bottom-2
                    right-2
                    bg-white
                    text-[#15508b]
                    p-3
                    rounded-full
                    shadow-lg
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <FaCamera />
                </button>
              </div>

              {/* User Info */}
              <div className="mt-8 text-center">
                <h2 className="text-3xl font-bold">{user?.name}</h2>

                <p className="text-white/80 mt-2">Premium Interior Designer</p>
              </div>

              {/* Small Stats */}
              <div
                className="
                  mt-10
                  w-full
                  bg-white/10
                  backdrop-blur-xl
                  rounded-2xl
                  p-5
                  space-y-4
                "
              >
                <div className="flex items-center gap-3">
                  <FaEnvelope />

                  <span>{user?.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhone />

                  <span>+91 9-05432000</span>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-2 p-8 lg:p-12">
              {/* Heading */}
              <div className="mb-10">
                <h1
                  className="
                    text-4xl
                    font-bold
                    text-gray-800
                  "
                >
                  Update Profile
                </h1>

                <p className="text-gray-500 mt-3">
                  Keep your personal details updated for a better experience.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={submit} className="space-y-7">
                {/* Name */}
                <Input
                  name="name"
                  label="Full Name"
                  placeholder="Enter your full name"
                  size="lg"
                  startContent={<FaUser className="text-gray-400" />}
                  variant="bordered"
                  radius="lg"
                  className="mr-4"
                />

                {/* Email */}
                <Input
                  name="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  type="email"
                  size="lg"
                  startContent={<FaEnvelope className="text-gray-400" />}
                  variant="bordered"
                  radius="lg"
                  readOnly
                  className="mr-4"
                />

                {/* Phone */}
                <Input
                  label="Phone Number"
                  placeholder="Enter your number"
                  type="number"
                  size="lg"
                  startContent={<FaPhone className="text-gray-400" />}
                  variant="bordered"
                  radius="lg"
                  readOnly
                  className="mr-4"
                />
                <Input
                  name="image"
                  label="Image Url"
                  placeholder="image url"
                  type="url"
                  size="lg"
                  startContent={<FaUser className="text-gray-400" />}
                  variant="bordered"
                  radius="lg"
                  className="mr-4"
                />

                {/* Buttons */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-4
                    pt-4
                  "
                >
                  {/* Update Button */}
                  <Button
                    type="submit"
                    className="
                      relative
                      overflow-hidden
                      px-8
                      py-6
                      rounded-full
                      bg-[#15508b]
                      text-white
                      font-semibold
                      group
                    "
                  >
                    <span
                      className="
                        absolute
                        inset-0
                        w-0
                        group-hover:w-full
                        transition-all
                        duration-500
                        bg-gradient-to-r
                        from-orange-500
                        to-[#15508b]
                      "
                    ></span>

                    <span className="relative z-10">Save Changes</span>
                  </Button>

                  {/* Cancel */}
                  <Button
                    variant="bordered"
                    className="
                      rounded-full
                      px-8
                      py-6
                      font-medium
                      hover:border
                    "
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProfileUpdate;
