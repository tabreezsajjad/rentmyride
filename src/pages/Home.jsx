import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/hero.png')" }}>
      <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center text-white max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Rent a Car. Ride with Confidence.</h1>
        <p className="text-lg mb-6">
          Choose from a fleet of well-maintained, premium vehicles for your next journey.
        </p>
        <Link to="/cars">
          <button className="bg-green-500 px-6 py-2 text-white rounded hover:bg-green-600 transition">
            Browse Cars
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
