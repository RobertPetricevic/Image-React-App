import React, { useState, useContext } from "react";

import { Context } from "../Context";

function Image({ className, photo }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

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

  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={photo.url} className="image-grid" />
      {heartIcon()}
      {cartIcon}
    </div>
  );
}

export default Image;
