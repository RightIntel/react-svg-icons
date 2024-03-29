import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniScaleTruck(props = {}) {
  props.name = "ScaleTruck";
  
  return (
    <Lini {...props}>
      <path d="M16.5 4c-0.173 0-0.341-0.090-0.433-0.25-0.138-0.239-0.056-0.545 0.183-0.683l1.732-1c0.239-0.138 0.545-0.056 0.683 0.183s0.056 0.545-0.183 0.683l-1.732 1c-0.079 0.045-0.165 0.067-0.25 0.067z" />
      <path d="M18.5 17h-1.5v-10.036c1.694-0.243 3-1.704 3-3.464 0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 1.76 1.306 3.221 3 3.464v10.036h-14.5c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5zM14 3.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5-2.5-1.122-2.5-2.5zM18.5 19h-17c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M13.816 10.868l-0.684-2.051c-0.155-0.465-0.642-0.816-1.132-0.816h-3c0-0.551-0.449-1-1-1h-7c-0.551 0-1 0.449-1 1v6c0 0.551 0.449 1 1 1h1.086c0.206 0.582 0.762 1 1.414 1s1.208-0.418 1.414-1h3.086c0.182 0 0.353-0.049 0.5-0.135 0.147 0.085 0.318 0.135 0.5 0.135h1.086c0.206 0.582 0.762 1 1.414 1s1.208-0.418 1.414-1h0.086c0.551 0 1-0.449 1-1v-2c0-0.331-0.079-0.818-0.184-1.132zM12.184 9.132l0.289 0.868h-1.473v-1h1c0.060 0 0.165 0.076 0.184 0.132zM3.5 15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM4.914 14c-0.206-0.582-0.762-1-1.414-1s-1.208 0.418-1.414 1h-1.086v-6h7v6h-3.086zM11.5 15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM12.914 14c-0.206-0.582-0.762-1-1.414-1s-1.208 0.418-1.414 1h-1.086v-5h1v1.5c0 0.276 0.224 0.5 0.5 0.5h2.306l0.061 0.184c0.071 0.212 0.132 0.593 0.132 0.816h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-0.086z" />
    </Lini>
  );
}

LiniScaleTruck.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
