"use client"

import Image from "next/image";
import { ArrowRight, Check } from "phosphor-react";
import { useState } from "react";
import CarouselComponent from "../components/Carousel";
import CarsGridComponent from "../components/CarsGrid";

import { formatMileage, formatPrice } from '../utils/formatValue'

import carsData from "../server/cars.json"
import FilterComponent from "../components/Filter";

import carType from "../utils/carType";

export default function Estoque(props: any) {
  const [carsGrid, setCarsGrid] = useState<carType[]>(carsData.cars)
  const { id } = props.searchParams

  function renderCarById(id: string) {
    const car = carsData.cars.find(item => (item.id === id))

    if (car?.id) {
      return (
        <div className="w-full p-4 relative flex flex-col-reverse xl:flex-row gap-4 xl:gap-2">
          <div className="flex flex-col w-full h-full self-center max-w-[800px] gap-2 sm:gap-0">
            <div className="flex w-full gap-4 items-center">
              <div className="flex items-center justify-center h-14 w-14">
                <Image className="w-auto h-auto" src={`/brands/${car.brand.toLowerCase()}.png`} alt={car.brand.toLowerCase()} width={150} height={60} />
              </div>
              <strong>{car.model}</strong>
            </div>
            <div>
              <p>{car.yearOfManufacture}/{car.modelYear}</p>
              <p>{formatMileage(car.mileage)} km</p>
              <strong>{formatPrice(car.price)}</strong>
            </div>
            <div className="mt-2 text-sm">
              <strong className="flex items-center gap-2">
                <Check size={18} weight="bold" className="bg-green-500 text-white rounded px-[2px]" />
                DIREÇÃO {car.steering}
              </strong>
              <strong className="flex items-center gap-2">
                <Check size={18} weight="bold" className="bg-green-500 text-white rounded px-[2px]" />
                CÂMBIO {car.transmission}
              </strong>
              <strong className="flex items-center gap-2">
                <Check size={18} weight="bold" className="bg-green-500 text-white rounded px-[2px]" />
                {car.fuel}
              </strong>
              <div className="flex flex-col mt-4">
                <div className="flex pb-1">
                  <p className="flex items-center pl-2 rounded-l text-xs text-background bg-secundary gap-1">
                    ACESSÓRIOS <ArrowRight size={18} weight="bold" className="text-background rounded px-[2px]" />
                  </p>

                  <div className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[14px] border-l-secundary" />
                </div>
                {
                  car.accessories.map(item => (
                    <p key={item} className="flex items-center gap-2 text-sm">
                      <ArrowRight size={18} weight="bold" className="bg-secundary text-white rounded px-[2px]" />
                      {item}
                    </p>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="flex self-center h-full w-full max-h-[600px] max-w-[800px]">
            <CarouselComponent images={car.imgUrl} />
          </div>
          
        </div>
      )
    } else {
      return (
        <div className="w-full relative grid grid-cols-2 gap-2">
          <h1>Aconteceu um erro inesperado!</h1>
        </div>
      )
    }
  }

  return (
    <main className="w-full h-auto bg-background pb-4">
      {/** CORPO DA PÁGINA */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col w-full gap-2 bg-background">
          {/** Selected Car */}
          { id ? renderCarById(id) : false }

          {/** FILTER */}
          <FilterComponent handleFilter={setCarsGrid} />

          {/** CARS */}
          <CarsGridComponent cars={carsGrid} />
        </div>
      </div>
    </main>
  )
}