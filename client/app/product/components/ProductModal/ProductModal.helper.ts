import { ICash } from '@services/cashes'
import updateCashes from '@services/cashes/updateCashes'
import { KeyedMutator } from 'swr'
import { ChangeStack } from './ChangeDetail'
import { Dispatch } from 'react'

/**
 * @param paymentStack - array of cash options user paid
 * @param change - changes from the checkout price (checkout price - total customer paid) basically a `deductedCheckoutPrice`
 */
export const calculateChange = (
  paymentStack: ICash[],
  change: number,
  stockCashes: ICash[],
  cashMutate: KeyedMutator<ICash[] | undefined>,
  setDisplayErrorMessage: Dispatch<React.SetStateAction<string>>
): ChangeStack | undefined => {
  // for display what user should get back (how many coins or banknotes)
  let changeStack: ChangeStack = {}
  let updatedCashStock = [...stockCashes]
  let currentChange = Math.abs(change)

  // add customer's cash input to the existing cash stock
  paymentStack.forEach((cashInput) => {
    const cashInputIndex = updatedCashStock.findIndex(
      (cashStock) => cashInput.id === cashStock.id
    )
    updatedCashStock[cashInputIndex].amount++
  })

  // filter any cash option that exceed the currentChange amount and sort from top to bottom
  const nearestCashStockAvailable = updatedCashStock
    .filter((cash) => cash.amount > 0 && cash.value <= currentChange)
    .sort((a, b) => b.value - a.value)

  // calculate change and update the copy of the original cash stock
  let index = 0
  while (currentChange > 0) {
    // check if the index exceeds the current available cash options
    const currentOption = nearestCashStockAvailable?.[index]

    // handle no change
    if (!currentOption) {
      setDisplayErrorMessage(
        'Sorry the machine does not have any change. Please select other menu.'
      )
      return
    }

    // check if the current cash option in stock is not empty and it is less than or the same as the left over change
    if (currentOption.amount > 0 && currentOption.value <= currentChange) {
      // deduct current change
      currentChange -= currentOption.value

      // deduct used cash option stock
      currentOption.amount -= 1

      // add to the change stack
      if (changeStack[currentOption.id]) {
        changeStack[currentOption.id].amount += 1
      } else {
        changeStack[currentOption.id] = { ...currentOption, amount: 1 }
      }
    } else {
      index++
    }
  }

  // update the cash stock
  cashMutate(updateCashes(updatedCashStock))

  return changeStack
}
