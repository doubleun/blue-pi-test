import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ChangeDetail, { ChangeStack } from './ChangeDetail'
import { mockCashes } from '@/__mocks__'

describe('ChangeDetail', () => {
  const mockChangeStack: ChangeStack = {
    2: { ...mockCashes[1], amount: 2 },
    3: { ...mockCashes[2], amount: 1 },
    5: { ...mockCashes[4], amount: 1 },
    6: { ...mockCashes[5], amount: 2 },
  } // 5, 10, 50, 100 baht option

  beforeEach(() => render(<ChangeDetail changeStack={mockChangeStack} />))

  it('should render correctly', () => {
    const firstChange = Object.values(mockChangeStack)[0]
    expect(screen.getByTestId('change-detail-container')).toBeInTheDocument()
    expect(
      screen.getByTestId('change-detail-container').childElementCount
    ).toEqual(4)

    expect(
      screen.getByTestId(`change-detail-${firstChange.value}-container`)
    ).toBeInTheDocument()

    expect(
      screen.getByTestId(`change-detail-${firstChange.value}-amount`).innerHTML
    ).toEqual(`${firstChange.amount} * ${firstChange.value} THB`)

    expect(
      screen.getByTestId(`change-detail-${firstChange.value}-type`).innerHTML
    ).toEqual(firstChange.type)
  })
})
