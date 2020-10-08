var React = require('react');

var PropTypes = require('prop-types');

function LiniEngine({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniEngine';

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
    d: "M18.5 6h-1c-0.276 0-0.5 0.224-0.5 0.5v1.5h-1v-1.5c0-0.276-0.224-0.5-0.5-0.5h-1.5v-0.5c0-0.276-0.224-0.5-0.5-0.5h-3.5v-1h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.5v1h-3.5c-0.276 0-0.5 0.224-0.5 0.5v0.5h-2.5c-0.276 0-0.5 0.224-0.5 0.5v3.5h-1v-2.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v6c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.5h1v3.5c0 0.276 0.224 0.5 0.5 0.5h2.793l1.854 1.854c0.094 0.094 0.221 0.146 0.354 0.146h8c0.276 0 0.5-0.224 0.5-0.5v-2.5h1v1.5c0 0.276 0.224 0.5 0.5 0.5h1c0.827 0 1.5-0.673 1.5-1.5v-7c0-0.827-0.673-1.5-1.5-1.5zM19 14.5c0 0.276-0.224 0.5-0.5 0.5h-0.5v-1.5c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5v2.5h-7.293l-1.854-1.854c-0.094-0.094-0.221-0.146-0.354-0.146h-2.5v-7h2.5c0.276 0 0.5-0.224 0.5-0.5v-0.5h7v0.5c0 0.276 0.224 0.5 0.5 0.5h1.5v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5h0.5c0.276 0 0.5 0.224 0.5 0.5v7z"
  }, pathProps))));
}

LiniEngine.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEngine;