import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 199.99,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    name: 'Wireless Keyboard',
    price: 79.99,
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
];

const ProductPage: React.FC = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const navigate = useNavigate();

  const updateQuantity = (productId: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + delta),
    }));
  };

  const handleCheckout = async () => {
    const order = products
      .map((product) => ({
        productId: product.id,
        quantity: quantities[product.id] || 0,
      }))
      .filter((item) => item.quantity > 0);

    try {
      const response = await fetch('http://localhost:3000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ order }),
      });

      if (response.ok) {
        const session = await response.json();
        window.location = session.url;
      } else {
        navigate('/error');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      navigate('/error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(product.id, -1)}
                    className="bg-gray-200 rounded-full p-1"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="mx-4 font-semibold">
                    {quantities[product.id] || 0}
                  </span>
                  <button
                    onClick={() => updateQuantity(product.id, 1)}
                    className="bg-gray-200 rounded-full p-1"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold flex items-center justify-center mx-auto hover:bg-blue-600 transition duration-300"
        >
          <ShoppingCart className="mr-2" />
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
