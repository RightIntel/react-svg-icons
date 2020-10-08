var React = require('react');

var PropTypes = require('prop-types');

function LiniSlingshot({
  size,
  ...props
}) {
  var className = 'Component Lini LiniSlingshot';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.5 20h-1c-0.827 0-1.5-0.673-1.5-1.5v-1.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1.5c0 0.276 0.224 0.5 0.5 0.5h1c0.276 0 0.5-0.224 0.5-0.5v-1.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1.5c0 0.827-0.673 1.5-1.5 1.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 0h-1c-0.827 0-1.5 0.673-1.5 1.5v2.5c0 1.103-0.897 2-2 2s-2-0.897-2-2v-2.5c0-0.827-0.673-1.5-1.5-1.5h-1c-0.827 0-1.5 0.673-1.5 1.5v2.5c0 1.333 0.428 2.595 1.238 3.65 0.706 0.919 1.676 1.623 2.762 2.008l0 3.842c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5l-0-4.207c0-0.224-0.149-0.42-0.364-0.481-2.141-0.606-3.636-2.584-3.636-4.812h2c0 1.654 1.346 3 3 3s3-1.346 3-3h2c0 2.228-1.495 4.206-3.636 4.812-0.215 0.061-0.364 0.257-0.364 0.481v4.207c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5l0-3.842c1.086-0.385 2.057-1.088 2.762-2.008 0.81-1.055 1.238-2.317 1.238-3.65v-2.5c0-0.827-0.673-1.5-1.5-1.5zM5 3v-1.5c0-0.276 0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5v1.5h-2zM13 3v-1.5c0-0.276 0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5v1.5h-2z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 16c-1.87 0-3.628-0.728-4.95-2.050s-2.050-3.080-2.050-4.95v-5.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5.5c0 3.308 2.692 6 6 6s6-2.692 6-6v-5.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5.5c0 1.87-0.728 3.628-2.050 4.95s-3.080 2.050-4.95 2.050z",
    fill: "#000000"
  })));
}

LiniSlingshot.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSlingshot;