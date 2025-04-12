import React from "react";

const Flag = ({ src, name }) => (
  <img
    src={src}
    alt={`${name} flag`}
    style={{
      width: "200px",
      height: "100px",
      objectFit: "cover",
      border: "1px solid #000",
    }}
  />
);

export default Flag;