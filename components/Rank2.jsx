import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniRank2(props = {}) {
  props.name = "Rank2";
  
  return (
    <Lini {...props}>
      <path d="M18.5 16c-0.082 0-0.165-0.020-0.242-0.063l-8.757-4.865-8.757 4.865c-0.241 0.134-0.546 0.047-0.68-0.194s-0.047-0.546 0.194-0.68l9-5c0.151-0.084 0.335-0.084 0.486 0l9 5c0.241 0.134 0.328 0.438 0.194 0.68-0.091 0.164-0.262 0.257-0.438 0.257z" />
      <path d="M18.5 13c-0.082 0-0.165-0.020-0.242-0.063l-8.757-4.865-8.757 4.865c-0.241 0.134-0.546 0.047-0.68-0.194s-0.047-0.546 0.194-0.68l9-5c0.151-0.084 0.335-0.084 0.486 0l9 5c0.241 0.134 0.328 0.438 0.194 0.68-0.091 0.164-0.262 0.257-0.438 0.257z" />
    </Lini>
  );
}

LiniRank2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
