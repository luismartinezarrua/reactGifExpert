import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    getGifs(category).then((uno) => setImages(uno));    
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};
