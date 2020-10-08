var React = require('react');

var PropTypes = require('prop-types');

function LiniClipboardDown({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniClipboardDown';

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
    d: "M16.5 20h-14c-0.827 0-1.5-0.673-1.5-1.5v-14c0-0.827 0.673-1.5 1.5-1.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5 0.224-0.5 0.5v14c0 0.276 0.224 0.5 0.5 0.5h14c0.276 0 0.5-0.224 0.5-0.5v-14c0-0.276-0.224-0.5-0.5-0.5h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.827 0 1.5 0.673 1.5 1.5v14c0 0.827-0.673 1.5-1.5 1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13.501 5c-0 0-0 0-0.001 0h-8c-0.276 0-0.5-0.224-0.5-0.5 0-1.005 0.453-1.786 1.276-2.197 0.275-0.138 0.547-0.213 0.764-0.254 0.213-1.164 1.235-2.049 2.459-2.049s2.246 0.885 2.459 2.049c0.218 0.041 0.489 0.116 0.764 0.254 0.816 0.408 1.268 1.178 1.276 2.17 0.001 0.009 0.001 0.018 0.001 0.027 0 0.276-0.224 0.5-0.5 0.5zM6.060 4h6.88c-0.096-0.356-0.307-0.617-0.638-0.79-0.389-0.203-0.8-0.21-0.805-0.21-0.276 0-0.497-0.224-0.497-0.5 0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.276-0.224 0.5-0.5 0.5-0.001 0-0.413 0.007-0.802 0.21-0.331 0.173-0.542 0.433-0.638 0.79z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 3c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11.854 12.646c-0.195-0.195-0.512-0.195-0.707 0l-1.146 1.146v-5.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v5.293l-1.146-1.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.195-0.195 0.195-0.512-0-0.707z"
  }, pathProps))));
}

LiniClipboardDown.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniClipboardDown;