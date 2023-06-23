import Image from "next/image";
import Link from "next/link";
import { CaretRight, WhatsappLogo } from "phosphor-react";

import { formatMileage, formatPrice } from '../utils/formatValue'

import carType from "../utils/carType";

interface Props {
  cars: carType[],
  itemsLimit?: number
}

export default function CarsGridComponent({ cars, itemsLimit }: Props) {
  let countItems = 0

  function handleSendWhatsApp() {
    console.log(`https://api.whatsapp.com/send?phone=${9999999999}`)
  }

  function renderCar(car: carType) {
    return (
      <div
        key={car.id}
        className="flex flex-col gap-[2px] w-full sm:max-w-xs justify-between rounded-md bg-background shadow-md hover:brightness-110 hover:shadow-lg focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none">
        <Link
          className="hover:cursor-pointer rounded-md focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none"
          href={`/stock?id=${car.id}`}
        >
          <Image src={car.imgUrl[0]} height={208} width={320} alt={car.model} className="rounded-md w-full h-auto" />
          <div className="flex flex-col p-2 gap-1">
            <div className="flex -mt-9 h-6">
              <Image className="flex h-full w-auto" alt={car.brand} width={50} height={50} src={`/brands/${car.brand.toLowerCase()}.png`} />
            </div>
            <strong className="text-secundary mt-1">{car.model}</strong>
            <span className="font-normal text-sm text-gray-800">{car.yearOfManufacture}/{car.modelYear} - {formatMileage(car.mileage)} km</span>
            <strong className="text-sm text-secundary">{formatPrice(car.price)}</strong>
          </div>
        </Link>
        <div className="flex w-full pb-2 px-2">
          <button
            onClick={() => handleSendWhatsApp}
            className="flex w-full text-background bg-secundary gap-2 px-2 py-1 items-center justify-center rounded-md shadow-sm hover:bg-primary focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none"
          >
            Entrar em contato via <WhatsappLogo size={22} className="text-background" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full pt-12 px-2 pb-2 gap-8 bg-background rounded-lg">
      <div className="flex w-full items-center justify-start">
        <p className="font-semibold text-2xl text-secundary">Confira nosso estoque</p>
      </div>
      {
        cars.length ? (
          <div className="w-full relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-2 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:grid-cols-1 max-sm:max-w-xs mx-auto">
            {
              itemsLimit ? (
                cars.map(car => {
                  if (countItems < itemsLimit) {
                    countItems++
                    return renderCar(car)
                  } else if (itemsLimit === countItems) {
                    countItems++
                    return (
                      <div key={countItems * countItems}
                        className="flex w-full sm:max-w-xs rounded-md bg-[#f0f0f0] shadow-md hover:brightness-110 hover:shadow-lg focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none">
                        <Link
                          className="flex flex-col w-full hover:cursor-pointer items-center rounded-md focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none"
                          href={`/stock`}
                        >
                          <Image src="/stock/stock.png" height={208} width={320} alt="Estoque" className="rounded-md w-full h-auto" />

                          <div className="flex w-full h-full items-center justify-center pb-4 px-4">
                            <strong className="flex gap-2 text-center underline items-center text-gray-800 text-xl">Estoque completo <CaretRight size={20} weight="bold" /> </strong>
                          </div>
                        </Link>
                      </div>
                    )
                  } else {
                    countItems++
                    return false
                  }
                })
              ) : ( cars.map(car => renderCar(car)) )
            }
          </div>
        ) : (
          <div className="flex flex-col w-full items-center justify-center">
            <strong className="font-semibold text-2xl text-secundary">Sentimos muito</strong>
            <p className="text-secundary">Nenhum carro com essas configurações foi encontrado.</p>
          </div>
        )
      }
    </div>
  )
}