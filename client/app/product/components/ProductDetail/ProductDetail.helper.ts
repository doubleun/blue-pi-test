// FIXME: type
export const calculateCheckoutPrice = (product: any, addons: any[]) => {
  let finalPrice = product.price
  addons.forEach((addon) => (finalPrice += addon))
  return finalPrice
}
