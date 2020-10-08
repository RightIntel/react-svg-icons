var React = require('react');

var PropTypes = require('prop-types');

function LiniGlasses2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniGlasses2';

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
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M19.5 9h-0.627c-0.445-1.723-2.013-3-3.873-3-1.668 0-3.101 1.027-3.7 2.482-0.35-0.3-0.804-0.482-1.3-0.482s-0.95 0.182-1.3 0.482c-0.599-1.455-2.032-2.482-3.7-2.482-1.86 0-3.428 1.277-3.873 3h-0.627c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5c0 2.206 1.794 4 4 4s4-1.794 4-4c0-0.551 0.449-1 1-1s1 0.449 1 1c0 2.206 1.794 4 4 4s4-1.794 4-4h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM5 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM15 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
  }, pathProps))));
}

LiniGlasses2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniGlasses2;