import React, { useState, useContext } from "react";

import { Context } from "../Context";

function Image({ className, photo }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    Context
  );

  const heartIcon = () => {
    if (photo.isFavorite === true)
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => {
            toggleFavorite(photo.id);
          }}
        ></i>
      );
    else if (hovered)
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => {
            toggleFavorite(photo.id);
          }}
        ></i>
      );
  };

  const cartIcon = () => {
    if (cartItems.find((cartPhoto) => cartPhoto.id === photo.id))
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => {
            removeFromCart(photo.id);
          }}
        ></i>
      );
    else if (hovered)
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => {
            addToCart(photo);
          }}
        ></i>
      );
  };

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={photo.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

export default Image;
