import { Request, Response } from 'express'
import Cash from '../model/Cash'

/**
 * GET - get coins (1, 5, 10) and banknotes (20, 50, 100, 500, 1000) stocks
 * @description Get cash status - (current coins, current banknotes)
 */
export const getCashOptions = async (req: Request, res: Response) => {
  try {
    const cashes = await Cash.find()
    res.json(cashes)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal server error' })
  }
  // res.send('Get cash options')
}

/**
 * POST - add coins (1, 5, 10) and banknotes (20, 50, 100, 500, 1000) options
 * * NOTE: May not needed
 * @description Add multiple cash options, should only run once at the app init.
 */
export const addCashOptions = (req: Request, res: Response) => {
  res.send('Add cash options')
}

/**
 * PUT - update coins (1, 5, 10) and banknotes (20, 50, 100, 500, 1000) stocks
 * @description Update cash status - (coins, banknotes stock)
 */
export const updateCashOptions = (req: Request, res: Response) => {
  res.send('Update cash options')
}

// /**
//  * DELETE - delete coins (1, 5, 10) and banknotes (20, 50, 100, 500, 1000) options
//  * @description Delete all cash options
//  */
// export const deleteAllCashOptions = (req: Request, res: Response) => {
//   res.send('Delete all cash options')
// }

// price - 85
// 3*10 coins, 2*20 banknotes, 1*50 banknote
// income -> 120
// change -> 35
// ideal return -> 1*20 banknote, 1*10 coin, 1*5 coin

// needs to return 35 baht
// check from the bottom to top (available cash options) (loop)
// find the least value
// set as the next value to compare
// mark the cash option for deduction
// loop til next value is 0
// deduct the cash options, available product stock
