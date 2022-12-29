import React, { useContext, useState } from "react";
import { Context } from "../context";
import PropTypes from "prop-types";

const Image = ({ className, img }) => {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeFromCart } =
    useContext(Context);
  const heartIcon =
    hovered &&
    (img.isFavorite ? (
      <i
        className="ri-heart-fill favorite"
        onClick={() => toggleFavorite(img.id)}
      ></i>
    ) : (
      <i
        className="ri-heart-line favorite"
        onClick={() => toggleFavorite(img.id)}
      ></i>
    ));
  const cartIcon =
    hovered &&
    (cartItems.includes(img) ? (
      <i
        className="ri-shopping-cart-fill cart"
        onClick={() => removeFromCart(img.id)}
      ></i>
    ) : (
      <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    ));
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
