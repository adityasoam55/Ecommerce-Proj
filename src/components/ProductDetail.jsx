import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log("Error loading product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center py-6">Loading...</p>;

  if (!product) return <p className="text-center py-6">Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="w-full bg-gray-100 rounded-lg p-6 flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-72 object-contain"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="text-2xl font-semibold mb-4">₹{product.price}</p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
