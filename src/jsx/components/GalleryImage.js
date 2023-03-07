import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const GalleryImage = ({ image, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "180px",
    height: "120px",
  };

  return (
    <img
      ref={setNodeRef}
      style={style}
      src={image.source}
      alt={index}
      className="object-fit-cover mt-2 mr-2 rounded-lg"
      {...attributes}
      {...listeners}
    ></img>
  );
};

export default GalleryImage;
