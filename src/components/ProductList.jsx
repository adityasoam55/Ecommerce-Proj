import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <p className="text-center text-gray-600 py-6">Loading products...</p>
    );

  if (error) return <p className="text-center text-red-500 py-6">{error}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-20 px-3">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={{
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.thumbnail,
          }}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
