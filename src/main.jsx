import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Header from "./components/Header.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Cart from "./pages/Cart.jsx";
import { Toaster } from "react-hot-toast";
import Checkout from "./pages/Checkout.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import About from "./pages/About.jsx";

// Layout Component (Header stays consistent everywhere)
const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <App />, // Home page
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart", // Cart Route
        element: <Cart />,
      },
      {
        path: "checkout", // Checkout Route
        element: <Checkout />,
      },
      {
        path: "about", // Checkout Route
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={AppRoutes} />
      <Toaster position="top-center" />
    </Provider>
  </StrictMode>
);
