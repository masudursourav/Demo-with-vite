const FindUser = () => {
  return (
    <>
      <div className="input-group m-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Insert The Customer Passport No :
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <button className="btn btn-primary">Search</button>
    </>
  );
};

export default FindUser;
