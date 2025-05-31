import React from "react";
import {
  FaWhatsapp,
  FaCar,
  FaGasPump,
  FaCogs,
  FaUserFriends,
} from "react-icons/fa";
import { motion } from "framer-motion";

const CarCard = ({ car }) => {
  const whatsappLink = `https://wa.me/${car.phone}?text=${encodeURIComponent(
    `Hi, I'm interested in renting the ${car.name}`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl"
    >
      <div className="overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{car.name}</h2>
        <p className="text-green-600 font-semibold mb-2">{car.price}</p>

        <div className="flex flex-wrap text-sm text-gray-500 gap-3 mb-4">
          <span className="flex items-center gap-1">
            <FaUserFriends /> {car.seats} Seats
          </span>
          <span className="flex items-center gap-1">
            <FaGasPump /> {car.fuel}
          </span>
          <span className="flex items-center gap-1">
            <FaCogs /> {car.transmission}
          </span>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          <FaWhatsapp /> Enquire on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default CarCard;
