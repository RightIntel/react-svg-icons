var React = require('react');

var PropTypes = require('prop-types');

function LiniJump2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniJump2';

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
    d: "M17.5 8c-0.276 0-0.5 0.224-0.5 0.5v2.652c-1.97-2.011-4.666-3.152-7.5-3.152-1.679 0-3.284 0.385-4.77 1.144-1.417 0.724-2.672 1.78-3.63 3.055-0.166 0.221-0.121 0.534 0.099 0.7 0.090 0.068 0.195 0.1 0.3 0.1 0.152 0 0.302-0.069 0.4-0.2 1.814-2.415 4.584-3.799 7.6-3.799 2.633 0 5.134 1.088 6.928 3h-2.928c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9 15c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM9 12c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z"
  }, pathProps))));
}

LiniJump2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniJump2;