import { ICash } from '@services/cashes'
import React from 'react'

export type ChangeStack = {
  [key: ICash['id']]: Pick<ICash, 'amount' | 'value' | 'type'>
}

function ChangeDetail({ changeStack }: { changeStack: ChangeStack }) {
  const changeStackValues = Object.values(changeStack).sort(
    (a, b) => a.value - b.value
  )

  // TODO: throw error
  if (changeStackValues.length < 1) return

  return (
    <div className="w-full mt-4">
      {changeStackValues.map((change) => (
        <div
          key={change.value}
          className="grid grid-cols-2 justify-center items-center"
        >
          <h3 className="font-semibold text-base md:text-lg text-center">
            {change.amount} * {change.value} THB
          </h3>
          <h3 className="font-semibold text-base md:text-lg text-center">
            {change.type}
          </h3>
        </div>
      ))}
    </div>
  )
}

export default ChangeDetail
