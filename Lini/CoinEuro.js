var React = require('react');

var PropTypes = require('prop-types');

function LiniCoinEuro({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCoinEuro';

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
    d: "M16.107 4.527c-1.773-0.985-4.119-1.527-6.607-1.527s-4.834 0.542-6.607 1.527c-1.866 1.037-2.893 2.447-2.893 3.973v3c0 1.525 1.027 2.936 2.893 3.973 1.773 0.985 4.119 1.527 6.607 1.527s4.834-0.542 6.607-1.527c1.866-1.037 2.893-2.447 2.893-3.973v-3c0-1.525-1.027-2.936-2.893-3.973zM3.379 5.402c1.627-0.904 3.801-1.402 6.121-1.402s4.494 0.498 6.121 1.402c1.534 0.852 2.379 1.953 2.379 3.098s-0.845 2.246-2.379 3.098c-1.627 0.904-3.801 1.402-6.121 1.402s-4.494-0.498-6.121-1.402c-1.534-0.852-2.379-1.953-2.379-3.098s0.845-2.246 2.379-3.098zM18 11.5c0 1.146-0.845 2.246-2.379 3.098-1.627 0.904-3.801 1.402-6.121 1.402s-4.494-0.498-6.121-1.402c-1.534-0.852-2.379-1.953-2.379-3.098v-0.513c0.474 0.548 1.109 1.050 1.893 1.486 1.773 0.985 4.119 1.527 6.607 1.527s4.834-0.542 6.607-1.527c0.784-0.436 1.419-0.937 1.893-1.486v0.513z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M12.751 10.068c-0.239-0.139-0.545-0.058-0.684 0.181-0.27 0.463-0.767 0.751-1.298 0.751h-2.27c-0.652 0-1.208-0.418-1.414-1h2.414c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5v-1h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.414c0.206-0.582 0.762-1 1.414-1l2.27 0c0.531 0 1.028 0.288 1.298 0.751 0.139 0.239 0.445 0.32 0.684 0.181s0.32-0.445 0.181-0.684c-0.448-0.77-1.277-1.249-2.162-1.249l-2.27-0c-1.207 0-2.217 0.86-2.45 2h-0.55c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.55c0.232 1.14 1.242 2 2.45 2h2.27c0.886 0 1.714-0.478 2.162-1.249 0.139-0.239 0.058-0.545-0.181-0.684z"
  }, pathProps))));
}

LiniCoinEuro.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCoinEuro;