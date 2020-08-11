import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
// import PropTypes from "prop-types";
// import styles from "./contactlist.module.css";

const ImageGallery = ({ items }) => (
  <ul className="ImageGallery">
    <ImageGalleryItem items={items} data-sourse={items.largeImageURL} />
  </ul>
);

export default ImageGallery;

// ImageGallery.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
