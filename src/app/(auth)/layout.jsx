import Navbar from "@/components/layout/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <>
     
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;
