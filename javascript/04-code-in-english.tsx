import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  function searchProducts(search: string) {
    const filtrado = productList.filter(product => product.title.includes(search))

    setFilteredProducts(filtrado)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProducts(e.target.value)} />

      {filteredProducts.map(products => (
        <div>
          <p>{products.title}</p>
          <p>{products.price}</p>
        </div>
      ))}
    </div>
  )
}