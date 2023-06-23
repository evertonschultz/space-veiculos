import * as Slider from '@radix-ui/react-slider';
import { SetStateAction } from 'react';

import carType from '../utils/carType';
import { formatMileage, formatPrice } from '../utils/formatValue';

interface SliderComponentProps {
  cars: carType[],
  intervalType: 'modelYear' | 'mileage' | 'price',
  interval: number[]
  setInterval: (value: SetStateAction<number[]>) => void,
}

export default function SliderComponent({ cars, intervalType, interval, setInterval }: SliderComponentProps) {
  {/** Controle dos valores min e max do slider */ }
  const max = cars.reduce(function (prev, current) {
    return prev > current[intervalType] ? prev : current[intervalType]
  }, cars[0][intervalType])
  const min = cars.reduce(function (prev, current) {
    return prev < current[intervalType] ? prev : current[intervalType]
  }, cars[0][intervalType])

  {/** Função que atribui o valor do intervalo seleciondo pelo usuário */ }
  function handleValueChange(value: number[]) {
    setInterval(value)
  }

  return (
    <div className='flex flex-col gap-2 w-full items-center justify-center'>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={interval.length ? [interval[0], interval[1]] : [min, max]}
        max={max}
        min={min}
        step={1}
        minStepsBetweenThumbs={0}
        onValueChange={(value) => handleValueChange(value)}
      >
        <Slider.Track className="bg-secundary/50 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-secundary rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-secundary shadow-[0_2px_10px] shadow-black/70 rounded-[10px] hover:brightness-90 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary/80"
          aria-label="Volume1"
        />
        <Slider.Thumb
          className="block w-5 h-5 bg-secundary shadow-[0_2px_10px] shadow-black/70 rounded-[10px] hover:brightness-90 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary/80"
          aria-label="Volume2"
        />
      </Slider.Root>
      {intervalType === 'price' && <strong>Preço: {interval.length ? `${formatPrice(interval[0])} - ${formatPrice(interval[1])}` : `${formatPrice(min)} - ${formatPrice(max)}`}</strong>}
      {intervalType === 'mileage' && <strong>km: {interval.length ? `${formatMileage(interval[0])} - ${formatMileage(interval[1])}` : `${formatMileage(min)} - ${formatMileage(max)}`}</strong>}
      {intervalType === 'modelYear' && <strong>Ano: {interval.length ? `${interval[0]} - ${interval[1]}` : `${min} - ${max}`}</strong>}
    </div>
  )
}