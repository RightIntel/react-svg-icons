var React = require('react');

var PropTypes = require('prop-types');

function LiniTablet({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniTablet';

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
    d: "M15.5 20h-12c-0.827 0-1.5-0.673-1.5-1.5v-17c0-0.827 0.673-1.5 1.5-1.5h12c0.827 0 1.5 0.673 1.5 1.5v17c0 0.827-0.673 1.5-1.5 1.5zM3.5 1c-0.276 0-0.5 0.224-0.5 0.5v17c0 0.276 0.224 0.5 0.5 0.5h12c0.276 0 0.5-0.224 0.5-0.5v-17c0-0.276-0.224-0.5-0.5-0.5h-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 2.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 18c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM9.5 16c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniTablet.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTablet;