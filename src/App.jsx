import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import MenuItemDetails from "./components/MenuItem/MenuItemDetails.jsx";
import RestaurantView from "./views/RestaurantView.jsx";

import "./App.css";
import { WishList } from "./components/WishList/WishList.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<RestaurantView />} />
        <Route path="/meals/:id" element={<MenuItemDetails />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/*" element={<p>404 Page not found</p>} />
      </Routes>
    </Router>
  );
}

// Wrap App in an ErrorBoundary to help us with development bugs

export default function WrappedApp() {
  const appWrapper = (
    <WishlistProvider>
      <App />
    </WishlistProvider>
  );
  return import.meta.env.MODE === "development" ? (
    <ErrorBoundary>{appWrapper}</ErrorBoundary>
  ) : (
    <WishlistProvider>{appWrapper}</WishlistProvider>
  );
}
