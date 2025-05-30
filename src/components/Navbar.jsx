import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-600">RentMyRide</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/about" className="hover:text-green-600">About</Link>
        <Link to="/cars" className="hover:text-green-600">Cars</Link>
        <Link to="/enquiry" className="hover:text-green-600">Enquire</Link>
      </div>
    </nav>
  );
};

export default Navbar;
