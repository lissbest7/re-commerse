import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./pages/home";
import Productspage from "./pages/products";
import SingleProduct from "./pages/single-product";
import AddProductPage from "./pages/add product";
import AboutUs from "./pages/about"
import Contacts from "./pages/contacts";
import EditProduct from "./pages/edit-product";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/products", element: <Productspage /> },
        { path: "/products/:productId", element: <SingleProduct /> },
        { path: "/products/:productId/edit", element: <EditProduct /> },
        { path: "/about", element: <AboutUs /> },
        { path: "/contacts", element: <Contacts /> },
        { path: "/add-product", element: <AddProductPage /> }, 
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}
