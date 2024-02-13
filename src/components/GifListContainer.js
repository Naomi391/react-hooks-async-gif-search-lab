import { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=tCXmhi1CFqO776p8YnvWolWga25QVHmk&limit=25&offset=0&rating=g&bundle=messaging_non_clips"
    )
      .then((res) => res.json())
      .then((data) => {
        setGifs(data.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
  };
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <GifSearch
        handleSubmit={handleSubmit}
        setSearch={setSearch}
        search={search}
      />
      {gifs.map((gif) => (
        <GifList key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default GifListContainer;
