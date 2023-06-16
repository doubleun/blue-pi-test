import { CatalogOption } from '@constants'
import { CatalogNavbar, ProductCardCatalog } from '@catalog/components'

function CatalogPage({ params }: { params: { id: CatalogOption } }) {
  return (
    <main>
      <CatalogNavbar id={params.id} />
      <ProductCardCatalog />
    </main>
  )
}

export default CatalogPage
