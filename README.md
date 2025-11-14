# 🛒 ShopEase — Modern E-Commerce Web App

ShopEase is a fully functional and responsive **E-Commerce web application** built using **React.js**, **Redux Toolkit**, **Tailwind CSS**, and **React Router**.  
It includes product listing, product details, search functionality, cart management, checkout page, and smooth UI/UX enhancements.

---

## 🚀 Features

### 🎯 Core Features

- Product Listing (Fetched from DummyJSON API)
- Product Detail Page
- Add to Cart / Remove from Cart
- Increase & Decrease Quantity
- Search Products in Real-Time
- Top Rated Products Carousel
- Responsive & Clean UI

### 🛍 Cart Features

- Persistent Cart using **LocalStorage**
- Live calculation of:
  - Total Quantity
  - Total Price
- Toast notifications using **react-hot-toast**

### 🧭 Navigation

React Router-based pages include:

- Home
- Product Details
- Cart
- Checkout
- About
- 404 Page

### 🎨 UI/UX Enhancements

- Styled with **Tailwind CSS**
- Fully mobile-responsive
- Scroll-to-top on route change
- Reusable components:
  - Header
  - Footer
  - LoadingSpinner
  - ProductItem
  - ScrollToTop
  - ProductDetail

---

## 🏗️ Tech Stack

| Technology          | Purpose                     |
| ------------------- | --------------------------- |
| **React.js**        | Frontend UI                 |
| **Redux Toolkit**   | Global State (cart, search) |
| **React Router**    | Navigation & Routing        |
| **Tailwind CSS**    | Styling                     |
| **DummyJSON API**   | Product Data                |
| **Axios**           | API Requests                |
| **React Hot Toast** | Notifications               |

---

## 📁 Project Structure

src/
│
├── components/
│ ├── CartItem.jsx
│ ├── Footer.jsx
│ ├── Header.jsx
│ ├── LoadingSpinner.jsx
│ ├── ProductDetail.jsx
│ ├── ProductItem.jsx
│ ├── ProductList.jsx
│ └── ScrollToTop.jsx
│
├── pages/
│ ├── Cart.jsx
│ ├── Checkout.jsx
│ └── NotFound.jsx
│
├── store/
│ ├── cartSlice.js
│ ├── searchSlice.js
│ └── store.js
│
├── App.jsx
├── main.jsx
└── index.css

🔧 Installation & Setup

Follow these steps to run the project locally:

1️⃣ Clone the Repository
git clone https://github.com/adityasoam55/Ecommerce-Proj
cd shopease

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm run dev

🔗 API Used

This project uses DummyJSON for product data.
https://dummyjson.com/products
