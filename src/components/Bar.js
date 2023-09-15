import React from "react";
import { keyframes } from "styled-components";

const Bar = (props) => {
  var height = parseInt(100 / props.len) * props.number;
  var animationName = "bar" + props.number;
  const dynamicCssRule = `
      @keyframes ${animationName} {
        from { height: ${parseInt(height/2)}%; }
        to { height: ${height}%; }
        }
      }
    `;

  const styleElement = document.createElement("style");
  styleElement.innerHTML = dynamicCssRule;
  document.head.appendChild(styleElement);

  return (
    <div
      className={`barsorting__bar ${props.active && "barsorting__active"}`}
      key={props.number}
      style={{
        height: `${height}%`,
        order: 1,
        animation: `${animationName} 0.2s`,
      }}
    >
      {/* {props.number} */}
    </div>
  );
};

export default React.memo(Bar);
