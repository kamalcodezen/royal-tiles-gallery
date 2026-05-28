import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
