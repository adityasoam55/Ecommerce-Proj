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

// Layout Component (Header stays consistent everywhere)
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
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
        path: "cart", // ✅ New Cart Route
        element: <Cart />,
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
