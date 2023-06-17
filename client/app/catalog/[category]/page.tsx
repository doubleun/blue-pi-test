import { ProductCategory } from '@constants'
import { CatalogNavbar, ProductCardCatalog } from '@catalog/components'

function CatalogPage({ params }: { params: { category: ProductCategory } }) {
  return (
    <main>
      <CatalogNavbar category={params.category} />
      <ProductCardCatalog category={params.category} />
    </main>
  )
}

export default CatalogPage
