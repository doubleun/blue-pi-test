import { ProductCategory } from '@constants'
import { CatalogNavbar, ProductCardCatalog } from '@catalog/components'

function CatalogPage({ params }: { params: { id: ProductCategory } }) {
  return (
    <main>
      <CatalogNavbar id={params.id} />
      <ProductCardCatalog />
    </main>
  )
}

export default CatalogPage
