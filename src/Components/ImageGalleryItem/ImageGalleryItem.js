import React from "react";
// import PropTypes from "prop-types";
// буду использовать шорт ид , иногда в пиксабай попадаются картинки с одинаковыми ид
const shortid = require("shortid");

const ImageGalleryItem = ({ items }) => (
  <>
    {items.map((item) => (
      <li key={shortid.generate()} className="ImageGalleryItem">
        <img
          src={item.webformatURL}
          data-sourse={item.largeImageURL}
          alt={item.tags}
          className="ImageGalleryItem-image"
        ></img>
      </li>
    ))}
  </>
);

export default ImageGalleryItem;
