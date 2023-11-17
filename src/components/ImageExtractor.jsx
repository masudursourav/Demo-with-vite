const ImageExtractor = ({ isLoading, setImage, handleClick }) => {
  return (
    <>
      <h1>Customer Information</h1>
      {isLoading && <h2>Loading</h2>}
      <div className="m-5">
        <span className="m-5">Select a Passport Photo or PDF</span>
        <input
          type="file"
          className="file form-control"
          capture="environment"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div className="m-5">
        <button className="btn btn-primary" onClick={handleClick}>
          Extract
        </button>
      </div>
    </>
  );
};

export default ImageExtractor;
