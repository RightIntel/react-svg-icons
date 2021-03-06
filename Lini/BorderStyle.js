var React = require('react');

var PropTypes = require('prop-types');

function LiniBorderStyle({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBorderStyle';

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
    d: "M9 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15 2h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15 18h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M1.5 19c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v16c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.5 3h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13.5 3h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17.5 5c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17.5 9c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17.5 13c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17.5 17c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniBorderStyle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBorderStyle;