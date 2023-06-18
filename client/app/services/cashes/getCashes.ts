import { CashesAPIEndpoints, request } from '@/services/config'
import { ICash } from './cashes'

const getCashes = async (): Promise<ICash[] | undefined> => {
  try {
    const cashes = await request.get(CashesAPIEndpoints.FETCH_ALL())
    return cashes.data
  } catch (err) {
    console.error(err)
    return
  }
}

export default getCashes
