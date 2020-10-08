var React = require('react');

var PropTypes = require('prop-types');

function LiniPlane({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPlane';

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
    d: "M13.5 20c-0.040 0-0.081-0.005-0.121-0.015l-3.879-0.97-3.879 0.97c-0.149 0.037-0.308 0.004-0.429-0.091s-0.192-0.24-0.192-0.394v-2c0-0.174 0.091-0.336 0.239-0.426l2.182-1.336-0.342-3.421-6.331 3.618c-0.155 0.088-0.345 0.088-0.499-0.002s-0.249-0.254-0.249-0.432v-2c0-0.146 0.064-0.285 0.175-0.38l6.826-5.851c0.013-2.458 0.232-4.307 0.653-5.498 0.517-1.464 1.289-1.771 1.847-1.771s1.33 0.307 1.847 1.771c0.421 1.192 0.64 3.041 0.653 5.498l6.826 5.851c0.111 0.095 0.175 0.234 0.175 0.38v2c0 0.178-0.095 0.343-0.249 0.432s-0.344 0.090-0.499 0.002l-6.331-3.618-0.342 3.421 2.182 1.336c0.148 0.091 0.239 0.252 0.239 0.426v2c0 0.154-0.071 0.299-0.192 0.394-0.089 0.069-0.197 0.106-0.308 0.106zM9.5 18c0.041 0 0.081 0.005 0.121 0.015l3.379 0.845v-1.079l-2.211-1.354c-0.164-0.1-0.256-0.285-0.236-0.476l0.45-4.5c0.017-0.169 0.118-0.317 0.268-0.395s0.33-0.074 0.477 0.010l6.252 3.572v-0.908l-6.825-5.85c-0.111-0.095-0.175-0.234-0.175-0.38 0-4.798-0.808-6.5-1.5-6.5s-1.5 1.702-1.5 6.5c0 0.146-0.064 0.285-0.175 0.38l-6.825 5.85v0.908l6.252-3.573c0.147-0.084 0.327-0.088 0.477-0.010s0.252 0.226 0.268 0.395l0.45 4.5c0.019 0.191-0.073 0.376-0.236 0.476l-2.211 1.354v1.079l3.379-0.845c0.040-0.010 0.081-0.015 0.121-0.015z"
  }, pathProps))));
}

LiniPlane.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPlane;