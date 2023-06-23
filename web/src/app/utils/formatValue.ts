export function formatMileage(value: number) {
  return new Intl.NumberFormat().format(value)
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}