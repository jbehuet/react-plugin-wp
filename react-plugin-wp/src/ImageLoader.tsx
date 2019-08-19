import React, { useState, useEffect } from "react";

const ImageLoader = ({ src, alt }: { src: string; alt: string }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImage(img);
    img.onerror = () => setImage(null);
    img.src = src;
  }, [src]);

  if (image) return <img src={image.src} alt={alt} />;
  else
    return (
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    );
};

export default ImageLoader;
