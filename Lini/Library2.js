var React = require('react');

var PropTypes = require('prop-types');

function LiniLibrary2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniLibrary2';

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
    d: "M5.5 17h-0.5v-9h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v9h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM4 17h-1v-9h1v9z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 17h-0.5v-9h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v9h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM10 17h-1v-9h1v9z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 17h-0.5v-9h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v9h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM16 17h-1v-9h1v9z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 20h-18c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h18c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 6h-16c-0.223 0-0.419-0.148-0.481-0.362s0.026-0.444 0.216-0.562l8-5c0.162-0.101 0.368-0.101 0.53 0l8 5c0.189 0.118 0.277 0.347 0.216 0.562s-0.258 0.362-0.481 0.362zM3.243 5h12.513l-6.257-3.91-6.257 3.91z",
    fill: "#000000"
  })));
}

LiniLibrary2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLibrary2;