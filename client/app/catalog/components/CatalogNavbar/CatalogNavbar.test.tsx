import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CatalogNavbar from './CatalogNavbar'
import { ProductCategory } from '@/constants'

describe('CatalogNavbar', () => {
  describe('render initial navbar', () => {
    it('should render correctly', () => {
      render(<CatalogNavbar category={ProductCategory.COFFEE} />)
      expect(screen.getByTestId('catalog-navbar-container')).toBeInTheDocument()
      expect(
        screen.getByTestId('catalog-navbar-list-container').childElementCount
      ).toEqual(3)
    })
  })
})
