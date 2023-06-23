'use client';

export default function About() {
  return (
    <main className="w-full h-auto bg-background pb-52">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-4">
        <div className="flex flex-col pt-20">
          <h1 className="font-bold text-4xl self-center">Conheça a Space veículos</h1>
          <p className="font-medium text-lg self-center">Aqui você encontra os mais variados tipos de veículos, com procedência e preço justo!</p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <strong className="text-xl">Missão:</strong>
            <p>Oferecer a melhor experiencia na venda de veículos por meio de uma consultoria personalizada ao cliente.</p>
          </div>
          <div>
            <strong className="text-xl">Visão:</strong>
            <p>Ser a revenda de veículos mais bem classificada nacionalmente no quesito satisfação do cliente.</p>
          </div>
          <div>
            <strong className="text-xl">Valores:</strong>
            <p>Ter no estoque somente veículos com procedencia e revisados. Prezar pelo atendimento de qualiadade aos nossos clientes, com o intuíto de deixar muito bem clara a negociaçao e tornar prazeroso e agradavel nogociar com a gente.</p>
          </div>
        </div>
      </div>
    </main>
  )
}