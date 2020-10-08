var React = require('react');

var PropTypes = require('prop-types');

function LiniWifiLow2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniWifiLow2';

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
    d: "M13.947 12.968c-0.171 0-0.338-0.088-0.431-0.246-0.188-0.318-0.424-0.603-0.701-0.848-0.207-0.183-0.227-0.499-0.044-0.706s0.499-0.227 0.706-0.044c0.356 0.314 0.659 0.681 0.9 1.089 0.141 0.238 0.062 0.544-0.176 0.685-0.080 0.047-0.167 0.070-0.254 0.070z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 11.126c-0.223 0-0.426-0.15-0.484-0.376-0.069-0.267 0.092-0.54 0.36-0.609 0.731-0.188 1.518-0.188 2.249 0 0.267 0.069 0.428 0.341 0.36 0.609s-0.342 0.428-0.609 0.36c-0.569-0.146-1.183-0.146-1.751 0-0.042 0.011-0.084 0.016-0.125 0.016z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.053 12.968c-0.086 0-0.174-0.022-0.254-0.070-0.238-0.14-0.317-0.447-0.176-0.685 0.241-0.408 0.544-0.774 0.9-1.089 0.207-0.183 0.523-0.163 0.706 0.044s0.163 0.523-0.044 0.706c-0.277 0.245-0.513 0.53-0.701 0.848-0.093 0.158-0.26 0.246-0.431 0.246z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.107 10.808c-0.152 0-0.302-0.069-0.401-0.2-0.508-0.678-1.133-1.243-1.857-1.68-0.237-0.142-0.313-0.45-0.17-0.686s0.45-0.313 0.686-0.17c0.835 0.503 1.556 1.155 2.141 1.937 0.166 0.221 0.121 0.534-0.1 0.7-0.090 0.067-0.195 0.1-0.299 0.1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12.001 8.161c-0.035 0-0.071-0.004-0.107-0.012-0.909-0.199-1.878-0.198-2.787-0-0.27 0.059-0.536-0.112-0.595-0.382s0.112-0.536 0.382-0.595c1.049-0.229 2.164-0.229 3.213 0 0.27 0.059 0.441 0.325 0.382 0.595-0.051 0.234-0.258 0.393-0.488 0.393z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4.893 10.808c-0.104 0-0.209-0.033-0.299-0.1-0.221-0.166-0.266-0.479-0.1-0.7 0.585-0.781 1.306-1.433 2.141-1.936 0.237-0.143 0.544-0.066 0.686 0.17s0.066 0.544-0.17 0.686c-0.724 0.437-1.349 1.002-1.857 1.679-0.098 0.131-0.248 0.2-0.401 0.2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.243 8.671c-0.145 0-0.288-0.063-0.387-0.183-0.838-1.024-1.904-1.88-3.081-2.474-0.247-0.124-0.346-0.425-0.221-0.672s0.425-0.346 0.672-0.221c1.32 0.666 2.466 1.586 3.405 2.734 0.175 0.214 0.143 0.529-0.070 0.704-0.093 0.076-0.205 0.113-0.316 0.113z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12.501 5.2c-0.033 0-0.066-0.003-0.1-0.010-1.243-0.252-2.558-0.252-3.801-0-0.271 0.055-0.535-0.12-0.589-0.391s0.12-0.535 0.391-0.589c1.373-0.279 2.826-0.279 4.199 0 0.271 0.055 0.446 0.319 0.391 0.589-0.048 0.237-0.257 0.401-0.49 0.401z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M2.757 8.671c-0.111 0-0.223-0.037-0.316-0.113-0.214-0.175-0.245-0.49-0.070-0.704 0.939-1.148 2.085-2.067 3.405-2.734 0.247-0.124 0.547-0.025 0.672 0.221s0.025 0.547-0.221 0.672c-1.178 0.594-2.243 1.45-3.081 2.474-0.099 0.121-0.242 0.183-0.387 0.183z"
  }, pathProps))));
}

LiniWifiLow2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniWifiLow2;