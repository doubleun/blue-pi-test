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
import ProductCardCatalog from './ProductCardCatalog'

const server = setupServer(
  // Mock server for GET coffee products
  rest.get(
    ProductsAPIEndpoints.FETCH_BY_CATEGORY(ProductCategory.COFFEE).replace(
      ProductCategory.COFFEE,
      ':category'
    ),
    (req, res, ctx) => {
      const mockCoffeeProducts = mockProducts.filter(
        (mockItem) => mockItem.category === req.params.category
      )
      return res(ctx.delay(50), ctx.json(mockCoffeeProducts))
    }
  )
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('ProductCardCatalog', () => {
  describe('product catalog in coffee category', () => {
    const mockCoffeeProducts = mockProducts.filter(
      (mockItem) => mockItem.category === ProductCategory.COFFEE
    )
    beforeEach(async () => {
      render(<ProductCardCatalog category={ProductCategory.COFFEE} />)

      await waitForElementToBeRemoved(() =>
        screen.getByTestId('product-card-catalog-loading')
      )
    })

    it('should render all products in the category correctly', () => {
      expect(
        screen.getByTestId('product-card-catalog-container').childElementCount
      ).toEqual(mockCoffeeProducts.length)
    })
  })
})
