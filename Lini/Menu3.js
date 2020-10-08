var React = require('react');

var PropTypes = require('prop-types');

function LiniMenu3({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniMenu3';

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
    d: "M14.5 5.5c-0.128 0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1.646 1.646 1.646-1.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2 2c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.5 0h-17c-0.827 0-1.5 0.673-1.5 1.5v5c0 0.827 0.673 1.5 1.5 1.5h2.5v10.5c0 0.827 0.673 1.5 1.5 1.5h13c0.827 0 1.5-0.673 1.5-1.5v-17c0-0.827-0.673-1.5-1.5-1.5zM1 6.5v-5c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5h-17c-0.276 0-0.5-0.224-0.5-0.5zM18.5 19h-13c-0.276 0-0.5-0.224-0.5-0.5v-10.5h13.5c0.175 0 0.343-0.031 0.5-0.086v10.586c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 11h-9c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h9c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 14h-9c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h9c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 17h-9c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h9c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniMenu3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMenu3;