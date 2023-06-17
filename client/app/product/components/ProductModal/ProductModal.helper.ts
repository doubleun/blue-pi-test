import { ICash } from '@services/cashes'
import updateCashes from '@services/cashes/updateCashes'
import { KeyedMutator } from 'swr'

/**
 * @param paymentStack - cashes from customer
 * @param stockCashes - cashes available in stock from the server
 */
export const calculateCashesStock = (
  paymentStack: ICash[],
  stockCashes: ICash[]
) => {}

export type ChangeStack = {
  [key: ICash['id']]: Pick<ICash, 'amount' | 'value' | 'type'>
}

/**
 * @param change - changes from the checkout price (checkout price - total customer paid) basically a `deductedCheckoutPrice`
 */
export const calculateChange = (
  change: number,
  stockCashes: ICash[],
  cashMutate: KeyedMutator<ICash[] | undefined>
): ChangeStack | undefined => {
  // for display what user should get back (how many coins or banknotes)
  let changeStack: ChangeStack = {}
  let updatedCashStock = [...stockCashes]
  let currentChange = Math.abs(change)
  console.log('currentChange: ', currentChange)

  // filter any cash option that exceed the currentChange amount and sort from top to bottom
  const nearestCashStockAvailable = updatedCashStock
    .filter((cash) => cash.amount > 0 && cash.value <= currentChange)
    .sort((a, b) => b.value - a.value)

  // calculate change and update the copy of the original cash stock
  let index = 0
  while (currentChange > 0) {
    // check if the index exceeds the current available cash options
    const currentOption = nearestCashStockAvailable?.[index]
    // console.log('currentOption before deduct: ', currentOption)

    // TODO: throw error
    if (!currentOption) return

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

      // console.log('currentOption after deduct: ', currentOption)
      // console.log('updatedCashStock: ', updatedCashStock)
    } else {
      index++
    }
  }

  // update the cash stock
  cashMutate(updateCashes(updatedCashStock))

  return changeStack
}
