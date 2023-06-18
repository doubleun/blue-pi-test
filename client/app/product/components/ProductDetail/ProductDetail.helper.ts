export const calculateAddonPrice = (
  initialPrice: number,
  operation: 'add' | 'deduct',
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
