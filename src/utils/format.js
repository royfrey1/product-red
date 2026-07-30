const priceFormat = new Intl.NumberFormat('es-AR')

export function formatPrice(price) {
  return priceFormat.format(price)
}
