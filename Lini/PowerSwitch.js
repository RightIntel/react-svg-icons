var React = require('react');

var PropTypes = require('prop-types');

function LiniPowerSwitch({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPowerSwitch';

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
    d: "M9.5 12c-0.276 0-0.5-0.224-0.5-0.5v-9c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v9c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 19c-2.003 0-3.887-0.78-5.303-2.197s-2.197-3.3-2.197-5.303c0-1.648 0.525-3.212 1.517-4.523 0.96-1.268 2.324-2.215 3.84-2.666 0.265-0.079 0.543 0.072 0.622 0.337s-0.072 0.543-0.337 0.622c-2.733 0.814-4.643 3.376-4.643 6.231 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-2.855-1.909-5.417-4.643-6.231-0.265-0.079-0.415-0.357-0.337-0.622s0.357-0.415 0.622-0.337c1.517 0.451 2.88 1.398 3.84 2.666 0.993 1.311 1.517 2.875 1.517 4.523 0 2.003-0.78 3.887-2.197 5.303s-3.3 2.197-5.303 2.197z"
  }, pathProps))));
}

LiniPowerSwitch.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPowerSwitch;