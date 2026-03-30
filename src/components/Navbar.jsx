
import  { useState, useEffect } from "react";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setScrolled(true);
        setShowTopBar(currentScrollY < lastScrollY);
      } else {
        setShowTopBar(true);
        setScrolled(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/#services" },
    { name: "Reviews", link: "/#reviews" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          showTopBar ? "max-h-20 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-[#1E293B] border-b border-[#3D4B5E]">
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6">
            <div className="flex items-center gap-6">
              <a
                href="tel:+447752364546"
                className="flex items-center gap-2 text-[#CBD5E1] hover:text-white transition-colors"
              >
                <Phone size={14} className="text-[#3B82F6]" />
                <span className="font-medium text-sm">+44 773 798 5510</span>
              </a>
              <div className="h-4 w-px bg-[#3D4B5E] hidden md:block" />
              <a
                href="mailto:tom@acgautocentre.co.uk"
                className="flex items-center gap-2 text-[#CBD5E1] hover:text-white transition-colors"
              >
                <Mail size={14} className="text-[#3B82F6]" />
                <span className="font-medium text-sm">example@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[#CBD5E1]">
              <Clock size={14} className="text-[#3B82F6]" />
              <span className="hidden sm:inline">
                Mon–Fri 08:30–17:30 / Sat 09:00–15:00 / Sun Closed
              </span>
              <span className="sm:hidden">Mon–Fri 08:30–17:30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`bg-[#1E293B] border-b border-[#3D4B5E] transition-all duration-300 ${
          scrolled ? "shadow-[0_4px_24px_rgba(59,130,246,0.12)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="transition-transform hover:scale-105">
              <img
                src="logo.png"
                alt="Logo"
                className="h-14 bg-[#0F172A] p-2 rounded-xl border border-[#3D4B5E]"
                loading="lazy"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-8 items-center">
              {navItems.map((item) =>
                item.link === "/" ? (
                  <Link
                    key={item.name}
                    to="/"
                    className="relative text-[#CBD5E1] hover:text-white font-medium transition-colors group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] group-hover:w-full transition-all duration-300 rounded-full" />
                  </Link>
                ) : (
                  <HashLink
                    key={item.name}
                    smooth
                    to={item.link}
                    className="relative text-[#CBD5E1] hover:text-white font-medium transition-colors group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] group-hover:w-full transition-all duration-300 rounded-full" />
                  </HashLink>
                )
              )}
            </nav>

            {/* Desktop CTA + Theme Toggle */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <HashLink
                smooth
                to="/#contact"
                className="bg-[#3B82F6] hover:bg-blue-400 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] text-sm"
              >
                Contact Now
              </HashLink>
            </div>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#CBD5E1] hover:bg-[#3D4B5E] transition-colors"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden border-t border-[#3D4B5E] overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-5 py-4 space-y-1 bg-[#1E293B]">
            {navItems.map((item) =>
              item.link === "/" ? (
                <Link
                  key={item.name}
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block text-[#CBD5E1] hover:text-white hover:bg-[#3D4B5E] py-2.5 px-3 rounded-lg font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <HashLink
                  key={item.name}
                  smooth
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-[#CBD5E1] hover:text-white hover:bg-[#3D4B5E] py-2.5 px-3 rounded-lg font-medium transition-colors"
                >
                  {item.name}
                </HashLink>
              )
            )}
            <div className="pt-2">
              <HashLink
                smooth
                to="/#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#3B82F6] hover:bg-blue-400 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                Contact Now
              </HashLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;