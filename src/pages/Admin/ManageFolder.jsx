import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getImageUpload } from "../../services/Index";
import Lightbox from "yet-another-react-lightbox";
import imagesArray from "../../assets/assets";

export const ManageFolder = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [data, setData] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

 

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="relative">
      <h1 className="text-center text-sky-800 font-bold text-xl">
        ManageFolder
      </h1>
      {/* Render loading indicator or error message based on the state */}
      {loading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}
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
      <Lightbox
        className="border-4 border-black"
        open={lightboxOpen}
        slides={imagesArray.map((item) => ({ src: item.src }))}
        selectedIndex={selectedImageIndex}
        onClose={true}
      />
    </div>
  );
};
