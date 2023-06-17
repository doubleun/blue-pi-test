import React from 'react'
import Link from 'next/link'
import { ProductCategory } from '@constants'
import clsx from 'clsx'

/**
 * Map catalog menu items. To add more add menu to the constant file.
 * @param id - value of the ProductCategory enum. For setting active in the UI
 * @todo move to helper file if more logic is needed
 */
const mapMenuItems = (category: ProductCategory) => {
  return Object.values<string>(ProductCategory).map((option) => (
    <li key={option} data-test-id="catalog-navbar-list-parent">
      <Link
        href={`/catalog/${option}`}
        className={clsx(
          option === category && 'active',
          'capitalize',
          CatalogNavbarTwClass.linkButton
        )}
        data-test-id={`catalog-navbar-list-${option}`}
      >
        {option}
      </Link>
    </li>
  ))
}

function CatalogNavbar({ category }: { category: ProductCategory }) {
  return (
    <section
      className="navbar justify-center my-4"
      data-test-id="catalog-navbar-container"
    >
      <ul
        className="menu menu-horizontal gap-2 sm:gap-3 md:gap-6"
        data-test-id="catalog-navbar-list-container"
      >
        {mapMenuItems(category)}
      </ul>
    </section>
  )
}

export default CatalogNavbar

const CatalogNavbarTwClass = {
  linkButton: `justify-center text-sm min-w-[100px] sm:text-base sm:min-w-[120px] py-4 md:min-w-[140px] md:text-lg`,
}
