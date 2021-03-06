var React = require('react');

var PropTypes = require('prop-types');

function LiniSunSmall({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniSunSmall';

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
    d: "M9.5 6c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4.5 11h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 11h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 18c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 8c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5-2.5-1.122-2.5-2.5 1.122-2.5 2.5-2.5zM9.5 7c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5v0z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12.786 7.214c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l1.414-1.414c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-1.414 1.414c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6.214 7.214c-0.128 0-0.256-0.049-0.354-0.146l-1.414-1.414c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1.414 1.414c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.2 16.2c-0.128 0-0.256-0.049-0.354-0.146l-1.414-1.414c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1.414 1.414c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4.8 16.2c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l1.414-1.414c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-1.414 1.414c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps))));
}

LiniSunSmall.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSunSmall;