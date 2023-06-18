import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductCard from './ProductCard'
import { mockProducts } from '@/__mocks__'

describe('ProductCard', () => {
  const mockProduct = mockProducts.find((itm) => itm.id === 1) // espresso
  if (!mockProduct) throw new Error('Mock product id of 1 is undefined')

  describe('render product card', () => {
    it('should render product id 1 correctly', () => {
      render(<ProductCard product={mockProduct} />)
      expect(screen.getByTestId('product-card-container-1')).toBeInTheDocument()

      expect(
        screen.getByTestId('product-card-footer-price-1').innerHTML
      ).toContain(`${mockProduct.price}`)

      expect(
        screen.getByTestId('product-card-badges-container-1').childElementCount
      ).toEqual(mockProduct.highlights.length)
    })

    it('should display with cursor not allowed if out of stock', () => {
      mockProduct.stock = 0

      render(<ProductCard product={mockProduct} />)
      expect(
        screen.getByTestId('product-card-container-1').classList
      ).toContain('cursor-not-allowed')
    })
  })
})
