var React = require('react');

var PropTypes = require('prop-types');

function LiniSignal60({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniSignal60';

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
    d: "M2.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5zM1 18h1v-2h-1v2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5zM5 18h1v-4h-1v4z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v8c0 0.276-0.224 0.5-0.5 0.5zM9 18h1v-7h-1v7z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniSignal60.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSignal60;