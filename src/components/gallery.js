import React, { useState, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

// so these image sources apparently have to be a string and it cannot be a path. so they need to be hosted somewhere
// maybe like a facebook post or on imgur or whatever

const photos = [
  {
    src:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/96668375_136896831259395_5689487621609226240_n.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_oc=AQnQcKcMTSGgeIVEz91l-BJYoMGz2Aqk9pVcR0dVuWs2grUYtD2zL71_kIgC1-JxLcU&_nc_ht=scontent-lax3-1.xx&oh=7cba3c5012f685a5b241c6dd5a86d03d&oe=5EDC6284",
    width: 2,
    height: 1,
  },
  {
    src:
      "https://images.unsplash.com/photo-1575136087248-7f2ea5f2fe36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
    width: 1,
    height: 2,
    alt: "alt text test",
  },
  {
    src:
      "https://images.unsplash.com/photo-1516535794938-6063878f08cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
    width: 1,
    height: 2,
  },
  {
    src:
      "https://images.unsplash.com/photo-1517656398108-a3cc9ab0c2a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=1234&q=80",
    width: 1,
    height: 2,
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
