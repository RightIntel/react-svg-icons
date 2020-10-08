var React = require('react');

var PropTypes = require('prop-types');

function LiniBalloon({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniBalloon';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.5 19c-0.004-0-0.007 0-0.011 0-4.125 0-7.646-1.666-10.219-4.826l0.453-0.227c0.144-0.072 0.244-0.208 0.27-0.367s-0.026-0.32-0.14-0.434l-1.143-1.143c0.057-0.049 0.113-0.099 0.168-0.152 0.557-0.53 1.025-1.216 1.394-2.039 0.718-1.604 0.956-3.505 0.655-5.216-0.256-1.452-0.899-2.639-1.86-3.433-0.897-0.742-2.050-1.134-3.335-1.134-0.384 0-0.78 0.035-1.177 0.105-1.523 0.269-2.748 0.974-3.543 2.040-0.853 1.143-1.146 2.637-0.85 4.32 0.28 1.586 1.056 3.199 2.131 4.427 1.169 1.335 2.55 2.071 3.891 2.071 0.147 0 0.294-0.010 0.439-0.027l0.39 1.649c0.035 0.149 0.136 0.273 0.275 0.338 0.067 0.031 0.14 0.047 0.212 0.047 0.077 0 0.153-0.018 0.224-0.053l0.632-0.316c1.423 1.8 3.123 3.169 5.058 4.073 1.842 0.86 3.886 1.296 6.076 1.296 0.004 0 0.008 0 0.011 0 0.276-0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM3.046 10.264c-0.958-1.094-1.65-2.531-1.899-3.942-0.248-1.405-0.017-2.632 0.666-3.548 0.64-0.858 1.648-1.429 2.915-1.653 0.34-0.060 0.677-0.090 1.003-0.090 2.256 0 3.791 1.363 4.21 3.74 0.264 1.497 0.046 3.229-0.583 4.634-0.648 1.449-1.614 2.354-2.72 2.549-0.149 0.026-0.302 0.040-0.455 0.040-1.048-0-2.162-0.614-3.138-1.729zM7.591 12.71c0.095-0.040 0.189-0.083 0.281-0.131l0.784 0.784-0.815 0.407-0.251-1.061z",
    fill: color
  })));
}

LiniBalloon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBalloon;