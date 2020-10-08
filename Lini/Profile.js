var React = require('react');

var PropTypes = require('prop-types');

function LiniProfile({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniProfile';

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
    d: "M18.5 17h-17c-0.827 0-1.5-0.673-1.5-1.5v-11c0-0.827 0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5v11c0 0.827-0.673 1.5-1.5 1.5zM1.5 4c-0.276 0-0.5 0.224-0.5 0.5v11c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-11c0-0.276-0.224-0.5-0.5-0.5h-17z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M8.501 14c-0-0-0-0-0.001 0h-5c-0.276 0-0.5-0.224-0.5-0.5 0-0.066 0.011-0.661 0.388-1.265 0.352-0.563 1.091-1.235 2.612-1.235s2.259 0.672 2.612 1.235c0.338 0.541 0.382 1.074 0.388 1.227 0.001 0.012 0.001 0.025 0.001 0.038 0 0.276-0.224 0.5-0.5 0.5zM4.117 13h3.766c-0.035-0.086-0.081-0.177-0.14-0.267-0.322-0.487-0.908-0.733-1.743-0.733s-1.421 0.247-1.743 0.733c-0.059 0.090-0.105 0.18-0.14 0.267z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.5 8h-5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15.5 10h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15.5 12h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6 10c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2c0 1.103-0.897 2-2 2zM6 7c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.5 14h-5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniProfile.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniProfile;