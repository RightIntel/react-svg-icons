var React = require('react');

var PropTypes = require('prop-types');

function LiniSubtract({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniSubtract';

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
    d: "M16 7h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16 19h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14 19h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12 19h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 19h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8 19h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18 15h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18 13h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18 17h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18 9h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18 11h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6 17h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14 7h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11.5 1h-10c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h5.5v-5.5c0-0.276 0.224-0.5 0.5-0.5h5.5v-5.5c0-0.827-0.673-1.5-1.5-1.5zM7.5 7c-0.827 0-1.5 0.673-1.5 1.5v4.5h-4.5c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h10c0.276 0 0.5 0.224 0.5 0.5v4.5h-4.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6 15h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18 7h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18 19h1v1h-1v-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6 19h1v1h-1v-1z"
  }, pathProps))));
}

LiniSubtract.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSubtract;