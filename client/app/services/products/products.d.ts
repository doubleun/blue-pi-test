export interface IProduct {
  id: number
  name: string
  descriptions: string
  category: string
  imageSrc: string
  price: number
  stock: number
  new?: boolean
  highlights?: string[]
}
