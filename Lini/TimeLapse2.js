var React = require('react');

var PropTypes = require('prop-types');

function LiniTimeLapse2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniTimeLapse2';

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
    d: "M18.5 18h-9c-0.827 0-1.5-0.673-1.5-1.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h9c0.276 0 0.5-0.224 0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5h-1c-0.133 0-0.26-0.053-0.354-0.146l-0.854-0.854h-3.793c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.133 0 0.26 0.053 0.354 0.146l0.854 0.854h0.793c0.827 0 1.5 0.673 1.5 1.5v6c0 0.827-0.673 1.5-1.5 1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14 16c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM14 11c-1.103 0-2 0.897-2 2s0.897 2 2 2 2-0.897 2-2-0.897-2-2-2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.398 6.992c-0.233 0-0.441-0.163-0.489-0.4-0.362-1.769-1.739-3.143-3.508-3.503-0.271-0.055-0.445-0.319-0.391-0.589s0.319-0.446 0.589-0.391c1.056 0.214 2.020 0.732 2.787 1.498s1.286 1.728 1.502 2.784c0.055 0.271-0.119 0.535-0.39 0.59-0.034 0.007-0.067 0.010-0.101 0.010z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M0.601 7c-0.033 0-0.066-0.003-0.1-0.010-0.271-0.055-0.445-0.319-0.391-0.589 0.215-1.058 0.734-2.022 1.501-2.79s1.732-1.286 2.79-1.501c0.271-0.055 0.535 0.12 0.589 0.391s-0.12 0.535-0.391 0.589c-1.772 0.36-3.15 1.737-3.509 3.509-0.048 0.237-0.257 0.401-0.489 0.401z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4.501 12.9c-0.033 0-0.066-0.003-0.1-0.010-1.058-0.215-2.022-0.734-2.79-1.501s-1.286-1.732-1.501-2.79c-0.055-0.271 0.12-0.534 0.391-0.589s0.535 0.12 0.589 0.391c0.36 1.772 1.737 3.15 3.509 3.509 0.271 0.055 0.445 0.319 0.391 0.589-0.048 0.237-0.257 0.401-0.489 0.401z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6.499 12.9c-0.233 0-0.441-0.164-0.489-0.401-0.055-0.271 0.12-0.534 0.391-0.589 1.772-0.36 3.15-1.737 3.509-3.509 0.055-0.271 0.319-0.446 0.589-0.391s0.445 0.319 0.391 0.589c-0.215 1.058-0.734 2.022-1.501 2.79s-1.732 1.286-2.79 1.501c-0.034 0.007-0.067 0.010-0.1 0.010z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5.5 8c-0.128 0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2 2c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps))));
}

LiniTimeLapse2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTimeLapse2;