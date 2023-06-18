import { ProductCategory } from '@/constants'
import { CatalogNavbar, ProductCardCatalog } from '@/catalog/components'

function CatalogPage({ params }: { params: { category: ProductCategory } }) {
  return (
    <main data-test-id={`catalog-page-container-${params.category}`}>
      <CatalogNavbar category={params.category} />
      <ProductCardCatalog category={params.category} />
    </main>
  )
}

export default CatalogPage
