var React = require('react');

var PropTypes = require('prop-types');

function LiniFlashAuto({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFlashAuto';

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
    d: "M5.5 20c-0.098 0-0.197-0.029-0.283-0.088-0.199-0.136-0.272-0.395-0.174-0.615l3.243-7.297h-4.786c-0.202 0-0.385-0.122-0.462-0.309s-0.035-0.402 0.108-0.545l10-10c0.17-0.17 0.438-0.195 0.637-0.059s0.272 0.395 0.174 0.615l-3.243 7.297h4.786c0.202 0 0.385 0.122 0.462 0.309s0.035 0.402-0.108 0.545l-10 10c-0.097 0.097-0.225 0.146-0.354 0.146zM4.707 11h4.348c0.169 0 0.327 0.086 0.419 0.228s0.106 0.321 0.038 0.476l-2.462 5.539 7.242-7.242h-4.348c-0.169 0-0.327-0.086-0.419-0.228s-0.106-0.321-0.038-0.476l2.462-5.539-7.242 7.242z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 14c-1.378 0-2.5 1.122-2.5 2.5v3c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h3v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3c0-1.378-1.122-2.5-2.5-2.5zM15 17v-0.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5v0.5h-3z"
  }, pathProps))));
}

LiniFlashAuto.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFlashAuto;