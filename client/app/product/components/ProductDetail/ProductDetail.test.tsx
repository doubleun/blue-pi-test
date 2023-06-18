import { calculateAddonPrice } from './ProductDetail.helper'

describe('ProductDetail', () => {
  describe('calculateAddonPrice', () => {
    const productPrice = 115
    const additional = { coffeeShot: 0, bubble: 0 }
    const coffeeShotPrice = 15
    const bubblePrice = 5

    afterEach(() => {
      additional.coffeeShot = 0
      additional.bubble = 0
    })

    describe('calculate addition', () => {
      it('should add up correctly', () => {
        additional.coffeeShot += coffeeShotPrice
        additional.bubble += bubblePrice
        const priceAddCoffeeShot = calculateAddonPrice(
          productPrice,
          'add',
          Object.values(additional)
        )
        expect(priceAddCoffeeShot).toEqual(135)
      })

      it('should return the same price if not operation is not provided', () => {
        const calPrice = calculateAddonPrice(
          productPrice,
          '' as any,
          Object.values(additional)
        )
        expect(calPrice).toEqual(productPrice)
      })
    })

    describe('calculate deduction', () => {
      it('should deduct correctly', () => {
        const deductions = [10, 5, 20, 20] // 55
        const priceDeducted = calculateAddonPrice(
          productPrice,
          'deduct',
          Object.values(deductions)
        )
        expect(priceDeducted).toEqual(60)
      })
    })
  })
})
