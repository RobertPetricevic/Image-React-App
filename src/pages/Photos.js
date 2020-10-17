import React, { useContext } from "react";

import { Context } from "../Context";
import Image from "../components/Image";

import { getClass } from "../utils/index";

function Photos() {
  const { photos } = useContext(Context);

  const displayedPhotos = photos.map((photo, index) => {
    return <Image key={photo.id} photo={photo} className={getClass(index)} />;
  });

  return <main className="photos">{displayedPhotos}</main>;
}

export default Photos;
