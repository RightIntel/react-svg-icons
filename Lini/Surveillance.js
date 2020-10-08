var React = require('react');

var PropTypes = require('prop-types');

function LiniSurveillance({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniSurveillance';

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
    d: "M13.006 5.5c0 0.276-0.225 0.5-0.503 0.5s-0.503-0.224-0.503-0.5c0-0.276 0.225-0.5 0.503-0.5s0.503 0.224 0.503 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M19.5 14c-0.276 0-0.5 0.224-0.5 0.5v1.5h-3.5c-0.827 0-1.5-0.673-1.5-1.5v-2.293l2.647-2.646c0.585-0.585 0.585-1.536-0-2.121l-0.441-0.441c0.525-0.588 0.506-1.494-0.059-2.059l-2.586-2.586c-0.283-0.283-0.659-0.438-1.061-0.438s-0.778 0.156-1.061 0.438l-10.793 10.793c-0.143 0.143-0.186 0.358-0.108 0.545s0.26 0.309 0.462 0.309h2.793l-0.646 0.646c-0.195 0.195-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l0.646-0.646 0.439 0.439c0.292 0.292 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439l3.939-3.939v1.293c0 1.378 1.122 2.5 2.5 2.5h3.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5zM12.146 3.061c0.094-0.094 0.219-0.145 0.354-0.145s0.26 0.052 0.354 0.145l2.586 2.586c0.195 0.195 0.195 0.512 0 0.707l-6.646 6.646h-6.586l9.939-9.939zM5.5 16.293l-1.293-1.293 0.293-0.293 1.293 1.293-0.293 0.293zM8.354 16.439c-0.195 0.195-0.512 0.195-0.707 0l-2.439-2.439h3.793c0.133 0 0.26-0.053 0.354-0.146l6.146-6.146 0.439 0.439c0.195 0.195 0.195 0.512 0 0.707l-7.586 7.586z"
  }, pathProps))));
}

LiniSurveillance.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSurveillance;