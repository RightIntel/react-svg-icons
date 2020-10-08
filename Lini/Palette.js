var React = require('react');

var PropTypes = require('prop-types');

function LiniPalette({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPalette';

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
    d: "M6.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM6.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3.5 11c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5c0 0.827-0.673 1.5-1.5 1.5zM3.5 9c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 7c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM10.5 5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 19c-2.655 0-5.155-0.874-7.040-2.461-0.925-0.779-1.652-1.687-2.161-2.701-0.531-1.057-0.8-2.18-0.8-3.338s0.269-2.282 0.8-3.338c0.509-1.014 1.236-1.922 2.161-2.701 1.884-1.587 4.384-2.461 7.040-2.461s5.155 0.874 7.040 2.461c0.925 0.779 1.652 1.687 2.161 2.701 0.531 1.057 0.8 2.18 0.8 3.338 0 1.852-0.825 2.512-1.597 2.512-0.645 0-1.309-0.452-1.822-1.239-0.324-0.497-0.666-0.771-0.963-0.771-0.099 0-0.197 0.030-0.299 0.091-0.562 0.336-0.23 1.245 0.018 1.756 0.802 1.654 0.868 3.098 0.192 4.178-0.82 1.31-2.681 1.974-5.53 1.974zM10 3c-4.963 0-9 3.364-9 7.5s4.037 7.5 9 7.5c1.366 0 2.474-0.159 3.293-0.473 0.649-0.249 1.117-0.596 1.39-1.032 0.611-0.976 0.204-2.284-0.245-3.21-0.96-1.98-0.063-2.793 0.368-3.051 0.258-0.154 0.531-0.233 0.813-0.233 0.458 0 1.142 0.213 1.801 1.226 0.377 0.579 0.766 0.785 0.984 0.785 0.357 0 0.597-0.608 0.597-1.512 0-4.136-4.037-7.5-9-7.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11 16c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM11 13c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z"
  }, pathProps))));
}

LiniPalette.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPalette;