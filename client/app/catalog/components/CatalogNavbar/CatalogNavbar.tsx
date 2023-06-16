import React from 'react'
import Link from 'next/link'
import { ProductCategory } from '@constants'
import clsx from 'clsx'

/**
 * Map catalog menu items. To add more add menu to the constant file.
 * @param id - value of the ProductCategory enum. For setting active in the UI
 * @todo move to helper file if more logic is needed
 */
const mapMenuItems = (id: ProductCategory) => {
  return Object.values<string>(ProductCategory).map((option) => (
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

function CatalogNavbar({ id }: { id: ProductCategory }) {
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
