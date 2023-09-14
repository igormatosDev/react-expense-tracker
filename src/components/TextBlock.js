import React from "react";

const TextBlock = ({id, borderColor, sentence}) => {
  return (
    <li
      key={id}
      className="textblock"
      style={{ borderColor: borderColor || "#eee" }}
    >
      {sentence}
    </li>
  );
};

export default TextBlock;
