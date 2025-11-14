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

  // Filter top-rated items (rating >= 4)
  const topRated = products.filter((p) => p.rating >= 4.5);

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="text-center text-red-500 py-6">{error}</p>;

  return (
    <div className="my-20 px-5">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Welcome to <span className="text-blue-600">ShopEase</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover high-quality products at the best prices. Browse our latest
          collection and find exactly what you’re looking for!
        </p>
      </div>

      {/* ⭐ Top Rated Products Section */}
      {topRated.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            ⭐ Top Rated Products
          </h2>

          <div className="flex gap-4 overflow-x-scroll py-2">
            {topRated.map((product) => (
              <div key={product.id} className="min-w-[200px]">
                <ProductItem product={product} />
              </div>
            ))}
          </div>
        </div>
      )}

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
