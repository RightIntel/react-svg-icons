var React = require('react');

var PropTypes = require('prop-types');

function LiniDolly({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniDolly';

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
    d: "M16.5 20h-10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h10c0.276 0 0.5-0.224 0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.827-0.673 1.5-1.5 1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5.5 15c-0.276 0-0.5-0.224-0.5-0.5v-11c0-0.827-0.673-1.5-1.5-1.5h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c1.378 0 2.5 1.122 2.5 2.5v11c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4 17.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3.5 20c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM3.5 16c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.5 9h-0.586c0.056-0.157 0.086-0.325 0.086-0.5v-3c0-0.827-0.673-1.5-1.5-1.5h-4c-0.827 0-1.5 0.673-1.5 1.5v3c0 0.384 0.145 0.734 0.383 1-0.238 0.266-0.383 0.616-0.383 1v6c0 0.827 0.673 1.5 1.5 1.5h6c0.827 0 1.5-0.673 1.5-1.5v-6c0-0.827-0.673-1.5-1.5-1.5zM12 10v7h-1v-7h1zM8 5.5c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-3zM8 16.5v-6c0-0.276 0.224-0.5 0.5-0.5h1.5v7h-1.5c-0.276 0-0.5-0.224-0.5-0.5zM15 16.5c0 0.276-0.224 0.5-0.5 0.5h-1.5v-7h1.5c0.276 0 0.5 0.224 0.5 0.5v6z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11.5 7h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniDolly.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDolly;