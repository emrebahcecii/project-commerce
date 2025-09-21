import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [desktopOpen, setDesktopOpen] = useState(false); // desktop için
  const [mobileOpen, setMobileOpen] = useState(false); // mobil menü için

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
        <h1 className="text-xl md:text-2xl font-bold text-slate-900">Bandage</h1>

        <nav className="hidden md:flex gap-6 text-slate-700 relative">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <div
            className="relative"
            onMouseEnter={() => setDesktopOpen(true)}
            onMouseLeave={() => setDesktopOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600">
              Shop <ChevronDown size={16} />
            </button>
            {desktopOpen && (
              <div className="absolute top-full left-0 mt-0 w-96 bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 gap-6 z-50">
                <div>
                  <h4 className="font-semibold mb-2">Kadın</h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li><Link to="/shop">Bags</Link></li>
                    <li><Link to="/shop">Belts</Link></li>
                    <li><Link to="/shop">Cosmetics</Link></li>
                    <li><Link to="/shop">Hats</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Erkek</h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li><Link to="/shop">Bags</Link></li>
                    <li><Link to="/shop">Belts</Link></li>
                    <li><Link to="/shop">Cosmetics</Link></li>
                    <li><Link to="/shop">Hats</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/about" className="hover:text-blue-600">Blog</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/about" className="hover:text-blue-600">Team</Link>
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <Link to="/login" className="flex items-center gap-1 text-blue-600 hover:underline">
            <User size={18} /> Login / Register
          </Link>
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

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-slate-700">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {mobileOpen && (
           <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 p-6 shadow-md md:hidden z-50">
             <Link to="/" className="w-full text-lg font-medium text-center hover:text-blue-600">Home</Link>
             <Link to="/shop" className="w-full text-lg text-center hover:text-blue-600">Shop</Link>
             <Link to="/about" className="w-full text-lg text-center hover:text-blue-600">About</Link>
             <Link to="/about" className="w-full text-lg text-center hover:text-blue-600">Blog</Link>
             <Link to="/contact" className="w-full text-lg text-center hover:text-blue-600">Contact</Link>
             <Link to="/contact" className="w-full text-lg text-center hover:text-blue-600">Team</Link>

             <div className="flex flex-col gap-4 mt-4 w-full items-center">
               <Link to="/login" className="flex items-center gap-2 text-blue-600 text-base">
                 <User size={18} /> Login / Register
               </Link>
               <Search size={22} className="text-blue-600 cursor-pointer" />
               <ShoppingCart size={22} className="text-blue-600 cursor-pointer" />
               <Heart size={22} className="text-blue-600 cursor-pointer" />
             </div>
           </div>
         )}

      </div>
    </header>
  );
}
