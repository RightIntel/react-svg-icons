var React = require('react');

var PropTypes = require('prop-types');

function LiniIcons2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniIcons2';

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
    d: "M3.5 19h-2c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.827 0.673-1.5 1.5-1.5h2c0.827 0 1.5 0.673 1.5 1.5v2c0 0.827-0.673 1.5-1.5 1.5zM1.5 15c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 19h-2c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.827 0.673-1.5 1.5-1.5h2c0.827 0 1.5 0.673 1.5 1.5v2c0 0.827-0.673 1.5-1.5 1.5zM8.5 15c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17.5 19h-2c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.827 0.673-1.5 1.5-1.5h2c0.827 0 1.5 0.673 1.5 1.5v2c0 0.827-0.673 1.5-1.5 1.5zM15.5 15c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3.5 12h-2c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.827 0.673-1.5 1.5-1.5h2c0.827 0 1.5 0.673 1.5 1.5v2c0 0.827-0.673 1.5-1.5 1.5zM1.5 8c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 12h-2c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.827 0.673-1.5 1.5-1.5h2c0.827 0 1.5 0.673 1.5 1.5v2c0 0.827-0.673 1.5-1.5 1.5zM8.5 8c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17.5 12h-2c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.827 0.673-1.5 1.5-1.5h2c0.827 0 1.5 0.673 1.5 1.5v2c0 0.827-0.673 1.5-1.5 1.5zM15.5 8c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3.5 5h-2c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.827 0.673-1.5 1.5-1.5h2c0.827 0 1.5 0.673 1.5 1.5v2c0 0.827-0.673 1.5-1.5 1.5zM1.5 1c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 5h-2c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.827 0.673-1.5 1.5-1.5h2c0.827 0 1.5 0.673 1.5 1.5v2c0 0.827-0.673 1.5-1.5 1.5zM8.5 1c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17.5 5h-2c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.827 0.673-1.5 1.5-1.5h2c0.827 0 1.5 0.673 1.5 1.5v2c0 0.827-0.673 1.5-1.5 1.5zM15.5 1c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-2z"
  }, pathProps))));
}

LiniIcons2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniIcons2;