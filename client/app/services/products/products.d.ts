export interface IProduct {
  id: int
  name: string
  descriptions: string
  category: string
  imageSrc: string
  price: int
  stock: int
  new?: boolean
  highlights?: string[]
}
