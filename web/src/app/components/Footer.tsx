import Image from "next/image";
import Link from "next/link";

export default function FooterComponent() {
  return (
    <footer className="flex flex-col w-full bg-secundary">
      <div className="flex flex-col text-lg sm:text-xl px-4 py-8 font-semibold w-full gap-8 items-center justify-center text-background">
        <div className="flex gap-1">
          <span>Hi, </span>
          👋
          <p>Space Veículos ao seu dispor!</p>
        </div>
        <div className="flex items-center justify-center">
          <Image className="w-auto h-auto" alt="Space Veículos" src="/logo_ok.png" width={400} height={200} />
        </div>
        <div className="flex text-lg font-medium w-full h-16 gap-1 items-center justify-center text-background">
          Rua, nº - centro | Cidade | Estado
        </div>
      </div>
      <div className="flex bg-background py-2 text-secundary gap-1 items-center justify-center">
        <strong>© 2023 Space Veículos</strong>
      </div>
      <div className="flex bg-black py-4 text-background gap-1 items-center justify-center">
        <p className="text-xs">Desenvolvido por</p>
        <Link href={'/'}>
          <strong className="text-teal-300">Mastery Digital</strong>
        </Link>
      </div>
    </footer>
  )
}