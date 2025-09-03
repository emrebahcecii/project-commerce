import { Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

function Header() {
  return (
    <header className="w-full bg-slate-900 text-white text-sm">
      <div className="w-full flex items-center justify-between relative p-4">

        {/* Sol kısım: Telefon + Mail */}
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone size={16} /> (225) 555-0118
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} /> michelle.rivera@example.com
          </span>
        </div>

        {/* Orta kısım: Mesaj */}
        <p className="absolute left-1/2 -translate-x-1/2">
          Follow Us and get a chance to win 80% off
        </p>

        {/* Sağ kısım: Sosyal ikonlar */}
        <div className="flex items-center gap-3">
          <span className="mr-2">Follow Us :</span>
          <Instagram size={16} className="cursor-pointer hover:text-pink-400" />
          <Facebook size={16} className="cursor-pointer hover:text-blue-400" />
          <Youtube size={16} className="cursor-pointer hover:text-red-400" />
          <Twitter size={16} className="cursor-pointer hover:text-sky-400" />
        </div>
      </div>
    </header>
  );
}

export default Header;
