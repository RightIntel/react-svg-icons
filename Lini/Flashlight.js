var React = require('react');

var PropTypes = require('prop-types');

function LiniFlashlight({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFlashlight';

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
    d: "M13.5 0h-8c-0.827 0-1.5 0.673-1.5 1.5v2c0 0.627 0.22 1.557 0.5 2.118l1.106 2.211c0.21 0.42 0.394 1.201 0.394 1.671v8c0 1.378 1.122 2.5 2.5 2.5h2c1.378 0 2.5-1.122 2.5-2.5v-8c0-0.47 0.184-1.251 0.394-1.671l1.106-2.211c0.28-0.561 0.5-1.491 0.5-2.118v-2c0-0.827-0.673-1.5-1.5-1.5zM5.5 1h8c0.276 0 0.5 0.224 0.5 0.5v0.5h-9v-0.5c0-0.276 0.224-0.5 0.5-0.5zM13.606 5.171l-1.106 2.211c-0.28 0.561-0.5 1.491-0.5 2.118v8c0 0.827-0.673 1.5-1.5 1.5h-2c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.627-0.22-1.557-0.5-2.118l-1.106-2.211c-0.21-0.42-0.394-1.201-0.394-1.671v-0.5h9v0.5c0 0.47-0.184 1.251-0.394 1.671z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 13c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM9.5 11c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniFlashlight.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFlashlight;