import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

function Homepage() {
  const [showProducts, setShowProducts] = useState(false);
  const [products, setProducts] = useState(null);

  const handleShowProducts = () => {
    setShowProducts(true);
  };

  useEffect(() => {
    if (showProducts) {
      axios.get("http://localhost:3000/products").then((res) => {
        setProducts(res.data);
      });
    }
  }, [showProducts]);

  return (
    <div>
      {!showProducts ? (
        <div>
          <h1 className="mt-60 text-4xl font-bold text-center text-teal-600">
            Welcome to{' '}
            <span className='text-blue-400 text-4xl font-bold text-center'>
              re:
            </span>
            <span className="text-4xl font-bold text-center text-black">
              commerse!
            </span>
          </h1>
          <p className="mx-auto w-fit mt-8 text-center text-lg font-medium text-gray-500 hover:text-black transition-colors duration-300">
            Click
            <button
              onClick={handleShowProducts}
              className="cursor-pointer m-2 font-bold text-blue-600 hover:underline"
            >
              HERE
            </button>
            see our products
          </p>
        </div>
      ) : (
        <div>
          {products ? (
            <div className="container mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <Card key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="mt-64">
              <Loading />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Homepage;
