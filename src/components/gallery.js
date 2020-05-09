import React, { useState, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

// so these image sources apparently have to be a string and it cannot be a path. so they need to be hosted somewhere
// maybe like a facebook post or on imgur or whatever

const photos = [
  {
    src:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/97168717_137097397906005_21079458970599424_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_oc=AQm0qmaUwX6fNuNED5xN4bUedzXfIuBcW65_wa_V-H6UW-eAg_Rs7HF6QHcZwdgqy2A&_nc_ht=scontent-lax3-1.xx&oh=17370accd44e47f6faabe320da347845&oe=5EDBD182",
    width: 2,
    height: 3,
    alt: "",
  },
  {
    src:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/96524574_137097444572667_1402201479481131008_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_oc=AQnN0sSvnlfRTJZJcul8XJRNUopqHjA-7ETvVW3rRhdvylW6_WBoQRev2kobwA7SFh4&_nc_ht=scontent-lax3-1.xx&oh=4c52aa04a8f9162f61d190cf55b1b59e&oe=5EDA920C",
    width: 2,
    height: 2,
    alt: "alt text test",
  },
  {
    src:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/96806728_137097511239327_5166325145706430464_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_oc=AQk1i4fIy66Gdm8XOQYmHQ0EUjWAOeZK_WIEEsz4jEYQoYBQ5yExpDavoco45EAILzw&_nc_ht=scontent-lax3-2.xx&oh=ff2abaf26f36aa46029f60af84a1826f&oe=5EDB29DC",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/96593672_137097567905988_719985906362089472_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_oc=AQkZqFmTyLu237SqoZqu3f0RlmgXifVlRnYiRO3HKbR-fdKvuEnf9o_ONZQ3MlGCsuU&_nc_ht=scontent-lax3-2.xx&oh=45345e51ad5263bae6413e5bf036cdde&oe=5EDC8960",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/97029759_137097451239333_6610533097559556096_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_oc=AQmiDjmaNB8Ihm7NMGpk485wGNocncpoc5_Ssa760rihfWD3cffTFWKcmPIOmp5xnZM&_nc_ht=scontent-lax3-1.xx&oh=ad6bb47659e7ccdc447f67b8b7833c6d&oe=5EDBB4BF",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/96581897_137097501239328_6743356649110503424_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_oc=AQmD2mdIoRZBfDRAWI8uwn-4b6_ng3Ve0nywhQaLYjrtiP9odHNGNYmhO4pGDbPxaEY&_nc_ht=scontent-lax3-1.xx&oh=327773e742dc1825129e351aae29f005&oe=5EDE2702",
    width: 2,
    height: 2,
    alt: "",
  },
  {
    src:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/96821565_137097421239336_5789212054938189824_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_oc=AQljYDkujyzhIXuw5xjLv-UJl9jZ1TlYz5L4v7q9aQK_oN-xX9ZZy1R-c24XDbBLU2E&_nc_ht=scontent-lax3-1.xx&oh=29f96ba9fdd31f4dabbfb4899941db88&oe=5EDB9776",
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
