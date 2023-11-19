/* eslint-disable react/prop-types */
import Form from "../components/Form";
import ImageExtractor from "../components/ImageExtractor";
const CustomerInformation = ({
  isLoading,
  setImage,
  handleClick,
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
        setTravelingFrom={setTravelingFrom}
      />
    </>
  );
};

export default CustomerInformation;
