import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../store/searchSlice";
import LoadingSpinner from "../components/LoadingSpinner";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());

  // Fetch products
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

  // Filter products based on search
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery)
  );

  if (loading) return <LoadingSpinner />;

  if (error) return <p className="text-center text-red-500 py-6">{error}</p>;

  return (
    <div className="my-20 px-3">
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="w-full max-w-md px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 text-lg col-span-full text-center">
            No products match your search.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
