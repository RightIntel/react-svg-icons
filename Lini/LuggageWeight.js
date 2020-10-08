var React = require('react');

var PropTypes = require('prop-types');

function LiniLuggageWeight({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniLuggageWeight';

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
    d: "M16.5 4c-0.173 0-0.341-0.090-0.433-0.25-0.138-0.239-0.056-0.545 0.183-0.683l1.732-1c0.239-0.138 0.545-0.056 0.683 0.183s0.056 0.545-0.183 0.683l-1.732 1c-0.079 0.045-0.165 0.067-0.25 0.067z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.5 17h-1.5v-10.036c1.694-0.243 3-1.704 3-3.464 0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 1.76 1.306 3.221 3 3.464v10.036h-14.5c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5zM14 3.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5-2.5-1.122-2.5-2.5zM18.5 19h-17c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11.5 8h-1.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-2c-0.827 0-1.5 0.673-1.5 1.5v0.5h-1.5c-0.827 0-1.5 0.673-1.5 1.5v5c0 0.827 0.673 1.5 1.5 1.5h8c0.827 0 1.5-0.673 1.5-1.5v-5c0-0.827-0.673-1.5-1.5-1.5zM6 7.5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v0.5h-3v-0.5zM12 14.5c0 0.276-0.224 0.5-0.5 0.5h-8c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5v5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4.5 14c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 14c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniLuggageWeight.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLuggageWeight;