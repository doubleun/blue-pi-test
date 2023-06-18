import { ICash } from '@/services/cashes'
import Image from 'next/image'
import React from 'react'

/**
 * @param callback - for pushing new input cash option from user and re-render the deducted checkout price
 */
function CashOption({
  cashOption,
  callback,
}: {
  cashOption: ICash
  callback: (price: number) => void
}) {
  return (
    <div
      className="flex flex-col justify-center items-center min-w-[74px] cursor-pointer hover:bg-slate-300 rounded-md"
      onClick={() => callback(cashOption.value)}
      data-test-id={`cash-option-${cashOption.id}-container`}
    >
      <Image
        src={`${cashOption.type === 'coin' ? '/coin.png' : '/banknote.png'}`}
        alt="cash option"
        width={50}
        height={50}
        data-test-id={`cash-option-${cashOption.id}-image`}
      />
      <h3 data-test-id={`cash-option-${cashOption.id}`}>
        {cashOption.value} THB
      </h3>
    </div>
  )
}

export default CashOption
