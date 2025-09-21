import back from "../assets/images/back.png";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { IoArrowDownOutline } from "react-icons/io5";

export default function ContactPage() {
  return (
    <section className="w-full max-w-[2400px] mx-auto px-6 md:px-12 py-16 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
        <div className="flex-[0.45] flex flex-col justify-center items-center md:items-start space-y-3">
          <p className="uppercase text-gray-500 text-base font-medium">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Get in touch <br /> today!
          </h2>
          <p className="text-gray-600 text-lg">
            We know how large objects will act, but things on a small scale
          </p>

          <p className="font-semibold text-lg">
            Phone : <span className="font-normal">+451 215 215</span>
          </p>
          <p className="font-semibold text-lg">
            Fax : <span className="font-normal">+451 215 215</span>
          </p>

          <div className="flex gap-5 justify-center md:justify-start pt-2">
            <FaTwitter className="w-7 h-7 text-gray-700 hover:text-blue-500 cursor-pointer" />
            <FaFacebookF className="w-7 h-7 text-gray-700 hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="w-7 h-7 text-gray-700 hover:text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="w-7 h-7 text-gray-700 hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        <div className="flex-[0.45] flex justify-center items-center">
          <img
            src={back}
            alt="Contact Illustration"
            className="w-[160%] h-auto max-w-none"
          />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center py-16 px-8 shadow-sm rounded-lg">
          <FiPhone className="text-blue-500 text-5xl mb-4" />
          <p className="text-gray-700">georgia.young@example.com</p>
          <p className="text-gray-700 mb-4">georgia.young@ple.com</p>
          <h3 className="font-semibold text-lg mb-2">Get Support</h3>
          <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition">
            Submit Request
          </button>
        </div>

        <div className="flex flex-col items-center py-16 px-8 bg-[#0A2540] text-white rounded-lg shadow-sm">
          <HiOutlineLocationMarker className="text-blue-400 text-5xl mb-4" />
          <p>georgia.young@example.com</p>
          <p className="mb-4">georgia.young@ple.com</p>
          <h3 className="font-semibold text-lg mb-2">Get Support</h3>
          <button className="px-6 py-2 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-900 transition">
            Submit Request
          </button>
        </div>

        <div className="flex flex-col items-center py-16 px-8 shadow-sm rounded-lg">
          <MdOutlineEmail className="text-blue-500 text-5xl mb-4" />
          <p className="text-gray-700">georgia.young@example.com</p>
          <p className="text-gray-700 mb-4">georgia.young@ple.com</p>
          <h3 className="font-semibold text-lg mb-2">Get Support</h3>
          <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition">
            Submit Request
          </button>
        </div>
      </div>

      <section className="w-full flex flex-col items-center justify-center text-center mt-20 mb-10 relative">
        <IoArrowDownOutline className="text-blue-500 w-12 h-12 mb-2" />

        <p className="text-sm font-bold text-gray-800 mb-1 uppercase">
          WE Can't WAIT TO MEET YOU
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Let’s Talk
        </h2>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md transition">
          Try it free now
        </button>
      </section>
    </section>
  );
}
