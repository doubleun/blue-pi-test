import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CashOption from './CashOption'

describe('CashOption', () => {
  const mockCashOption = {
    id: 5,
    type: 'banknote',
    value: 50,
    amount: 10,
  }
  const mockCallback = jest.fn()

  beforeEach(() =>
    render(<CashOption cashOption={mockCashOption} callback={mockCallback} />)
  )

  it('should render correctly', () => {
    expect(
      screen.getByTestId(`cash-option-${mockCashOption.id}-container`)
    ).toBeInTheDocument()

    expect(
      screen.getByTestId(`cash-option-${mockCashOption.id}`).innerHTML
    ).toEqual(`${mockCashOption.value} THB`)
  })

  it('should fired callback function when clicked', () => {
    screen.getByTestId(`cash-option-${mockCashOption.id}-container`).click()
    expect(mockCallback).toBeCalledTimes(1)
  })
})
