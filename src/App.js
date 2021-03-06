import React, { Component } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button/Button";
import Loader from "./Components/Loader/Loader";
import api from "../src/Services/Services";

export default class App extends Component {
  state = {
    inputValue: "",
    imgList: [],
    isLoading: false,
    page: 1,
  };

  handleMakeRequest = () => {
    const { inputValue, page } = this.state;
    this.setState({ isLoading: true });

    api(inputValue, page)
      .then((response) => {
        this.setState(({ imgList }) => ({
          imgList: [...imgList, ...response.data.hits],
          isLoading: false,
        }));
      })
      .catch((error) => console.log(error));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const search = event.target.imageValue.value;
    this.setState((prevState) => {
      if (prevState.inputValue !== search) {
        return {
          imgList: [],
          inputValue: search,
          page: 1,
        };
      } else {
        return {
          page: prevState.page + 1,
        };
      }
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { inputValue, page, isLoading } = this.state;

    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      this.setState({
        isLoading: true,
      });

      this.handleMakeRequest();
    }

    if (prevState.isLoading && !isLoading) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { imgList, isLoading } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        <ImageGallery items={imgList}></ImageGallery>
        {isLoading ? (
          <Loader />
        ) : (
          imgList.length > 0 && <Button onClick={this.loadMore} />
        )}
      </div>
    );
  }
}
