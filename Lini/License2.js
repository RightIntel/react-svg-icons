var React = require('react');

var PropTypes = require('prop-types');

function LiniLicense2({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniLicense2';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.5 18h-17c-0.827 0-1.5-0.673-1.5-1.5v-13c0-0.827 0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5v13c0 0.827-0.673 1.5-1.5 1.5zM1.5 3c-0.276 0-0.5 0.224-0.5 0.5v13c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-13c0-0.276-0.224-0.5-0.5-0.5h-17z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 6h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 9h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 11h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 13h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 15h-5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.943 6.544l-0.813-0.591-0.311-0.956h-1.005l-0.813-0.591-0.813 0.591h-1.005l-0.311 0.956-0.813 0.591 0.311 0.956-0.311 0.956 0.813 0.591 0.132 0.406c-0.002 0.016-0.002 0.031-0.002 0.047v5c0 0.202 0.122 0.385 0.309 0.462s0.402 0.035 0.545-0.108l1.146-1.146 1.146 1.146c0.096 0.096 0.223 0.147 0.354 0.146 0.064 0 0.129-0.012 0.191-0.038 0.187-0.077 0.309-0.26 0.309-0.462v-5c0-0.016-0.001-0.032-0.002-0.047l0.132-0.406 0.813-0.591-0.311-0.956 0.311-0.956zM13.233 6.926l0.488-0.355 0.187-0.574h0.604l0.488-0.355 0.488 0.355h0.604l0.187 0.574 0.488 0.355-0.187 0.574 0.187 0.574-0.488 0.355-0.187 0.574h-0.604l-0.488 0.355-0.488-0.355h-0.604l-0.187-0.574-0.488-0.355 0.187-0.574-0.187-0.574zM15.354 12.646c-0.195-0.195-0.512-0.195-0.707 0l-0.646 0.646v-3.29h0.187l0.813 0.591 0.813-0.591h0.187v3.29l-0.646-0.646z",
    fill: color
  })));
}

LiniLicense2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLicense2;