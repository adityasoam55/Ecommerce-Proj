import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Header from "./components/Header.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Layout Component (Header and Footer stays constant)
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
    element: <Layout />, // Header and Footer stays here!
    children: [
      {
        index: true,
        element: <App />, // your home page
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={AppRoutes} />
  </StrictMode>
);
