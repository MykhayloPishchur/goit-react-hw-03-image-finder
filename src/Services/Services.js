import axios from "axios";

const api = (inputValue, page) => {
  const apiKey = "16732818-7da563d5e6a89fd9c9e651ff7";

  return axios.get(
    `https://pixabay.com/api/?q=${inputValue}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export default api;
