import { useState } from "react";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full text-sm">
      <div className="w-full bg-slate-900 text-white hidden md:flex items-center justify-between relative p-2 md:p-4 text-xs md:text-sm">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone size={16} /> (225) 555-0118
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} /> michelle.rivera@example.com
          </span>
        </div>

        <p className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          Follow Us and get a chance to win 80% off
        </p>

        <div className="flex items-center gap-3 ml-auto">
          <span className="hidden md:inline mr-2">Follow Us :</span>
          <Instagram size={16} className="cursor-pointer hover:text-pink-400" />
          <Facebook size={16} className="cursor-pointer hover:text-blue-400" />
          <Youtube size={16} className="cursor-pointer hover:text-red-400" />
          <Twitter size={16} className="cursor-pointer hover:text-sky-400" />
        </div>
      </div>

      <div className="w-full bg-white shadow flex items-center justify-between px-4 py-3 md:px-6 md:py-4 relative">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-slate-900">
          Bandage
        </h1>

        <nav className="hidden md:flex gap-6 text-slate-700 relative">
          <a href="/" className="hover:text-blue-600">Home</a>
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600">
              Shop <ChevronDown size={16} />
            </button>
            {open && (
              <div className="absolute top-full left-0 mt-0 w-96 bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 gap-6 z-50">
                <div>
                  <h4 className="font-semibold mb-2">Kadın</h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li><a href="#">Bags</a></li>
                    <li><a href="#">Belts</a></li>
                    <li><a href="#">Cosmetics</a></li>
                    <li><a href="#">Hats</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Erkek</h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li><a href="#">Bags</a></li>
                    <li><a href="#">Belts</a></li>
                    <li><a href="#">Cosmetics</a></li>
                    <li><a href="#">Hats</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href="/login"
            className="flex items-center gap-1 text-blue-600 hover:underline"
          >
            <User size={18} /> Login / Register
          </a>
          <Search size={18} className="cursor-pointer hover:text-blue-600" />
          <div className="flex items-center gap-1 cursor-pointer">
            <ShoppingCart size={18} />
            <span>1</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <Heart size={18} />
            <span>1</span>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-700"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {open && (
          <div className="absolute top-full left-0 w-full bg-white flex flex-col items-start gap-4 p-6 shadow-md md:hidden z-50">
            <a href="/" className="w-full text-lg hover:text-blue-600">Home</a>
            <a href="/shop" className="w-full text-lg hover:text-blue-600">Shop</a>
            <a href="/about" className="w-full text-lg hover:text-blue-600">About</a>
            <a href="/contact" className="w-full text-lg hover:text-blue-600">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}
