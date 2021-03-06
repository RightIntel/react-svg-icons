var React = require('react');

var PropTypes = require('prop-types');

function LiniSmartphoneVibration({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniSmartphoneVibration';

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
  }, /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.5 20h-9c-0.827 0-1.5-0.673-1.5-1.5v-17c0-0.827 0.673-1.5 1.5-1.5h9c0.827 0 1.5 0.673 1.5 1.5v17c0 0.827-0.673 1.5-1.5 1.5zM5.5 1c-0.276 0-0.5 0.224-0.5 0.5v17c0 0.276 0.224 0.5 0.5 0.5h9c0.276 0 0.5-0.224 0.5-0.5v-17c0-0.276-0.224-0.5-0.5-0.5h-9z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13.5 16h-7c-0.276 0-0.5-0.224-0.5-0.5v-13c0-0.276 0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5v13c0 0.276-0.224 0.5-0.5 0.5zM7 15h6v-12h-6v12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 18h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M2.5 18c-0.183 0-0.36-0.101-0.448-0.277l-1-2c-0.070-0.141-0.070-0.306 0-0.447l0.888-1.776-0.888-1.776c-0.070-0.141-0.070-0.306 0-0.447l0.888-1.776-0.888-1.776c-0.070-0.141-0.070-0.306 0-0.447l0.888-1.776-0.888-1.776c-0.070-0.141-0.070-0.306 0-0.447l1-2c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-0.888 1.776 0.888 1.776c0.070 0.141 0.070 0.306 0 0.447l-0.888 1.776 0.888 1.776c0.070 0.141 0.070 0.306 0 0.447l-0.888 1.776 0.888 1.776c0.070 0.141 0.070 0.306 0 0.447l-0.888 1.776 0.888 1.776c0.123 0.247 0.023 0.547-0.224 0.671-0.072 0.036-0.148 0.053-0.223 0.053z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17.5 18c-0.075 0-0.151-0.017-0.223-0.053-0.247-0.123-0.347-0.424-0.224-0.671l0.888-1.776-0.888-1.776c-0.070-0.141-0.070-0.306 0-0.447l0.888-1.776-0.888-1.776c-0.070-0.141-0.070-0.306 0-0.447l0.888-1.776-0.888-1.776c-0.070-0.141-0.070-0.306 0-0.447l0.888-1.776-0.888-1.776c-0.123-0.247-0.023-0.547 0.224-0.671s0.547-0.023 0.671 0.224l1 2c0.070 0.141 0.070 0.306 0 0.447l-0.888 1.776 0.888 1.776c0.070 0.141 0.070 0.306 0 0.447l-0.888 1.776 0.888 1.776c0.070 0.141 0.070 0.306 0 0.447l-0.888 1.776 0.888 1.776c0.070 0.141 0.070 0.306 0 0.447l-1 2c-0.088 0.175-0.264 0.276-0.448 0.277z"
  }, pathProps))));
}

LiniSmartphoneVibration.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSmartphoneVibration;