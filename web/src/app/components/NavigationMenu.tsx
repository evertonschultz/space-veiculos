import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { CaretDown } from 'phosphor-react';

export default function NavigationMenuComponent() {
  return (
    <NavigationMenu.Root className="flex w-full h-full items-start text-xs sm:text-base sm:items-center justify-end">
      <NavigationMenu.List className="flex justify-center items-center rounded list-none">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className="[&>svg]:data-[state='open']:-rotate-180 flex px-4 text-background h-10 items-center gap-4 sm:gap-14 outline-none select-none font-bold rounded focus:shadow-[0_0_0_2px] focus:shadow-background">
            <span>ATENDIMENTO</span>
            <CaretDown className="h-4 w-4 sm:h-6 sm:w-6" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute z-[1] overflow-hidden w-full pb-1 py-0 sm:py-2 px-4 bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <ul>
              <li className="flex flex-col w-full pb-1 outline-none select-none font-medium rounded">
                <strong className="py-2 pb-2 font-semibold leading-6 text-primary">Telefone fixo</strong>
                <NavigationMenu.Link asChild>
                  <ul className="flex flex-col gap-1">
                    <li className="flex flex-row gap-2">
                      <Link href={'/'} className="text-secundary hover:underline">(22) 2222-2222</Link>
                    </li>
                    <li className="flex flex-row gap-2">
                      <Link href={'/'} className="text-secundary hover:underline">(22) 2222-2222</Link>
                    </li>
                  </ul>
                </NavigationMenu.Link>
              </li>
              <li className="flex flex-col w-full pb-1 outline-none select-none font-medium rounded">
                <strong className="py-2 pb-2 font-semibold leading-6 text-primary">WhatsApp</strong>
                <NavigationMenu.Link asChild>
                  <ul className="flex flex-col gap-1">
                    <li className="flex flex-col gap-0">
                      <span className="text-secundary">Fulano</span>
                      <Link href={'/'} className="text-secundary hover:underline">(99) 9999-9999</Link>
                    </li>
                    <li className="flex flex-col gap-0">
                      <span className="text-secundary">Ciclano </span>
                      <Link href={'/'} className="text-secundary hover:underline">(99) 9999-9999</Link>
                    </li>
                    <li className="flex flex-col gap-0">
                      <span className="text-secundary">Beltrano</span>
                      <Link href={'/'} className="text-secundary hover:underline">(99) 9999-9999</Link>
                    </li>
                  </ul>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}