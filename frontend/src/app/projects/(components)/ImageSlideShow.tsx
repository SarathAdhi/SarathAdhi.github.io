import Image from "next/image";
import { useEffect, useState } from "react";

const ImageSlideShow = ({ images = [] as string[], alt = "" }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const imagesLength = images.length - 1;

  useEffect(() => {
    let interval = setTimeout(() => {
      if (imageIndex >= imagesLength) setImageIndex(0);
      else setImageIndex(imageIndex + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [imageIndex]);

  return (
    <Image
      className="rounded-lg"
      width={500}
      height={500}
      src={images[imageIndex]}
      alt={alt}
    />
  );
};

export default ImageSlideShow;
