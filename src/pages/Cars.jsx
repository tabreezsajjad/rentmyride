import React from "react";
import cars from "../data/cars";
import CarCard from "../components/CarCard";

const Cars = () => {
  return (
    <section className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-green-600 mb-4">Available Cars</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default Cars;
