var React = require('react');

var PropTypes = require('prop-types');

function LiniHaircut({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniHaircut';

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
    d: "M5.017 14.515c0.036-0.262 0.132-0.497 0.294-0.726 0.159-0.226 0.106-0.538-0.12-0.697s-0.538-0.106-0.697 0.12c-0.192 0.272-0.326 0.556-0.406 0.859-0.189-0.046-0.385-0.070-0.588-0.070-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5c0-0.808-0.386-1.528-0.983-1.985zM3.5 18c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 19c-0.276 0-0.5-0.224-0.5-0.5 0-0-0-0.001-0-0.001 0.607-0.457 1-1.183 1-1.999 0-1.378-1.122-2.5-2.5-2.5-0.172 0-0.339 0.017-0.501 0.050-0.014-5.162-0.183-9.015-0.503-11.457-0.181-1.378-0.397-2.201-0.642-2.447-0.123-0.123-0.3-0.173-0.468-0.133s-0.305 0.164-0.359 0.328c-0.042 0.126-1.026 3.146-1.026 9.158 0 1.774 0.67 2.648 1.208 3.35 0.397 0.518 0.72 0.939 0.781 1.66-0.601 0.457-0.989 1.179-0.989 1.99 0 1.378 1.122 2.5 2.5 2.5 0.194 0 0.383-0.023 0.565-0.065 0.187 0.616 0.76 1.065 1.435 1.065 0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM6 9.5c0-3.013 0.258-5.266 0.508-6.743 0.206 1.598 0.423 4.446 0.478 9.465-0.509-0.664-0.987-1.3-0.987-2.722zM7 16.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5-1.5-0.673-1.5-1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17 16.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 0h-3c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3c0.827 0 1.5 0.673 1.5 1.5 0 7.069-1.63 9.411-2.821 11.121-0.633 0.909-1.179 1.693-1.179 2.879 0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5v-14c0-1.378-1.122-2.5-2.5-2.5zM18 16.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5c0-0.872 0.398-1.443 1-2.308 0.615-0.883 1.391-1.998 2-3.879v6.187z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 3h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 5h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 7h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 9h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15.5 11h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.5 13h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniHaircut.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniHaircut;