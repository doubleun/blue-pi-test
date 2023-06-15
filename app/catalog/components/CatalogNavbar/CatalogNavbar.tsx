import React from 'react'
import Link from 'next/link'
import { CatalogOption } from '@constants'
import clsx from 'clsx'

/**
 * Map catalog menu items. To add more add menu to the constant file.
 * @param id - value of the CatalogOption enum. For setting active in the UI
 * @todo move to helper file if more logic is needed
 */
const mapMenuItems = (id: CatalogOption) => {
  return Object.values<string>(CatalogOption).map((option) => (
    <li key={option}>
      <Link
        href={`/catalog/${option}`}
        className={clsx(
          option === id && 'active',
          'capitalize',
          CatalogNavbarTwClass.linkButton
        )}
      >
        {option}
      </Link>
    </li>
  ))
}

function CatalogNavbar({ id }: { id: CatalogOption }) {
  return (
    <section className="navbar justify-center my-4">
      <ul className="menu menu-horizontal gap-2 sm:gap-3 md:gap-6">
        {mapMenuItems(id)}
      </ul>
    </section>
  )
}

export default CatalogNavbar

const CatalogNavbarTwClass = {
  linkButton: `justify-center text-sm min-w-[100px] sm:text-base sm:min-w-[120px] py-4 md:min-w-[140px] md:text-lg`,
}
