import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({gallery}) => {
  return <ul className="gallery">
    {gallery.map(item => {
      return<li className="gallery-item" key={item.id}>
        <ImageGalleryItem image={item} />
      </li>
    })}
  </ul>
}
