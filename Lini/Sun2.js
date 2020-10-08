var React = require('react');

var PropTypes = require('prop-types');

function LiniSun2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniSun2';

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
    d: "M9.5 15c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5zM9.5 7c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5.507 6.507c-0.128 0-0.256-0.049-0.354-0.146l-2.121-2.121c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.121 2.121c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3.386 17.614c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l2.121-2.121c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2.121 2.121c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13.493 6.507c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l2.121-2.121c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2.121 2.121c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3.5 11h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 20c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.5 11h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 14c-1.378 0-2.5 1.122-2.5 2.5v3c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h3v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3c0-1.378-1.122-2.5-2.5-2.5zM15 17v-0.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5v0.5h-3z"
  }, pathProps))));
}

LiniSun2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSun2;