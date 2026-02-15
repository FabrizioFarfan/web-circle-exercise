import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./MenuItem.module.css";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";

const MenuItem = ({ dish }) => {
  const { wishlist, isInWishlist } = useContext(WishlistContext);
  const { strMeal: name, strMealThumb: image } = dish;
  const navigate = useNavigate();
  return (
    <div className={styles.menuItem}>
      <h3>
        {name}

        {isInWishlist(dish.idMeal) && " ❤️"}
      </h3>
      <img src={image} alt={name} />
      <div className={styles.menuItemBtnContainer}>
        <Button onClick={() => navigate(`/meals/${dish.idMeal}`)}>
          Details
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
