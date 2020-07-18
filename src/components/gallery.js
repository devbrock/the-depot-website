import React, { useState, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

// so these image sources apparently have to be a string and it cannot be a path. so they need to be hosted somewhere
// maybe like a facebook post or on imgur or whatever

const photos = [
  {
    src:
      "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/97168717_137097397906005_21079458970599424_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=p1MqpF5k4P0AX9xqZT4&_nc_ht=scontent-dfw5-1.xx&oh=c2e8a67823ffbf153a69cb1e053b9cab&oe=5F36C902",
    width: 2,
    height: 3,
    alt: "",
  },
  {
    src:
      "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/96524574_137097444572667_1402201479481131008_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=tHn3MpzsdZAAX-uTgOq&_nc_ht=scontent-dfw5-2.xx&oh=3767b11d7bac40869d32a645c6c503e5&oe=5F397E0C",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/96806728_137097511239327_5166325145706430464_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=7ZzLumqpK0IAX8SJVcT&_nc_ht=scontent-dfw5-1.xx&oh=3d33d5b656d28f1538d5d36cb5b589a4&oe=5F36215C",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/96593672_137097567905988_719985906362089472_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=15jS7vNX-X4AX-EFNM4&_nc_ht=scontent-dfw5-2.xx&oh=7d63f34820732e10a0f31a217cf5a67c&oe=5F3780E0",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/97029759_137097451239333_6610533097559556096_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=pM3IgxJCoPkAX-jJ8gN&_nc_ht=scontent-dfw5-2.xx&oh=2265a0d33f44b99eb150ebc2df87f489&oe=5F36AC3F",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/96581897_137097501239328_6743356649110503424_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=MY3Korz-ab8AX_0_gqK&_nc_ht=scontent-dfw5-1.xx&oh=42537553eb56a3997df8a4147e1b4a90&oe=5F391E82",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/96821565_137097421239336_5789212054938189824_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=Ulposez5aQAAX_O7RHZ&_nc_ht=scontent-dfw5-2.xx&oh=26f17ac9fa3291f7199ff05699395c9c&oe=5F368EF6",
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
