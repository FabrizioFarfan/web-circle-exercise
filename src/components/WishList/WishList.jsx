import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./WishList.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export const WishList = () => {
  const { wishlist } = useContext(WishlistContext);
  const nav = useNavigate();
  return (
    <div>
      <div className={styles.headerContainer}>
        <h1>My Wishlist 💙</h1>
        <Button onClick={() => nav("/")}>Return Home</Button>
      </div>
      <div className={styles.restaurantWrapper}>
        <div className={styles.menu}>
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <div key={item.idMeal}>
                <MenuItem dish={item} />
              </div>
            ))
          ) : (
            <p>Your wishlist is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};
