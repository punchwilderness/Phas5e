import Logo from "../ui/Logo";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center w-full p-4 md:p-8 top-0 relative">
      <div>
        <Logo />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row justify-between text-lg">
        <div className="mr-11">Our vision</div>
        <div className="mr-11">Our Team</div>
        <div className="mr-11">Our projects</div>
        <div className="mr-11">Contact us</div>
        <div>FR/EN</div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <div>Our vision</div>
          <div>Our Team</div>
          <div>Our projects</div>
          <div>Contact us</div>
          <div>FR/EN</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
