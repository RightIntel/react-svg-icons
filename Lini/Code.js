var React = require('react');

var PropTypes = require('prop-types');

function LiniCode({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCode';

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
    d: "M5 15c-0.128 0-0.256-0.049-0.354-0.146l-4-4c-0.195-0.195-0.195-0.512 0-0.707l4-4c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-3.646 3.646 3.646 3.646c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15 15c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l3.646-3.646-3.646-3.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l4 4c0.195 0.195 0.195 0.512 0 0.707l-4 4c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.5 15c-0.091 0-0.182-0.025-0.265-0.076-0.234-0.146-0.305-0.455-0.159-0.689l5-8c0.146-0.234 0.455-0.305 0.689-0.159s0.305 0.455 0.159 0.689l-5 8c-0.095 0.152-0.258 0.235-0.424 0.235z"
  }, pathProps))));
}

LiniCode.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCode;