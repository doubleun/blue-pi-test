import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductCard from './ProductCard'
import { mockProducts } from '@/__mocks__'

describe('ProductCard', () => {
  const mockProduct = mockProducts[0] // espresso
  if (!mockProduct) throw new Error('First mock product is undefined')

  describe('render product card', () => {
    it('should render the first product correctly', () => {
      render(<ProductCard product={mockProduct} />)
      expect(
        screen.getByTestId(`product-card-container-${mockProduct.id}`)
      ).toBeInTheDocument()

      expect(
        screen.getByTestId(`product-card-footer-price-${mockProduct.id}`)
          .innerHTML
      ).toContain(`${mockProduct.price}`)

      expect(
        screen.getByTestId(`product-card-badges-container-${mockProduct.id}`)
          .childElementCount
      ).toEqual(mockProduct.highlights.length)
    })

    it('should display with cursor not allowed if out of stock', () => {
      mockProduct.stock = 0

      render(<ProductCard product={mockProduct} />)
      expect(
        screen.getByTestId(`product-card-container-${mockProduct.id}`).classList
      ).toContain('cursor-not-allowed')
    })
  })
})
