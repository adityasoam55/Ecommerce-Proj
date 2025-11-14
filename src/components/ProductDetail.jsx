import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import LoadingSpinner from '../components/LoadingSpinner'

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
        setSelectedImg(res.data.thumbnail || res.data.images?.[0]);
      } catch (error) {
        console.log("Error loading product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        qty,
        thumbnail: selectedImg, // chosen image
      })
    );
  };

  if (loading) return <LoadingSpinner />;

  if (!product)
    return <p className="text-center py-6 text-gray-600">Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE — MAIN IMAGE */}
        <div>
          <div className="w-full bg-gray-100 rounded-xl p-8 flex items-center justify-center shadow-sm">
            <img
              src={selectedImg}
              alt={product.title}
              className="h-80 object-contain transition-all"
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-4 mt-6 overflow-x-auto">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImg(img)}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border 
                ${selectedImg === img ? "border-blue-600" : "border-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — DETAILS */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {product.title}
          </h1>

          <p className="text-gray-500 mb-1">
            Category: <span className="text-gray-700">{product.category}</span>
          </p>

          {/* Rating */}
          <p className="flex items-center gap-2 text-yellow-500 mb-4">
            ⭐ {product.rating} / 5 Ratings
          </p>

          <p className="text-3xl font-semibold text-red-500 mb-4">
            ${product.price}
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setQty((prev) => Math.max(1, prev - 1))}
              className="w-10 h-10 flex items-center justify-center rounded-full border text-xl"
            >
              –
            </button>

            <span className="text-xl font-semibold">{qty}</span>

            <button
              onClick={() => setQty((prev) => prev + 1)}
              className="w-10 h-10 flex items-center justify-center rounded-full border text-xl"
            >
              +
            </button>
          </div>

          {/* ADD TO CART BUTTON */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold 
                       hover:bg-blue-800 transition shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
