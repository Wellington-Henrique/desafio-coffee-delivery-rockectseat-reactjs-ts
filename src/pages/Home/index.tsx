import { Intro } from './Intro'
import { ProductList } from './ProductList'

export function Home() {
  document.title = 'Nossos cafés | Coffee Delivery'

  return (
    <>
      <Intro />
      <ProductList />
    </>
  )
}
