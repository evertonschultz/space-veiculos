import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from "phosphor-react";

interface CheckboxComponentProps {
  items: string[];
  item: string,
  handleCheckedChange: (value: string | boolean, item: string) => void,
}

export default function CheckboxComponent({ items, item, handleCheckedChange }: CheckboxComponentProps) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox.Root
        id={item}
        checked={items.includes(item)}
        onCheckedChange={(value) => handleCheckedChange(value, item)}
        className="hover:bg-secundary/10 flex h-[18px] w-[18px] appearance-none items-center justify-center rounded border data-[state=checked]:border-0 bg-background data-[state=checked]:bg-primary border-secundary outline-none focus:shadow-[0_0_0_2px_black]"
      >
        <Checkbox.Indicator className="text-secundary data-[state=checked]:text-white">
          <Check weight="bold" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="text-sm leading-none text-secundary" htmlFor={item}>
        {item}
      </label>
    </div>
  )
}