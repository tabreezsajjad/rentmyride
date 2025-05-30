import React, { useState } from "react";
import { FaUser, FaPhone, FaCarSide, FaCalendarAlt, FaWhatsapp } from "react-icons/fa";
import cars from "../data/cars";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: cars[0]?.name || "",
    pickup: "",
    drop: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `Hi, I would like to enquire about renting a ${formData.car}.
Name: ${formData.name}
Phone: ${formData.phone}
Pickup Date: ${formData.pickup}
Return Date: ${formData.drop}`;

    const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full animate-fade-in">
        <h1 className="text-3xl font-extrabold text-green-600 mb-2">Enquire to Rent a Car</h1>
        <p className="text-gray-600 mb-6">We’ll respond instantly via WhatsApp 📱</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-3 border p-3 rounded">
            <FaUser className="text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="flex-1 outline-none"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center gap-3 border p-3 rounded">
            <FaPhone className="text-gray-400" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="flex-1 outline-none"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center gap-3 border p-3 rounded">
            <FaCarSide className="text-gray-400" />
            <select
              name="car"
              className="flex-1 outline-none bg-transparent"
              value={formData.car}
              onChange={handleChange}
            >
              {cars.map((car) => (
                <option key={car.id} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 border p-3 rounded">
              <FaCalendarAlt className="text-gray-400" />
              <input
                type="date"
                name="pickup"
                required
                className="flex-1 outline-none"
                value={formData.pickup}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-3 border p-3 rounded">
              <FaCalendarAlt className="text-gray-400" />
              <input
                type="date"
                name="drop"
                required
                className="flex-1 outline-none"
                value={formData.drop}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-green-500 text-white py-3 rounded text-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="text-xl" /> Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Enquiry;
