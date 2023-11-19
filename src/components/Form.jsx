/* eslint-disable react/prop-types */
const Form = ({
  dob,
  name,
  passportNo,
  setName,
  setDob,
  setPassportNo,
  setTravelingFrom,
}) => {
  return (
    <>
      <form action="">
        <div className="d-flex">
          <div className="input-group m-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Full Name :
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group m-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Date of Birth :
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="input-group m-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Passport No :
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={passportNo}
              onChange={(e) => setPassportNo(e.target.value)}
            />
          </div>
          <div className="input-group m-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Mobile No :
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="input-group m-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Traveling From :
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => setTravelingFrom(e.target.value)}
            />
          </div>
          <div className="input-group m-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Traveling To :
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="input-group m-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Traveling Date :
            </span>
            <input
              type="Date"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group m-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Airlines Name :
            </span>
            <select
              className="form-select"
              aria-label="Disabled select example"
            >
              <option selected>Select One</option>
              <option value="1">Novo Air</option>
              <option value="2">Thi Air</option>
              <option value="3">Air Asia</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
