import React from "react";
import PropTypes from "prop-types";
// буду использовать шорт ид , иногда в пиксабай попадаются картинки с одинаковыми ид

const shortid = require("shortid");

const ImageGalleryItem = ({ items, onClick }) => (
  <>
    {items.map((item) => (
      <li
        data-src={item.largeImageURL}
        key={shortid.generate()}
        className="ImageGalleryItem"
        onClick={onClick}
      >
        <img
          src={item.webformatURL}
          alt={item.tags}
          className="ImageGalleryItem-image"
        ></img>
      </li>
    ))}
  </>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
