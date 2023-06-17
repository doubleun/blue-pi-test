import { CashesAPIEndpoints, request } from '@services/config'
import { ICash } from './cashes'

const updateCashes = async (
  updatedCashes: ICash[]
): Promise<ICash[] | undefined> => {
  try {
    const cashes = await request.put(
      CashesAPIEndpoints.UPDATE_ALL(),
      updatedCashes
    )
    return cashes.data
  } catch (err) {
    console.error(err)
    return
  }
}

export default updateCashes
