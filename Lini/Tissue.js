function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTissue({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTissue';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.5 11.382l-1.106-2.211C18.066 8.514 17.234 8 16.5 8h-1.796c.893-2.563 2.226-5.24 2.244-5.276a.501.501 0 00-.043-.518c-.049-.067-1.225-1.641-3.526-1.066-.772.193-1.313.651-1.791 1.056-.531.449-.95.804-1.588.804-.68 0-1.535-.244-2.363-.481C6.744 2.264 5.82 2 5 2c-.981 0-1.473.381-1.713.7-.274.365-.287.73-.287.8 0 .042.005.084.016.124.021.081.419 1.602 1.694 4.376H3.5c-.734 0-1.566.514-1.894 1.171L.5 11.382c-.28.561-.5 1.491-.5 2.118v4c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-4c0-.627-.22-1.557-.5-2.118zM4.088 3.3c.147-.196.463-.3.912-.3.68 0 1.535.244 2.363.481C8.256 3.736 9.18 4 10 4c1.004 0 1.657-.553 2.234-1.041.433-.367.842-.713 1.388-.849 1.189-.297 1.944.182 2.278.479-.532 1.097-2.261 4.783-2.813 7.411h-1.031c.171-.983.694-2.667.919-3.342a.5.5 0 10-.948-.316c-.091.273-.796 2.41-.981 3.658H8.822c-.426-.997-.831-2.604-.835-2.621a.5.5 0 10-.97.242c.017.067.337 1.34.729 2.379h-.94C4.853 6.232 4.144 3.926 4.011 3.462A.481.481 0 014.09 3.3zM2.5 9.618c.162-.323.638-.618 1-.618h1.683c.155.32.321.653.497 1h-.179a.5.5 0 000 1h9a.5.5 0 000-1h-.39c.073-.319.164-.655.268-1h2.122c.362 0 .838.295 1 .618l1.106 2.211c.028.055.055.117.081.183a1.433 1.433 0 00-.187-.012h-17c-.063 0-.125.004-.187.012.026-.066.053-.128.081-.183l1.106-2.211zM19 17.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v4z"
  })));
}
LiniTissue.propTypes = {
  size: PropTypes.number.isRequired
};