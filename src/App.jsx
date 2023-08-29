import { createContext, useState } from "react";
import Images from "./components/Images";
import Navbar from "./components/Navbar";
import Bar from "./components/Bar";
import Axi from "./components/Axi"

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = Axi(`search/photos?per_page=20&query=random &client_id=${import.meta.env.VITE_API_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Navbar>
        <Bar />
      </Navbar>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
