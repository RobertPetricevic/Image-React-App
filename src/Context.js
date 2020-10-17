import React, { useState, useEffect } from "react";

const Context = React.createContext();

const Provider = (props) => {
  const [photos, setPhotos] = useState([]);

  const toggleFavorite = (id) => {
    const changedPhotos = photos.map((photo) => {
      if (photo.id === id)
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      return photo;
    });

    setPhotos(changedPhotos);
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  console.log(photos);

  return (
    <Context.Provider value={{ photos, toggleFavorite }}>
      {props.children}
    </Context.Provider>
  );
};

export { Provider, Context };
