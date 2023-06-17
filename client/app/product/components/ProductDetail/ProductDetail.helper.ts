import { IProduct } from '@services'

export const calculateAddonPrice = (
  initialPrice: number,
  operation: 'add' | 'deduct' | 'reset',
  addons: number[]
) => {
  let finalPrice = initialPrice
  switch (operation) {
    case 'add':
      addons.forEach((addon) => (finalPrice += addon))
      break
    case 'deduct':
      addons.forEach((addon) => (finalPrice -= addon))
      break
    default:
      break
  }
  return finalPrice
}
