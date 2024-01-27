import "../styles/Photos.scss";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { SlSizeFullscreen } from "react-icons/sl";

const BASE_GALLERY_URL =
  "https://res.cloudinary.com/ddi3hd3cx/image/upload/w_700/lionpark-gallery";
const BASE_GALLERY_LOW =
  "https://res.cloudinary.com/ddi3hd3cx/image/upload/w_50/lionpark-gallery";
const items = Array.from({ length: 5 });
function Photos() {
  return (
    <PhotoProvider>
      <section className="gallery">
        <div className="container">
          <h1 className="heading-second gallery__title page-title">
            Witness the Wild - Lion Zoo in Photos
          </h1>
          <div className="gallery__photos">
            {items.map((_, index) => (
              <PhotoView src={`${BASE_GALLERY_URL}/gallery_${index + 1}.jpg`}>
                <div className="gallery__photo">
                  <div className="gallery__photo--view">
                    <SlSizeFullscreen className="gallery__photo--icon" />
                  </div>
                  <img
                    className="lazy"
                    data-src={`${BASE_GALLERY_URL}/gallery_${index + 1}.jpg`}
                    src={`${BASE_GALLERY_LOW}/gallery_${index + 1}.jpg`}
                    alt="Photo of a big wild cat"
                  />
                </div>
              </PhotoView>
            ))}

            <a
              target="_blank"
              href="https://www.instagram.com/natgeomagarab/"
              className="gallery__photo">
              <img
                className="lazy"
                data-src={`${BASE_GALLERY_URL}/gallery_6.jpg`}
                src={`${BASE_GALLERY_LOW}/gallery_6.jpg`}
                alt="Photo of a big wild cat"
              />
            </a>
          </div>
        </div>
      </section>
    </PhotoProvider>
  );
}

export default Photos;
