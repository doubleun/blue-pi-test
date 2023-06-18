import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import '@testing-library/jest-dom'
import { mockProducts } from '@/__mocks__'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { ProductsAPIEndpoints } from '@/services'
import { ProductCategory } from '@/constants'
import { calculateAddonPrice } from './ProductDetail.helper'
import ProductDetail from './ProductDetail'

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

  // Having problem with `useRouter`
  // describe('render product detail', () => {
  //   const mockProductId = '1' // espresso

  //   const server = setupServer(
  //     // Mock server for GET coffee products
  //     rest.get(
  //       ProductsAPIEndpoints.FETCH_ONE_BY_ID(mockProductId).replace(
  //         mockProductId,
  //         ':id'
  //       ),
  //       (req, res, ctx) => {
  //         const mockEspressoProduct = mockProducts.filter(
  //           (mockItem) => `${mockItem.id}` === req.params.id
  //         )
  //         return res(ctx.delay(50), ctx.json(mockEspressoProduct))
  //       }
  //     )
  //   )

  //   beforeAll(() => server.listen())
  //   afterAll(() => server.close())
  //   afterEach(() => server.resetHandlers())

  //   beforeEach(async () => {
  //     render(<ProductDetail id={mockProductId} />)

  //     await waitForElementToBeRemoved(() =>
  //       screen.getByTestId('product-detail-loading')
  //     )
  //   })

  //   it('should render correctly', () => {
  //     expect(
  //       screen.getByTestId(`product-detail-container-${mockProductId}`)
  //     ).toBeInTheDocument()
  //     expect(
  //       screen.getByTestId(`product-detail-body-${mockProductId}`)
  //     ).toBeInTheDocument()
  //   })

  //   it('should render the additional section correctly', () => {
  //     expect(
  //       screen.getByTestId(`product-detail-add-coffee-checkbox`)
  //     ).toBeInTheDocument()

  //     screen.getByTestId(`product-detail-add-coffee-checkbox`).click()

  //     expect(
  //       screen.getByTestId(`product-detail-add-coffee-checkbox`)
  //     ).toBeChecked()
  //   })
  // })
})
