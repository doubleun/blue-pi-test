import { ICash } from '@services/cashes'
import Image from 'next/image'
import React from 'react'

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
    >
      <Image
        src={`${cashOption.type === 'coin' ? '/coin.png' : '/banknote.png'}`}
        alt="cash option"
        width={50}
        height={50}
      />
      <h3>{cashOption.value} THB</h3>
    </div>
  )
}

export default CashOption
