import React, { useState } from "react";
import { Button } from "react-bootstrap";
import GalleryModal from "./GalleryModal";
import GalleryIcon from "./GalleryIcon";

const NewPageGalleries = () => {
  const [galleries, setGalleries] = useState([
    {
      id: Math.round(Math.random() * 1000000000),
      name: "Gallery 1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In adipisci provident voluptate explicabo animi tenetur temporibus reiciendis doloremque, ullam voluptates.",
      images: [
        "https://images.unsplash.com/photo-1677508259126-aaa7e0ab008d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://plus.unsplash.com/premium_photo-1670333291474-cb722ca783a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1677518809068-d8a897ae2848?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80",
      ],
    },
    {
      id: Math.round(Math.random() * 1000000000),
      name: "Gallery 2",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In adipisci provident voluptate explicabo animi tenetur temporibus reiciendis doloremque, ullam voluptates.",
      images: [
        "https://images.unsplash.com/photo-1677508186574-118a7ef3d587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1677227812546-107690ee0ad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
    },
  ]);

  const [modalData, setModalData] = useState({
    id: Math.round(Math.random() * 1000000000),
    name: "",
    description: "",
    images: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createNewGallery = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="col">
      <div className="d-flex justify-content-between mb-3">
        <h3>Galleries</h3>
        <div>
          <Button
            variant="light"
            className="btn-sm mr-3"
            onClick={createNewGallery}
            onHide={() => setIsModalOpen(true)}
          >
            Add gallery
          </Button>
          <Button variant="light" className="btn-sm">
            Remove all
          </Button>
        </div>
        <GalleryModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          modalData={modalData}
          setModalData={setModalData}
        />
      </div>
      <div className="d-flex mb-3">
        {galleries.map((gallery, index) => (
          <GalleryIcon gallery={gallery} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewPageGalleries;
