import { mockCashes } from '@/__mocks__'
import { ChangeStack } from './ChangeDetail'
import { calculateChange } from './ProductModal.helper'

describe('ProductModal', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const expectedChange: ChangeStack = {
    4: { ...mockCashes[3], amount: 2 },
  } // 2*20

  // Assuming the product price is - 120
  const mockPaymentStack = [mockCashes[2], mockCashes[5], mockCashes[4]] // 1*10, 1*50, 1*100 = 160 - 120 = 40
  const mockChange = 40
  const mockCashMutate = jest.fn()
  const mockSetDisplayErrorMessage = jest.fn()

  describe('calculateChange', () => {
    it('should return the correct change stack', () => {
      const returnedChange = calculateChange(
        mockPaymentStack,
        mockChange,
        mockCashes,
        mockCashMutate,
        mockSetDisplayErrorMessage
      )
      expect(returnedChange).toEqual(expectedChange)
      expect(mockCashMutate).toBeCalledTimes(1)
      expect(mockSetDisplayErrorMessage).toBeCalledTimes(0)
    })
    it('should exits if cash is out of stock', () => {
      const mockOutOfStockCash = mockCashes.map((cash) => ({
        ...cash,
        amount: 0,
      }))

      const returnedChange = calculateChange(
        mockPaymentStack,
        mockChange,
        mockOutOfStockCash,
        mockCashMutate,
        mockSetDisplayErrorMessage
      )
      expect(returnedChange).toBeUndefined()
      expect(mockCashMutate).toBeCalledTimes(0)
      expect(mockSetDisplayErrorMessage).toBeCalledTimes(1)
    })
  })
})
