import React from "react";
import imagesArray from "../../../assets/assets";

const LightBox = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="flex flex-wrap justify-center">
      {imagesArray.map((item, index) => (
        <div
          key={index}
          className="m-2 border-2 border-black cursor-pointer"
          onClick={() => openLightbox(index)}
        >
          <img
            src={item.src}
            alt={item.srcName}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default LightBox;
