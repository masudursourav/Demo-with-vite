import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //const [dob, setDob] = useState("");
  const api =
    "https://script.google.com/macros/s/AKfycbwzC_Ia55M8TfUp1rBhJZEiBrTvduTGiWwUa5wwfrCsgRdr6h4NgM6tMvu2eKMr4dP_iA/exec";
  const handleClick = () => {
    setIsLoading(true);
    let fr = new FileReader();
    fr.readAsDataURL(image);
    fr.onload = () => {
      let res = fr.result;
      let b64 = res.split("base64,")[1];
      fetch(api, {
        method: "POST",
        body: JSON.stringify({
          file: b64,
          type: image.type,
          name: image.name,
        }),
      })
        .then((res) => res.text())
        .then((data) => {
          setText(data);
        });
    };
    setIsLoading(false);
  };

  return (
    <>
      <h1>NID/Passport Extractor</h1>
      {isLoading && <h2>Loading</h2>}
      <div className="m-5">
        <span className="m-5">Select a File</span>
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
      {!isLoading && text && (
        <>
          <textarea
            className="form-control w-100 mt-5"
            rows="5"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          {/* <p>Date of Birth</p>
          <input type="text" value={dob} /> */}
        </>
      )}
    </>
  );
}

export default App;
