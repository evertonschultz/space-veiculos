import * as Select from '@radix-ui/react-select';
import { CaretDown, CaretUp, Check } from 'phosphor-react';

interface SelectComponentProps {
  value?: string;
  items: string[],
  setItem: (value: string) => void,
  placeholder: string,
}

export default function SelectComponent({ value, items, setItem, placeholder }: SelectComponentProps) {
  return (
    <div className='flex items-center gap-2 sm:gap-4 w-full text-sm'>
      <strong className='text-secundary'>{placeholder}</strong>
      <Select.Root key={value} value={value} onValueChange={(value) => setItem(value)}>
        <Select.Trigger className="inline-flex w-full items-center justify-between rounded px-2 sm:px-4 font-semibold leading-none h-12 gap-1 text-secundary border border-secundary hover:brightness-90 focus:shadow-[0_0_0_2px] focus:shadow-primary/80 data-[placeholder]:text-secundary/70 outline-none" aria-label={placeholder}>
          <Select.Value placeholder="Selecione uma opção..." />
          <Select.Icon className="text-secundary">
            <CaretDown size={24} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="flex overflow-hidden py-1 max-w-[350px] sm:max-w-full bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-secundary cursor-default">
              <CaretUp />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-1">
              <Select.Group className="flex flex-col gap-1">
                <Select.Label className="px-6 sm:px-6 font-semibold leading-6 text-primary text-sm">{placeholder}s</Select.Label>
                {
                  items.map(item => (
                    <Select.Item key={item} value={item} className="font-semibold line-clamp-1 leading-none text-sm text-secundary/80 rounded flex items-center py-1 sm:py-2 pr-2 sm:pr-9 pl-6 relative select-none data-[disabled]:text-secundary/50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-secundary/5 data-[highlighted]:text-secundary hover:cursor-pointer">
                      <Select.ItemText className="flex w-full line-clamp-1">{item}</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
                        <Check />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))
                }
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-secundary cursor-default">
              <CaretDown />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}