'use client';
import { useState } from "react";

import CarouselComponent from "./components/Carousel";

import carsData from "./server/cars.json"
import CarsGridComponent from "./components/CarsGrid";
import FilterComponent from "./components/Filter";

export default function Home() {
  const [filteredCars, setFilteredCars] = useState(carsData.cars)

  return (
    <main className="w-full h-auto bg-background pb-4">
      <div className="max-w-7xl mx-0 sm:mx-auto">
        <div className="flex flex-col w-full gap-2 bg-background">

          {/** Carousel with material tailwind */}
          <div className="flex mt-2 px-1 sm:px-0">
            <CarouselComponent />
          </div>

          {/** FILTER */}
          <FilterComponent handleFilter={setFilteredCars} />

          {/** CARS */}
          <CarsGridComponent itemsLimit={7} cars={filteredCars} />
        </div>
      </div>
    </main>
  )
}
