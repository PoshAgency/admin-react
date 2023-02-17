import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const ImageCropper = ({ imageToCrop, onImageCropped }) => {
  const [crop, setCrop] = useState({
    unit: "%",
    width: 30,
    aspect: 16 / 9,
  });

  const [imageRef, setImageRef] = useState(null);

  const cropImage = async (crop) => {
    if (imageRef && crop.width && crop.height) {
      const croppedImage = await getCroppedImage(
        imageRef,
        crop,
        "croppedImage.jpeg" // destination filename
      );

      // set cropped image in parent component
      onImageCropped(croppedImage);
    }
  };

  const getCroppedImage = (sourceImage, crop, fileName) => {
    // create crop image from source image
    const canvas = document.createElement("canvas");
    const scaleX = sourceImage.naturalWidth / sourceImage.width;
    const scaleY = sourceImage.naturalHeight / sourceImage.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      sourceImage,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        // return an error
        if (!blob) {
          reject(new Error("Failed to crop image!"));
          return;
        }

        blob.name = fileName;
        // Create object URL representing the Blob object
        const croppedImageURL = URL.createObjectURL(blob);

        resolve(croppedImageURL);
      }, "image/jpeg");
    });
  };

  return (
    <ReactCrop
      // src={imageToCrop}
      crop={crop}
      ruleOfThirds
      onImageLoaded={(imageRef) => setImageRef(imageRef)}
      onComplete={(crop) => cropImage(crop)}
      onChange={(crop) => setCrop(crop)}
      crossorigin="anonymous"
      style={{ maxWidth: "500px", maxHeight: "500px" }}
    >
      <img src={imageToCrop} alt="" />
    </ReactCrop>
  );
};

export default ImageCropper;
