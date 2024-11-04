import { createContext, ReactNode, useState } from 'react'
import { Product } from '~/types/Product'

type CartContextType = {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((product) => product.id !== productId))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
