var React = require('react');

var PropTypes = require('prop-types');

function LiniCoinYen({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCoinYen';

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
    d: "M16.107 4.527c-1.773-0.985-4.119-1.527-6.607-1.527s-4.834 0.542-6.607 1.527c-1.866 1.037-2.893 2.447-2.893 3.973v3c0 1.525 1.027 2.936 2.893 3.973 1.773 0.985 4.119 1.527 6.607 1.527s4.834-0.542 6.607-1.527c1.866-1.037 2.893-2.447 2.893-3.973v-3c0-1.525-1.027-2.936-2.893-3.973zM3.379 5.402c1.627-0.904 3.801-1.402 6.121-1.402s4.494 0.498 6.121 1.402c1.534 0.852 2.379 1.953 2.379 3.098s-0.845 2.246-2.379 3.098c-1.627 0.904-3.801 1.402-6.121 1.402s-4.494-0.498-6.121-1.402c-1.534-0.852-2.379-1.953-2.379-3.098s0.845-2.246 2.379-3.098zM18 11.5c0 1.146-0.845 2.246-2.379 3.098-1.627 0.904-3.801 1.402-6.121 1.402s-4.494-0.498-6.121-1.402c-1.534-0.852-2.379-1.953-2.379-3.098v-0.513c0.474 0.548 1.109 1.050 1.893 1.486 1.773 0.985 4.119 1.527 6.607 1.527s4.834-0.542 6.607-1.527c0.784-0.436 1.419-0.937 1.893-1.486v0.513z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12.5 9h-2.5v-1h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.575l1.387-1.11c0.216-0.172 0.251-0.487 0.078-0.703s-0.487-0.251-0.703-0.078l-2.188 1.75-2.188-1.75c-0.216-0.173-0.53-0.138-0.703 0.078s-0.138 0.53 0.078 0.703l1.387 1.11h-1.575c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.5v1h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniCoinYen.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCoinYen;