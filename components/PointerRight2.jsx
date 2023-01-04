import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPointerRight2(props = {}) {
  props.name = "PointerRight2";
  
  return (
    <Lini {...props}>
      <path d="M3.5 15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M10.5 17c0.827 0 1.5-0.673 1.5-1.5 0-0.195-0.038-0.382-0.106-0.553 0.637-0.173 1.106-0.756 1.106-1.447 0-0.195-0.038-0.382-0.106-0.553 0.637-0.174 1.106-0.756 1.106-1.447 0-0.175-0.030-0.344-0.086-0.5h2.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-5.966l1.113-1.406c0.241-0.304 0.361-0.695 0.339-1.098s-0.186-0.779-0.46-1.053c-0.581-0.581-1.532-0.583-2.12-0.003l-3.523 3.479c-0.227-0.54-0.762-0.919-1.383-0.919h-2c-0.827 0-1.5 0.673-1.5 1.5v7c0 0.827 0.673 1.5 1.5 1.5h2c0.541 0 1.016-0.288 1.28-0.719 0.636 0.328 1.798 0.719 3.72 0.719h1zM10.818 5.15c0.207 0.207 0.227 0.592 0.044 0.823l-1.754 2.216c-0.119 0.15-0.142 0.355-0.058 0.528s0.258 0.282 0.45 0.282h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-2.102 0-3.139-0.516-3.5-0.748v-6.043l4.108-4.057c0.194-0.192 0.519-0.192 0.71-0.002zM2.5 16c-0.276 0-0.5-0.224-0.5-0.5v-7c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v7c0 0.276-0.224 0.5-0.5 0.5h-2z" />
    </Lini>
  );
}

LiniPointerRight2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
