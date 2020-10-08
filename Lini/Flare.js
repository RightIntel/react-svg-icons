var React = require('react');

var PropTypes = require('prop-types');

function LiniFlare({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFlare';

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
    d: "M7.507 8.507c-0.128 0-0.256-0.049-0.354-0.146l-2.121-2.121c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.121 2.121c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M13.614 15.614c-0.128 0-0.256-0.049-0.354-0.146l-2.121-2.121c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.121 2.121c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M5.386 15.614c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l2.121-2.121c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2.121 2.121c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11.493 8.507c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l2.121-2.121c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2.121 2.121c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 8c-0.276 0-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6.5 11h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 20c-0.276 0-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.5 11h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 12c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM9.5 10c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniFlare.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFlare;