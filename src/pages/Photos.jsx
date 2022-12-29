import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../context";
import getClass from "../utils/getClass";

const Photos = () => {
  const { allPhotos } = useContext(Context);
  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));
  return <main className="photos">{imageElements}</main>;
};

export default Photos;
