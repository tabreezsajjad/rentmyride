import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-600">RentMyRide</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>
          <Link to="/cars" className="hover:text-green-600">Cars</Link>
          <Link to="/enquiry" className="hover:text-green-600">Enquire</Link>
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start space-y-3 px-6 pt-4 pb-2">
          <Link to="/" className="hover:text-green-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-green-600" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/cars" className="hover:text-green-600" onClick={() => setMenuOpen(false)}>Cars</Link>
          <Link to="/enquiry" className="hover:text-green-600" onClick={() => setMenuOpen(false)}>Enquire</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
