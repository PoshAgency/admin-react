import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button } from "react-bootstrap";
import GalleryModal from "./GalleryModal";
import GalleryIcon from "./GalleryIcon";

const NewPageGalleries = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [galleryID, setGalleryID] = useState(null);
  const [galleries, setGalleries] = useState([
    {
      id: uuid(),
      name: "Summer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In adipisci provident voluptate explicabo animi tenetur temporibus reiciendis doloremque, ullam voluptates.",
      images: [
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1541417904950-b855846fe074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHN1bW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1551523713-c1473aa01d9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHN1bW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1541417904950-b855846fe074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bW1lcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
        },
      ],
    },
    {
      id: uuid(),
      name: "Winter",
      orderNumber: 0,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In adipisci provident voluptate explicabo animi tenetur temporibus reiciendis doloremque, ullam voluptates.",
      images: [
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2ludGVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbnRlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbnRlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdpbnRlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1423145406370-2b342ae5b597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdpbnRlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdpbnRlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1545586860-95d2040c1680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHdpbnRlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: uuid(),
          orderNumber: 0,
          source:
            "https://images.unsplash.com/photo-1545586860-95d2040c1680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHdpbnRlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
        },
      ],
    },
  ]);

  const clearGalleries = () => {
    setGalleries([]);
  };

  const handleGallery = (id) => {
    setGalleryID(id);

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
            onClick={() => handleGallery(null)}
          >
            Add gallery
          </Button>
          <Button variant="light" className="btn-sm" onClick={clearGalleries}>
            Remove all
          </Button>
        </div>
        <GalleryModal
          galleryID={galleryID}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          galleries={galleries}
          setGalleries={setGalleries}
        />
      </div>
      <div className="d-flex mb-3 flex-wrap">
        {!galleries.length ? (
          <h4 className="mt-4 pl-4">Gallery list is empty.</h4>
        ) : (
          galleries.map((gallery, index) => (
            <GalleryIcon
              gallery={gallery}
              key={index}
              handleGallery={handleGallery}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NewPageGalleries;
