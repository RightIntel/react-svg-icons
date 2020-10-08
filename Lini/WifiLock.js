var React = require('react');

var PropTypes = require('prop-types');

function LiniWifiLock({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniWifiLock';

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
    d: "M10.5 16c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM10.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.243 8.671c-0.145 0-0.288-0.063-0.387-0.183-1.814-2.217-4.495-3.488-7.356-3.488-0.64 0-1.279 0.064-1.901 0.19-0.271 0.055-0.535-0.12-0.589-0.391s0.12-0.535 0.391-0.589c0.687-0.139 1.393-0.21 2.099-0.21 3.162 0 6.125 1.405 8.13 3.855 0.175 0.214 0.143 0.529-0.070 0.704-0.093 0.076-0.205 0.113-0.316 0.113z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7 7.086v-0.586c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v0.586c-0.582 0.206-1 0.762-1 1.414v3c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-3c0-0.652-0.418-1.208-1-1.414zM4.5 5c0.827 0 1.5 0.673 1.5 1.5v0.5h-3v-0.5c0-0.827 0.673-1.5 1.5-1.5zM7 11.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v3z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13.947 12.968c-0.171 0-0.338-0.088-0.431-0.246-0.628-1.062-1.783-1.722-3.016-1.722-0.297 0-0.591 0.037-0.875 0.11-0.267 0.069-0.54-0.092-0.609-0.36s0.092-0.54 0.36-0.609c0.366-0.094 0.744-0.142 1.125-0.142 0.797 0 1.58 0.211 2.264 0.61 0.664 0.387 1.221 0.942 1.612 1.603 0.141 0.238 0.062 0.544-0.176 0.685-0.080 0.047-0.167 0.070-0.254 0.070z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.107 10.808c-0.152 0-0.302-0.069-0.401-0.2-1.241-1.657-3.139-2.608-5.206-2.608-0.311 0-0.624 0.022-0.929 0.066-0.273 0.039-0.527-0.151-0.566-0.424s0.151-0.527 0.424-0.566c0.352-0.050 0.712-0.076 1.071-0.076 1.202 0 2.35 0.276 3.412 0.82 1.013 0.518 1.91 1.275 2.594 2.189 0.166 0.221 0.121 0.534-0.1 0.7-0.090 0.067-0.195 0.1-0.299 0.1z"
  }, pathProps))));
}

LiniWifiLock.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniWifiLock;