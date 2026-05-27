import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
  
      <footer className=" bg-[#15508b] text-white mt-20">
        <div className=" w-11/12 mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-bold italic">Royal Tiles</h2>

            <p className="mt-4 text-gray-200">
              Elegant and premium tiles for modern interiors.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>

            <p>Email: royaltiles@gmail.com</p>
            <p className="mt-2">Phone: +880123456789</p>

            <p className="mt-2">Location: Dhaka, Bangladesh</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4 text-2xl">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-orange-400 transition-all duration-300"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-orange-400 transition-all duration-300"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-orange-400 transition-all duration-300"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 py-4 text-center text-sm">
          © 2026 Royal Tiles. All Rights Reserved.
        </div>
      </footer>
   
  );
};

export default Footer;
