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
      "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/96001885_135786351370443_4481733837197410304_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_oc=AQmRlxcwqXhcpCBujsTys1XgrHmPqz2b8drdClO6QNyktCNXI9D3u8A7jvk8hhaATDM&_nc_ht=scontent-lax3-2.xx&oh=fa88b83199af736fced2280070560083&oe=5EDE58AD",
    width: 2,
    height: 3,
    alt: "alt text test",
  },
  {
    src:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/93089111_129078928707852_8437154260159823872_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQlzd_mnSDYOoOzVhPvRwcwI1YamDlyNOP8o7XHrzsNEo31P1TsQQHeI3R7oMxO0HAw&_nc_ht=scontent-lax3-1.xx&oh=ced2dd6b2df92204c82f901ff3f098c7&oe=5EDE01ED",
    width: 2,
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
