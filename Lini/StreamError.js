var React = require('react');

var PropTypes = require('prop-types');

function LiniStreamError({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniStreamError';

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
    d: "M17.5 16h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5-0.224 0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.827-0.673 1.5-1.5 1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M3.5 16h-2c-0.827 0-1.5-0.673-1.5-1.5v-12c0-0.827 0.673-1.5 1.5-1.5h9c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-9c-0.276 0-0.5 0.224-0.5 0.5v12c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 19c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM9.5 17c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6.053 15.968c-0.086 0-0.174-0.022-0.254-0.070-0.238-0.14-0.317-0.447-0.176-0.685 0.391-0.662 0.949-1.216 1.612-1.603 0.685-0.399 1.468-0.61 2.264-0.61s1.58 0.211 2.264 0.61c0.664 0.387 1.221 0.942 1.612 1.603 0.141 0.238 0.062 0.544-0.176 0.685s-0.544 0.062-0.685-0.176c-0.628-1.062-1.783-1.722-3.016-1.722s-2.388 0.66-3.016 1.722c-0.093 0.158-0.26 0.246-0.431 0.246z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15.107 13.808c-0.152 0-0.302-0.069-0.401-0.2-1.241-1.657-3.139-2.608-5.206-2.608s-3.965 0.95-5.206 2.608c-0.166 0.221-0.479 0.266-0.7 0.1s-0.266-0.479-0.1-0.7c0.684-0.913 1.581-1.67 2.594-2.189 1.063-0.544 2.211-0.82 3.412-0.82s2.35 0.276 3.412 0.82c1.013 0.518 1.91 1.275 2.594 2.189 0.166 0.221 0.121 0.534-0.1 0.7-0.090 0.067-0.195 0.1-0.299 0.1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.207 4l2.146-2.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-2.146 2.146-2.146-2.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2.146 2.146-2.146 2.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2.146-2.146 2.146 2.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-2.146-2.146z"
  }, pathProps))));
}

LiniStreamError.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniStreamError;