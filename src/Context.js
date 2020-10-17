import React, { useState, useEffect } from "react";

const Context = React.createContext();

const Provider = (props) => {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems);

  const toggleFavorite = (id) => {
    const changedPhotosArray = photos.map((photo) => {
      if (photo.id === id)
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      return photo;
    });

    setPhotos(changedPhotosArray);
  };

  const addToCart = (photoToAdd) => {
    if (!cartItems.find((photo) => photo.id === photoToAdd.id))
      setCartItems((prevArray) => [...prevArray, photoToAdd]);
  };

  const removeFromCart = (id) => {
    const changedCartPhotos = cartItems.filter((photo) => !(photo.id === id));
    console.log("changedCartPhotos:", changedCartPhotos);
    setCartItems(changedCartPhotos);
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <Context.Provider
      value={{ photos, toggleFavorite, addToCart, removeFromCart, cartItems }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Provider, Context };
