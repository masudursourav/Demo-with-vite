import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ImageExtractor from "./components/ImageExtractor";
import Navbar from "./components/Navbar";

function App() {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [passportNo, setPassportNo] = useState("");
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
          if (data) {
            data = data.replace(/\n/g, " ");
            let dataOrg = data.split("/");
            let dataOrg2 = [];
            for (let i = 0; i < data.length; i++) {
              if (dataOrg[i]) {
                dataOrg2.push(dataOrg[i].replace(/[^a-z0-9]/gi, " "));
                dataOrg2[i] = dataOrg2[i].replace(/^\s+|\s+$/g, "");
              }
            }
            for (let i = 0; i < dataOrg2.length; i++) {
              if (dataOrg2[i].indexOf("Date of Birth") !== -1) {
                setDob(
                  dataOrg2[i]
                    .slice(
                      dataOrg2[i].indexOf("Date of Birth") +
                        "Date of Birth".length +
                        1
                    )
                    .replace(/^\s+|\s+$/g, "")
                );
              }

              if (dataOrg2[i].indexOf("Given Name") !== -1) {
                setName(
                  dataOrg2[i]
                    .slice(
                      dataOrg2[i].indexOf("Given Name") +
                        "Given Name".length +
                        1
                    )
                    .replace(/^\s+|\s+$/g, "")
                );
              }

              if (
                dataOrg2[i].indexOf("Passport No") !== -1 &&
                dataOrg2[i].indexOf("Previous Passport No") === -1
              ) {
                setPassportNo(
                  dataOrg2[i]
                    .slice(
                      dataOrg2[i].indexOf("Passport No") +
                        "Passport No".length +
                        1
                    )
                    .replace(/^\s+|\s+$/g, "")
                );
              }
            }
          }
        });
    };
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <ImageExtractor
        isLoading={isLoading}
        setImage={setImage}
        handleClick={handleClick}
      />
      <Form
        dob={dob}
        name={name}
        passportNo={passportNo}
        setName={setName}
        setDob={setDob}
        setPassportNo={setPassportNo}
      />
    </>
  );
}

export default App;
