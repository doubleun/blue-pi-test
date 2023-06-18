import { ProductCategory } from '@/constants'
import Link from 'next/link'

export default function Home() {
  // TODO: REMOVE ?
  return (
    <main className="container m-auto my-8">
      <h2>HOME</h2>
      <Link href={`/catalog/${ProductCategory.COFFEE}`}>Go to catalog</Link>
    </main>
  )
}
