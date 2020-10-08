var React = require('react');

var PropTypes = require('prop-types');

function LiniWifiMid({
  size,
  ...props
}) {
  var className = 'Component Lini LiniWifiMid';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.5 16c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM10.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.243 8.671c-0.145 0-0.288-0.063-0.387-0.183-0.838-1.024-1.904-1.88-3.081-2.474-0.247-0.124-0.346-0.425-0.221-0.672s0.425-0.346 0.672-0.221c1.32 0.666 2.466 1.586 3.405 2.734 0.175 0.214 0.143 0.529-0.070 0.704-0.093 0.076-0.205 0.113-0.316 0.113z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.501 5.2c-0.033 0-0.066-0.003-0.1-0.010-1.243-0.252-2.558-0.252-3.801-0-0.271 0.055-0.535-0.12-0.589-0.391s0.12-0.535 0.391-0.589c1.373-0.279 2.826-0.279 4.199 0 0.271 0.055 0.446 0.319 0.391 0.589-0.048 0.237-0.257 0.401-0.49 0.401z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.757 8.671c-0.111 0-0.223-0.037-0.316-0.113-0.214-0.175-0.245-0.49-0.070-0.704 0.939-1.148 2.085-2.067 3.405-2.734 0.247-0.124 0.547-0.025 0.672 0.221s0.025 0.547-0.221 0.672c-1.178 0.594-2.243 1.45-3.081 2.474-0.099 0.121-0.242 0.183-0.387 0.183z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.053 12.968c-0.086 0-0.174-0.022-0.254-0.070-0.238-0.14-0.317-0.447-0.176-0.685 0.391-0.662 0.949-1.216 1.612-1.603 0.685-0.399 1.468-0.61 2.264-0.61s1.58 0.211 2.264 0.61c0.664 0.387 1.221 0.942 1.612 1.603 0.141 0.238 0.062 0.544-0.176 0.685s-0.544 0.062-0.685-0.176c-0.628-1.062-1.783-1.722-3.016-1.722s-2.388 0.66-3.016 1.722c-0.093 0.158-0.26 0.246-0.431 0.246z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.107 10.808c-0.152 0-0.302-0.069-0.401-0.2-1.241-1.657-3.139-2.608-5.206-2.608s-3.965 0.95-5.206 2.608c-0.166 0.221-0.479 0.266-0.7 0.1s-0.266-0.479-0.1-0.7c0.684-0.913 1.581-1.67 2.594-2.189 1.063-0.544 2.211-0.82 3.412-0.82s2.35 0.276 3.412 0.82c1.013 0.518 1.91 1.275 2.594 2.189 0.166 0.221 0.121 0.534-0.1 0.7-0.090 0.067-0.195 0.1-0.299 0.1z",
    fill: "#000000"
  })));
}

LiniWifiMid.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniWifiMid;