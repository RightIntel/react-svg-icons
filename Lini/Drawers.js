var React = require('react');

var PropTypes = require('prop-types');

function LiniDrawers({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniDrawers';

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
    d: "M15.5 3h-11c-0.827 0-1.5 0.673-1.5 1.5v12c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5h12v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-12c0-0.827-0.673-1.5-1.5-1.5zM4.5 4h11c0.276 0 0.5 0.224 0.5 0.5v2.5h-12v-2.5c0-0.276 0.224-0.5 0.5-0.5zM16 8v3h-12v-3h12zM4 15v-3h12v3h-12z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 6h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 10h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 14h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniDrawers.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDrawers;