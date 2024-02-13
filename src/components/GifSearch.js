const GifSearch = ({ handleSubmit, setSearch, search }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ marginLeft: "100px", marginBottom: "20px", width: "100%" }}
      >
        <label style={{ marginBottom: "4px" }}>Enter a search term:</label>
        <br />
        <input
          type="text"
          onChange={handleChange}
          value={search}
          style={{ marginBottom: "8px" }}
        />
        <br />
        <button
          type="submit"
          style={{
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Find Gifs
        </button>
      </form>
    </>
  );
};

export default GifSearch;
