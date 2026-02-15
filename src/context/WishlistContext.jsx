import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (dish) => {
    const minimalDish = {
      idMeal: dish.idMeal,
      strMeal: dish.strMeal,
      strMealThumb: dish.strMealThumb,
    };

    setWishlist((prev) => {
      if (prev.some((d) => d.idMeal === minimalDish.idMeal)) return prev;
      return [...prev, minimalDish];
    });
  };

  const removeFromWishlist = (idMeal) => {
    setWishlist((prev) => prev.filter((d) => d.idMeal !== idMeal));
  };

  const isInWishlist = (idMeal) => {
    return wishlist.some((d) => d.idMeal === idMeal);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
