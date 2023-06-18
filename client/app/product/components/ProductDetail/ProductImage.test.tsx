import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductImage from './ProductImage'
import { mockProducts } from '@/__mocks__'

describe('ProductImage', () => {
  const mockProduct = mockProducts[0] // espresso

  it('should render correctly', () => {
    render(<ProductImage product={mockProduct} />)

    expect(
      screen.getByTestId(`product-image-container${mockProduct.id}`)
    ).toBeInTheDocument()

    expect(
      screen.getByTestId(`product-name-${mockProduct.id}`).innerHTML
    ).toEqual(mockProduct.name)

    expect(
      screen.getByTestId(`product-desc-${mockProduct.id}`).innerHTML
    ).toEqual(mockProduct.descriptions)
  })
})
