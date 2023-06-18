import { render, screen } from '@testing-library/react'
import CatalogNavbar from './CatalogNavbar'
import { ProductCategory } from '@/constants'

describe('CatalogNavbar', () => {
  describe('render initial navbar', () => {
    it('should render correctly', () => {
      render(<CatalogNavbar category={ProductCategory.COFFEE} />)
      expect(screen.getByTestId('catalog-navbar-container')).toBeInTheDocument()
      expect(screen.getByTestId('catalog-navbar-list-container')).toHaveLength(
        3
      )
    })
  })

  // afterEach(() => {
  //   additional.coffeeShot = 0
  //   additional.bubble = 0
  // })

  // describe('calculate addition', () => {
  //   it('should add up correctly', () => {
  //     additional.coffeeShot += coffeeShotPrice
  //     additional.bubble += bubblePrice
  //     const priceAddCoffeeShot = calculateAddonPrice(
  //       productPrice,
  //       'add',
  //       Object.values(additional)
  //     )
  //     expect(priceAddCoffeeShot).toEqual(135)
  //   })
  // })
})
