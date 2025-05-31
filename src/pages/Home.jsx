import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4 sm:px-6"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-black bg-opacity-70 p-6 sm:p-10 rounded-xl text-center text-white max-w-md sm:max-w-xl"
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-4 leading-snug"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Rent a Car. <br className="block sm:hidden" /> Ride with Confidence.
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Choose from a fleet of well-maintained, premium vehicles for your next journey.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link to="/cars">
            <button className="bg-green-500 px-5 py-2 text-sm sm:text-base text-white rounded hover:bg-green-600 transition">
              Browse Cars
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
