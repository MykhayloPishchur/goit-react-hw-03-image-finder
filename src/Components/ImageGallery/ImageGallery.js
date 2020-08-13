import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";
// import PropTypes from "prop-types";

export default class ImageGallery extends Component {
  state = {
    isModal: false,
    imgSrc: "",
  };

  openModal = (e) => {
    const largeImageURL = e.currentTarget.dataset.src;
    this.setState({ imgSrc: largeImageURL, isModal: true });
  };

  closeModal = (e) => {
    if (e.currentTarget === e.target) {
      this.setState({ isModal: false });
    }
  };

  render() {
    const { isModal, imgSrc } = this.state;
    const { items } = this.props;
    return (
      <>
        <ul className="ImageGallery">
          <ImageGalleryItem items={items} onClick={this.openModal} />
        </ul>
        {isModal && (
          <Modal src={imgSrc} alt={items.tags} onClick={this.closeModal} />
        )}
      </>
    );
  }
}
