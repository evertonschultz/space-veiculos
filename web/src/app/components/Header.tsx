"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

import NavigationMenuComponent from "./NavigationMenu";
import Link from "next/link";
import { FacebookLogo, InstagramLogo } from "phosphor-react";

export default function HeaderComponent() {
  const [selected, setSelected] = useState(0)

  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/')
      setSelected(0)

    if (pathname === '/stock')
      setSelected(1)

    if (pathname === '/about')
      setSelected(2)
  }, [pathname])

  return (
    <header className="w-full bg-secundary">
      <div className="flex flex-col-reverse pt-2 sm:pt-0 pr-2 sm:flex-row h-64 pb-11 sm:pb-0 max-w-7xl mx-auto justify-between sm:items-center px-1 sm:px-8 bg-bgHeader">
        {/** LOGO */}
        <Image priority src="/logo_ok.png" className="h-auto w-auto" quality={100} alt="Space Veículos" width={485} height={175} />

        {/** CONTATO */}
        <div className="flex h-auto sm:h-full w-full">
          <NavigationMenuComponent />
        </div>
      </div>

      {/** MENU */}
      <div className="flex max-w-7xl mx-auto text-sm sm:text-base justify-between bg-secundary">
        <div className="flex w-full gap-2 px-2">
          <Link href={'/'} className={`flex items-center rounded-sm justify-center`}>
            <span className={`font-semibold px-1 inline-block relative ${selected === 0 ? "py-1 sm:py-3 text-background after:content-[' '] after:h-[3px] after:rounded-t-md after:w-full after:absolute after:bottom-[1px] after:left-0 after:bg-primary" : 'text-background/40 hover:text-primary'}`}
            >HOME</span>
          </Link>
          <Link href={'/stock'} className={`flex items-center rounded-sm justify-center`}>
            <span className={`font-semibold px-1 inline-block relative ${selected === 1 ? "py-1 sm:py-3 text-background after:content-[' '] after:h-[3px] after:rounded-t-md after:w-full after:absolute after:bottom-[1px] after:left-0 after:bg-primary" : 'text-background/40 hover:text-primary'}`}
            >ESTOQUE</span>
          </Link>
          <Link href={'/about'} className={`flex items-center rounded-sm justify-center`}>
            <span className={`font-semibold px-1 inline-block relative ${selected === 2 ? "py-1 sm:py-3 text-background after:content-[' '] after:h-[3px] after:rounded-t-md after:w-full after:absolute after:bottom-[1px] after:left-0 after:bg-primary" : 'text-background/40 hover:text-primary'}`}
            >SOBRE</span>
          </Link>
          <div className="flex w-full items-center justify-end sm:justify-start gap-2 px-0 sm:px-8 text-background">
            <Link href={'/'} className="flex hover:text-primary">
              <InstagramLogo className="h-6 w-auto" />
            </Link>
            <Link href={'/'} className="flex hover:text-primary">
              <FacebookLogo className="h-6 w-auto" />
            </Link>
          </div>
        </div>

        <span className="hidden text-background/80 sm:flex w-full px-4 justify-end self-center font-normal text-md">Rua, nº - centro | Cidade | Estado</span>
      </div>
    </header>
  )
}