var React = require('react');

var PropTypes = require('prop-types');

function LiniPen2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPen2';

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
    d: "M15.9 12.2c-2.61-3.48-4.136-8.475-4.376-9.604 0.299-0.281 0.476-0.677 0.476-1.096 0-0.827-0.673-1.5-1.5-1.5-0.298 0-0.689 0.029-1 0.231-0.311-0.202-0.702-0.231-1-0.231-0.827 0-1.5 0.673-1.5 1.5 0 0.419 0.177 0.815 0.476 1.096-0.24 1.129-1.766 6.124-4.376 9.604-0.149 0.199-0.129 0.478 0.046 0.654 0.728 0.728 2.519 2.79 2.812 4.261-0.408 0.171-0.821 0.534-1.234 1.085-0.397 0.53-0.661 1.054-0.672 1.076-0.077 0.155-0.069 0.339 0.022 0.486s0.252 0.237 0.425 0.237h10c0.173 0 0.334-0.090 0.425-0.237s0.099-0.331 0.022-0.486c-0.011-0.022-0.275-0.546-0.672-1.076-0.413-0.551-0.826-0.914-1.234-1.085 0.294-1.47 2.085-3.533 2.812-4.261 0.176-0.176 0.196-0.454 0.047-0.654zM9.5 12c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5zM13.62 19h-8.239c0.367-0.529 0.812-1 1.12-1h6c0.308 0 0.753 0.471 1.12 1zM13.6 13.95c-0.882 1.176-1.402 2.199-1.554 3.050h-5.093c-0.151-0.851-0.672-1.874-1.554-3.050-0.479-0.639-0.955-1.175-1.249-1.493 1.464-2.054 2.539-4.472 3.196-6.181 0.341-0.888 0.653-1.806 0.878-2.587 0.328-1.137 0.293-1.308 0.272-1.41-0.030-0.147-0.12-0.273-0.247-0.347-0.154-0.089-0.25-0.255-0.25-0.433 0-0.276 0.224-0.5 0.5-0.5 0.38 0 0.463 0.076 0.464 0.077 0.036 0.053 0.036 0.276 0.036 0.423v9.586c-0.582 0.206-1 0.762-1 1.414 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.652-0.418-1.208-1-1.414v-9.586c0-0.147 0-0.37 0.036-0.423 0.001-0.001 0.084-0.077 0.464-0.077 0.276 0 0.5 0.224 0.5 0.5 0 0.178-0.096 0.344-0.25 0.433-0.127 0.073-0.217 0.2-0.247 0.347-0.021 0.102-0.056 0.273 0.272 1.41 0.225 0.78 0.537 1.699 0.878 2.587 0.657 1.708 1.732 4.126 3.196 6.181-0.295 0.318-0.77 0.853-1.249 1.493z"
  }, pathProps))));
}

LiniPen2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPen2;