var React = require('react');

var PropTypes = require('prop-types');

function LiniVector({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniVector';

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
    d: "M18.5 10.010c-0.228 0-0.445 0.052-0.639 0.144l-2.861-2.861v-1.793c0-0.276-0.224-0.5-0.5-0.5h-1.793l-2.854-2.854c0.094-0.196 0.147-0.415 0.147-0.646 0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5 0.673 1.5 1.5 1.5c0.231 0 0.45-0.053 0.646-0.147l1.355 1.355c-1.161-0.284-2.423-0.265-3.773 0.058-1.594 0.382-3.016 1.123-4.041 1.77-0.058-0.023-0.121-0.036-0.187-0.036h-2c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.477c2.089-1.369 5.808-3.131 9-1.097v1.574c0 0.276 0.224 0.5 0.5 0.5h1.573c2.092 3.293 0.058 7.23-1.097 9h-1.476c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.066-0.013-0.129-0.036-0.187 0.646-1.025 1.387-2.447 1.77-4.041 0.324-1.351 0.343-2.612 0.058-3.773l1.36 1.361c-0.094 0.196-0.147 0.415-0.147 0.646 0 0.824 0.671 1.495 1.495 1.495s1.495-0.671 1.495-1.495-0.671-1.495-1.495-1.495zM2 8h-1v-1h1v1zM13 19h-1v-1h1v1zM8 1.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM13 6h1v1h-1v-1zM18.5 12c-0.273 0-0.495-0.222-0.495-0.495s0.222-0.495 0.495-0.495 0.495 0.222 0.495 0.495-0.222 0.495-0.495 0.495z"
  }, pathProps))));
}

LiniVector.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniVector;