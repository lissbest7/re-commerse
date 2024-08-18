import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const TABLE_HEADERS = [
  "Product name",
  "Product image",
  "Product price",
  "Category",
  "Actions",
];

function Productspage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setProducts(res.data);
    } catch (error) {
      toast.error("Failed to fetch products.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/products/${id}`);
      if (res.status === 200) {
        toast.success("Successfully deleted product!");
        fetchProducts();
      }
    } catch (error) {
      toast.error("Failed to delete product.");
    }
  };

  const handleViewProduct = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="container mt-12">
      <h1 className="text-4xl font-semibold text-slate-600">Products Panel</h1>
      <table className="w-full mt-12 border">
        <thead>
          <tr className="border">
            {TABLE_HEADERS.map((header) => (
              <th key={header} className="p-6 border">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="divide-x border-b [&>td]:text-center">
              <td className="">{product.title}</td>
              <td className="flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 object-contain"
                />
              </td>
              <td className="border">{product.price}$</td>
              <td className="border">{product.category}</td>
              <td className="border text-center">
                <div className="text-center mw-full p-2 flex flex-col align-center gap-2 items-center justify-center">
                  <button
                    onClick={() => handleViewProduct(product.id)}
                    className="text-center bg-black hover:bg-[#1f1f1f] text-white px-4 py-2 rounded shadow-lg"
                  >
                    View product
                  </button>
                  <div className="text-center flex mw-full p-2 align-center gap-2 items-center justify-center">
                    <Link
                      to={`/products/${product.id}/edit`}
                      className="text-center w-1/2 bg-blue-500 hover:bg-[#2563eb] text-white px-4 py-2 rounded shadow-lg"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-center w-1/2 bg-black hover:bg-[#1f1f1f] text-white px-4 py-2 rounded shadow-lg"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productspage;
