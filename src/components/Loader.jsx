/* eslint-disable react/prop-types */
import { ClipLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "100px auto",
};
const Loader = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Loader;
