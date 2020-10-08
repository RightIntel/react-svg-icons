var React = require('react');

var PropTypes = require('prop-types');

function LiniCarLock({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCarLock';

  if (props.className) {
    className += ' ' + props.className;
  }

  const pathProps = {};

  if (color) {
    pathProps.fill = color;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M5.5 16c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM5.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M14.5 16c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM14.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.958 11.907c-0.13-0.792-0.553-3.214-1.011-4.131-0.305-0.61-1.088-1.077-2.326-1.386-1.006-0.251-2.292-0.39-3.621-0.39-0.522 0-1.041 0.021-1.542 0.063-0.275 0.023-0.48 0.265-0.457 0.54s0.265 0.48 0.54 0.457c0.473-0.040 0.964-0.060 1.458-0.060 2.885 0 4.756 0.63 5.053 1.224 0.287 0.575 0.606 2.096 0.804 3.183-0.098-0.029-0.199-0.056-0.303-0.080-1.37-0.326-3.308-0.326-5.553-0.326-0.526 0-1.024 0-1.504 0.004-0.276 0.002-0.498 0.228-0.496 0.504 0.002 0.275 0.226 0.496 0.5 0.496 0.001 0 0.003 0 0.004-0 0.476-0.004 0.972-0.004 1.496-0.004 2.182 0 4.066 0 5.322 0.299 0.367 0.087 0.666 0.194 0.906 0.328 0.015 0.010 0.031 0.019 0.047 0.027 0.505 0.299 0.725 0.725 0.725 1.346v2.5c0 0.276-0.224 0.5-0.5 0.5h-13c-0.276 0-0.5-0.224-0.5-0.5v-2.5c0-0.145 0.012-0.281 0.036-0.404 0.053-0.271-0.123-0.534-0.394-0.587s-0.534 0.123-0.587 0.394c-0.037 0.186-0.055 0.387-0.055 0.596v2.5c0 0.652 0.418 1.208 1 1.414v1.086c0 0.551 0.449 1 1 1h1c0.551 0 1-0.449 1-1v-1h8v1c0 0.551 0.449 1 1 1h1c0.551 0 1-0.449 1-1v-1.086c0.582-0.206 1-0.762 1-1.414v-2.5c0-0.921-0.343-1.614-1.042-2.093zM5 19h-1v-1h1v1zM15 19v-1h1v1h-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6 6.086v-0.586c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v0.586c-0.582 0.206-1 0.762-1 1.414v3c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-3c0-0.652-0.418-1.208-1-1.414zM3.5 4c0.827 0 1.5 0.673 1.5 1.5v0.5h-3v-0.5c0-0.827 0.673-1.5 1.5-1.5zM6 10.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v3z"
  }, pathProps))));
}

LiniCarLock.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCarLock;