import React, { useState, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

// so these image sources apparently have to be a string and it cannot be a path. so they need to be hosted somewhere
// maybe like a facebook post or on imgur or whatever

const photos = [
  {
    src:
      "https://i.imgur.com/HZ0FdXA.jpg",
    width: 2,
    height: 3,
    alt: "",
  },
  {
    src:
      "https://i.imgur.com/YuBFgM2.jpg",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://i.imgur.com/LYA0EFS.jpg",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://i.imgur.com/7XL8RAi.jpg",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://i.imgur.com/lo7afre.jpg",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://i.imgur.com/O0EBSLN.jpg",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://i.imgur.com/AQt1S63.jpg",
    width: 2,
    height: 2,
    alt: "",
  },
]

const CustomGallery = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div style={{ marginBottom: "1.5rem", padding: "0 1.5rem" }}>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default CustomGallery
