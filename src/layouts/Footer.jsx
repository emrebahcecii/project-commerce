import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-xl font-bold">Bandage</h2>

          <div className="flex space-x-4 mt-4 md:mt-0 text-blue-500">
            <a href="#">
              <Facebook size={20} />
            </a>
            <a href="#">
              <Instagram size={20} />
            </a>
            <a href="#">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-6 text-sm text-gray-600">
          <div>
            <h4 className="font-semibold mb-3">Company Info</h4>
            <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Features</h4>
            <ul className="space-y-2">
              <li><a href="#">Business Marketing</a></li>
              <li><a href="#">User Analytic</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Unlimited Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#">IOS & Android</a></li>
              <li><a href="#">Watch a Demo</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Get In Touch</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md text-sm hover:bg-blue-600">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-2">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-8">
              <p className="text-sm text-gray-500">
                  Made With Love By Finland All Right Reserved
              </p>
          </div>
      </div>
    </footer>
  );
}
