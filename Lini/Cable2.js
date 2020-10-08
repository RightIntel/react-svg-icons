var React = require('react');

var PropTypes = require('prop-types');

function LiniCable2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCable2';

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
    d: "M6.5 14h-3c-0.276 0-0.5-0.224-0.5-0.5v-1.55c1.14-0.232 2-1.242 2-2.45v-7c0-0.276-0.224-0.5-0.5-0.5h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5v7c0 1.207 0.86 2.217 2 2.45v1.55c0 0.827 0.673 1.5 1.5 1.5h3c0.276 0 0.5 0.224 0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4c0-0.827-0.673-1.5-1.5-1.5zM4 3v1h-3v-1h3zM1 9.5v-4.5h3v4.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11.5 2h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5v7c0 1.207 0.86 2.217 2 2.45v7.55c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-7.55c1.14-0.232 2-1.242 2-2.45v-7c0-0.276-0.224-0.5-0.5-0.5zM11 3v1h-3v-1h3zM11 9.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5v-4.5h3v4.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.5 2h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5v7c0 1.207 0.86 2.217 2 2.45v1.55c0 0.276-0.224 0.5-0.5 0.5h-3c-0.827 0-1.5 0.673-1.5 1.5v4c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h3c0.827 0 1.5-0.673 1.5-1.5v-1.55c1.14-0.232 2-1.242 2-2.45v-7c0-0.276-0.224-0.5-0.5-0.5zM18 3v1h-3v-1h3zM18 9.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5v-4.5h3v4.5z"
  }, pathProps))));
}

LiniCable2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCable2;