import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function EditProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/products/${productId}`);
        setProduct(res.data);
      } catch (error) {
        toast.error('Failed to fetch product.');
      }
    };
    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/products/${productId}`, product)
      .then(() => {
        navigate("/products");
      })
      .catch((error) => {
        console.error("Failed to update product", error);
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">
          Edit Product
        </h2>
        <p className="text-center mb-8 text-gray-600">
          To edit a product, fill the form and press "Uptade Product"
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Product Name</label>
            <input
              type="text"
              id="title"
              name="title"
              value={product.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Product Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Description"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-medium mb-2">Price ($)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Price"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Category"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={product.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Image URL"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-lg font-semibold text-white bg-black rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors duration-300"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}
