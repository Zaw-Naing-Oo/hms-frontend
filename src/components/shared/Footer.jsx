import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaViber
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-[auto_1fr_auto]">
          <div className="mx-auto max-w-[320px] text-center md:max-w-[270px] md:text-left lg:max-w-[320px]">
            <img
              className="mx-auto h-10 md:mx-0"
              src="/logo4.png"
              alt="Patientoo"
            />
            <p className="mt-5 text-[15px] font-medium text-gray-600">
             Trust Care represents a sophisticated hospital management system meticulously crafted to optimize healthcare operations and elevate patient care standards
            </p>
            <p className="mt-4 text-[13px] font-medium text-gray-600">
              &copy; {new Date().getFullYear()} TrustCare. All Rights Reserved
            </p>
          </div>
          <div className="flex justify-center">
            <div className="">
              <h2 className="mb-5 text-xl font-semibold text-gray-700">
                Quick Links
              </h2>
              <ul className="grid grid-cols-1 gap-x-10 gap-y-3 text-center md:text-left lg:grid-cols-2">
                <li>
                  <Link
                    className="font-medium text-teal-700 hover:underline"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="font-medium text-teal-700 hover:underline"
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li> */}
                <li>
                  <Link
                    className="font-medium text-teal-700 hover:underline"
                    to="/blogs"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-teal-700 hover:underline"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="font-medium text-teal-700 hover:underline"
                    to="/terms-of-use"
                  >
                    Terms of Use
                  </Link>
                </li> */}
                
              </ul>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-5 text-xl font-semibold text-gray-700">Social</h2>
            <div className="flex items-center justify-center gap-3">
              {/* <a
                href="https://www.facebook.com/patientoo"
                target="_blank"
                className="flex size-9 items-center justify-center rounded-sm bg-[#0866FF] p-1 text-lg text-white duration-300"
              >
                <FaFacebookF />
              </a> */}
              <a
                href="https://github.com/Zaw-Naing-Oo"
                target="_blank"
                className="flex size-9 items-center justify-center rounded-sm bg-[#1F2328] p-1 text-lg text-white duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/zaw-naing-oo-660150206"
                target="_blank"
                className="flex size-9 items-center justify-center rounded-sm bg-[#0A66C2] p-1 text-lg text-white duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/Zaw-Naing-Oo"
                target="_blank"
                className="flex size-9 items-center justify-center rounded-sm bg-[#86198f] p-1 text-lg text-white duration-300"
              >
                <FaViber />
              </a>
              {/* <a
                href="#"
                target="_blank"
                className="flex size-9 items-center justify-center rounded-sm bg-[#F7085F] p-1 text-lg text-white duration-300"
              >
                <FaInstagram />
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200/60 bg-slate-50/30">
        <div className="container">
          <p className="py-5 text-center text-sm text-gray-500">
            Developed by{" "}
            <Link
              className="font-medium text-teal-700 hover:underline"
              to="https://www.zawnaingoo.me/"
              target="_blank"
            >
              TRUSTCare Team
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
