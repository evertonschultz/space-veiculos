import { useEffect, useState } from "react";
import SelectComponent from "./Select";
import SliderComponent from "./Slider";

import carsData from '../server/cars.json'

import carType from "../utils/carType";
import * as Dialog from '@radix-ui/react-dialog';
import { Funnel, X } from "phosphor-react";
import CheckboxComponent from "./Checkbox";

interface Props {
  handleFilter: (cars: carType[]) => void,
}

export default function FilterComponent({ handleFilter }: Props) {
  const [brandSelected, setBrandSelect] = useState<string>()
  const [modelSelected, setModelSelect] = useState<string>()
  const [intervalYear, setIntervalYear] = useState<number[]>([])
  const [intervalPrice, setIntervalPrice] = useState<number[]>([])
  const [intervalMileage, setIntervalMileage] = useState<number[]>([])

  const [accessoriesSelected, setAccessoriesSelect] = useState<string[]>([])
  const [steeringsSelected, setSteeringsSelect] = useState<string[]>([])
  const [transmissionsSelected, setTransmissionsSelect] = useState<string[]>([])
  const [bodysSelected, setBodysSelect] = useState<string[]>([])
  const [fuelsSelected, setFuelsSelect] = useState<string[]>([])

  const filteringElements = ['year', 'price', 'mileage']

  {/** BRANDS CONTROL */ }
  const [brands, setBrands] = useState<string[]>([])

  {/** MODELS CONTROL */ }
  const [models, setModels] = useState<string[]>([])

  {/** ACCESSORIES CONTROL */ }
  const [accessories, setAccessories] = useState<string[]>([])

  {/** STEERING CONTROL */ }
  const [steerings, setSteerings] = useState<string[]>([])

  {/** TRANSMISSION CONTROL */ }
  const [transmissions, setTransmissions] = useState<string[]>([])

  {/** BODY CONTROL */ }
  const [bodys, setBodys] = useState<string[]>([])

  {/** MODELS CONTROL */ }
  const [fuels, setFuels] = useState<string[]>([])

  function loadControlers() {
    const brandsMaped = carsData.cars.map(car => car.brand)
    const brandsFiltered = brandsMaped.filter((model, index) => brandsMaped.indexOf(model) === index)
    setBrands(brandsFiltered)

    const modelsMaped = carsData.cars.map(car => car.model)
    const modelsFiltered = modelsMaped.filter((model, index) => modelsMaped.indexOf(model) === index)
    setModels(modelsFiltered)

    let accessoriesMaped: string[] = []

    carsData.cars.map(car => car.accessories.map(item => {
      accessoriesMaped = [...accessoriesMaped, item]
    }))
    const accessoriesFiltered = accessoriesMaped.filter((item, index) => accessoriesMaped.indexOf(item) === index)
    setAccessories(accessoriesFiltered)

    const steeringsMaped = carsData.cars.map(car => car.steering)
    const steeringsFiltered = steeringsMaped.filter((steering, index) => steeringsMaped.indexOf(steering) === index)
    setSteerings(steeringsFiltered)

    const transmissionsMaped = carsData.cars.map(car => car.transmission)
    const transmissionsFiltered = transmissionsMaped.filter((transmission, index) => transmissionsMaped.indexOf(transmission) === index)
    setTransmissions(transmissionsFiltered)

    const bodysMaped = carsData.cars.map(car => car.body)
    const bodysFiltered = bodysMaped.filter((body, index) => bodysMaped.indexOf(body) === index)
    setBodys(bodysFiltered)

    const fuelsMaped = carsData.cars.map(car => car.fuel)
    const fuelsFiltered = fuelsMaped.filter((fuel, index) => fuelsMaped.indexOf(fuel) === index)
    setFuels(fuelsFiltered)
  }

  function handleSelectBrand(value: string) {
    try {
      if (value) {
        setBrandSelect(value)
        setModelSelect(undefined)

        const carsFilteredByBrand = carsData.cars.filter(car => car.brand === value)

        const modelsFiltered = carsFilteredByBrand.map(car => car.model)

        const carsFiltered = modelsFiltered.filter((model, index) => modelsFiltered.indexOf(model) === index)

        setModels(carsFiltered)
      }
    } catch (error) {

    }
  }

  function handleCarsFilter() {
    let carsFiltered = carsData.cars
    if (brandSelected) {
      carsFiltered = carsFiltered.filter((car) => car.brand === brandSelected)
    }
    if (modelSelected) {
      carsFiltered = carsFiltered.filter((car) => car.model === modelSelected)
    }
    if (intervalYear.length > 1) {
      carsFiltered = carsFiltered.filter((car) => car.modelYear >= intervalYear[0] && car.modelYear <= intervalYear[1])
    }
    if (intervalPrice.length > 1) {
      carsFiltered = carsFiltered.filter((car) => car.price >= intervalPrice[0] && car.price <= intervalPrice[1])
    }
    if (intervalMileage.length > 1) {
      carsFiltered = carsFiltered.filter((car) => car.mileage >= intervalMileage[0] && car.mileage <= intervalMileage[1])
    }
    if (accessoriesSelected.length) {
      let carsAUX: carType[] = []
      carsFiltered.map((car) => {
        let aux = 0
        car.accessories.map(item => {
          if (accessoriesSelected.includes(item))
            aux = aux + 1
        })
        if (accessoriesSelected.length === aux)
          carsAUX = [...carsAUX, car]
      })
      carsFiltered = carsAUX
    }
    if (steeringsSelected.length) {
      carsFiltered = carsFiltered.filter((car) => {
        if (steeringsSelected.includes(car.steering))
          return car
      })
    }
    if (transmissionsSelected.length) {
      carsFiltered = carsFiltered.filter((car) => {
        if (transmissionsSelected.includes(car.transmission))
          return car
      })
    }
    if (bodysSelected.length) {
      carsFiltered = carsFiltered.filter((car) => {
        if (bodysSelected.includes(car.body))
          return car
      })
    }
    if (fuelsSelected.length) {
      carsFiltered = carsFiltered.filter((car) => {
        if (fuelsSelected.includes(car.fuel))
          return car
      })
    }

    handleFilter(carsFiltered)
  }

  function handleCarsFilterReset() {
    setBrandSelect(undefined)
    setModelSelect(undefined)
    setIntervalYear([])
    setIntervalPrice([])
    setIntervalMileage([])
    setAccessoriesSelect([])
    setSteeringsSelect([])
    setTransmissionsSelect([])
    setBodysSelect([])
    setFuelsSelect([])

    handleFilter(carsData.cars)

    loadControlers()
  }

  function handleAccessoriesSelected(value: boolean | string, item: string) {
    if (value === true) {
      setAccessoriesSelect((state) => [...state, item])
    } else {
      if (accessoriesSelected.includes(item)) {
        const accessoriesSelectedFilered = accessoriesSelected.filter(accessorie => accessorie !== item)
        setAccessoriesSelect(accessoriesSelectedFilered)
      }
    }
  }

  function handleSteeringsSelected(value: boolean | string, item: string) {
    if (value !== true) {
      const steeringsSelectedFilered = steeringsSelected.filter(steering => steering !== item)
      setSteeringsSelect(steeringsSelectedFilered)
    } else {
      setSteeringsSelect([...steeringsSelected, item])
    }
  }

  function handleTransmissionsSelected(value: boolean | string, item: string) {
    if (value !== true) {
      const transmissionsSelectedFilered = transmissionsSelected.filter(transmission => transmission !== item)
      setTransmissionsSelect(transmissionsSelectedFilered)
    } else {
      setTransmissionsSelect([...transmissionsSelected, item])
    }
  }

  function handleBodysSelected(value: boolean | string, item: string) {
    if (value !== true) {
      const bodysSelectedFilered = bodysSelected.filter(body => body !== item)
      setBodysSelect(bodysSelectedFilered)
    } else {
      setBodysSelect([...bodysSelected, item])
    }
  }

  function handleFuelsSelected(value: boolean | string, item: string) {
    if (value !== true) {
      const fuelsSelectedFilered = fuelsSelected.filter(fuel => fuel !== item)
      setFuelsSelect(fuelsSelectedFilered)
    } else {
      setFuelsSelect([...fuelsSelected, item])
    }
  }

  useEffect(() => {
    loadControlers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col px-0 sm:px-2 pt-4 w-full">
      <div className="flex flex-col w-full px-2 sm:px-0 pt-4 pb-4">
        <p className="font-medium text-4xl text-secundary px-2 sm:px-8">
          Faça uma busca personalizada
        </p>
        <p className="font-medium text-xl sm:text-2xl text-secundary px-2 sm:px-8">
          encontre o veículo que mais faça sentido para você.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-x-16 gap-y-8 px-4 sm:px-12">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="text-background shadow-secundary h-12 hover:bg-primary inline-flex items-center justify-between rounded bg-secundary px-4 font-semibold leading-none shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none">
              Opcionais <Funnel weight="bold" size={24} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-secundary/50 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="overflow-y-auto h-[80%] data-[state=open]:animate-contentShow fixed z-50 top-[50%] left-[50%] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                FILTRAGEM AVANÇADA
              </Dialog.Title>
              <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                Aqui você pode escolher inúmeras opções, as quais acha esenciais para seu conforto.
              </Dialog.Description>
              <form>
                <ul>
                  <li className="flex flex-col w-full pb-1 outline-none select-none font-medium rounded">
                    <strong className="py-2 pb-2 font-semibold leading-6 text-primary">Combustível</strong>
                    <ul className="flex flex-col gap-1">
                      {
                        fuels.map(item => (
                          <li key={item}>
                            <CheckboxComponent items={fuelsSelected} item={item} handleCheckedChange={handleFuelsSelected} />
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                  <li className="flex flex-col w-full pb-1 outline-none select-none font-medium rounded">
                    <strong className="py-2 pb-2 font-semibold leading-6 text-primary">Câmbio</strong>
                    <ul className="flex flex-col gap-1">
                      {
                        transmissions.map(item => (
                          <li key={item}>
                            <CheckboxComponent items={transmissionsSelected} item={item} handleCheckedChange={handleTransmissionsSelected} />
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                  <li className="flex flex-col w-full pb-1 outline-none select-none font-medium rounded">
                    <strong className="py-2 pb-2 font-semibold leading-6 text-primary">Direção</strong>
                    <ul className="flex flex-col gap-1">
                      {
                        steerings.map(item => (
                          <li key={item}>
                            <CheckboxComponent items={steeringsSelected} item={item} handleCheckedChange={handleSteeringsSelected} />
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                  <li className="flex flex-col w-full pb-1 outline-none select-none font-medium rounded">
                    <strong className="py-2 pb-2 font-semibold leading-6 text-primary">Carroceria</strong>
                    <ul className="flex flex-col gap-1">
                      {
                        bodys.map(item => (
                          <li key={item}>
                            <CheckboxComponent items={bodysSelected} item={item} handleCheckedChange={handleBodysSelected} />
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                  <li className="flex flex-col w-full pb-1 outline-none select-none font-medium rounded">
                    <strong className="py-2 pb-2 font-semibold leading-6 text-primary">Acessórios</strong>
                    <ul className="flex flex-col gap-1">
                      {
                        accessories.map(item => (
                          <li key={item}>
                            <CheckboxComponent items={accessoriesSelected} item={item} handleCheckedChange={handleAccessoriesSelected} />
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                </ul>
              </form>
              <Dialog.Close asChild>
                <button
                  className="text-primary hover:bg-primary/5 focus:shadow-primary absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                >
                  <X />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <SelectComponent value={brandSelected} items={brands} setItem={handleSelectBrand} placeholder="Marca" />
        <SelectComponent value={modelSelected} items={models} setItem={setModelSelect} placeholder="Modelo" />

        {
          filteringElements.map(element => (
            <div key={element} className="inline-flex w-full justify-center leading-none text-secundary">
              <form className="w-full">
                <SliderComponent
                  cars={carsData.cars}
                  intervalType={element === 'year' ? 'modelYear' : element === 'price' ? 'price' : 'mileage'}
                  interval={element === 'year' ? intervalYear : element === 'price' ? intervalPrice : intervalMileage}
                  setInterval={element === 'year' ? setIntervalYear : element === 'price' ? setIntervalPrice : setIntervalMileage}
                />
              </form>
            </div>
          ))
        }
        <div className="flex w-full self-end gap-4">
          <button
            className="text-background shadow-secundary h-12 hover:bg-primary inline-flex items-center justify-between rounded bg-secundary px-4 font-semibold leading-none shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none"
            onClick={() => handleCarsFilter()}
          >
            Filtrar
          </button>
          <button
            className="text-secundary shadow-secundary h-12 hover:bg-primary hover:text-background inline-flex items-center justify-between rounded bg-background px-4 font-semibold leading-none border border-secundary hover:border-primary focus:border-primary focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none"
            onClick={() => handleCarsFilterReset()}
          >
            Limpar filtro
          </button>
        </div>
      </div>
    </div>
  )
}