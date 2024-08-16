import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const TABLE_HEADERS = [
  "Product name",
  "Product image",
  "Product price",
  "Actions",
];

function Productspage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    await axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data);
    });
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

  return (
    <div className="container mt-12">
      <h1 className="text-4xl font-semibold text-slate-600">Products Panel</h1>
      <table className="w-full mt-12 border">
        <tr className="border">
          {TABLE_HEADERS.map((header) => (
            <th key={header} className="p-6 border">
              {header}
            </th>
          ))}
        </tr>
        {products.map((product) => (
          <tr key={product.id} className="divide-x border-b [&>td]:text-center">
            <td className="">{product.title}</td>
            <td className="flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="size-32 object-contain"
              />
            </td>
            <td className="border">{product.price}$</td>
            <td className="border">
              <div className="p-2 flex align-center gap-2 items-center justify-center">
                <Link
                  to={"/products/${product.id}/edit"}
                  className="w-1/2 bg-blue-500 hover:bg-[#2563eb] text-white px-4 py-2 rounded shadow-lg"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="w-1/2 bg-black hover:bg-[#1f1f1f] text-white px-4 py-2 rounded shadow-lg"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Productspage;
