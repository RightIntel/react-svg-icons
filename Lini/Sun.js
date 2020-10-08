var React = require('react');

var PropTypes = require('prop-types');

function LiniSun({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniSun';

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
    d: "M9.5 5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 11h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 11h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 20c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 7.007c0.935 0 1.814 0.363 2.475 1.024s1.025 1.536 1.025 2.469-0.364 1.809-1.025 2.469c-0.661 0.66-1.54 1.024-2.475 1.024s-1.814-0.363-2.475-1.024c-0.661-0.66-1.025-1.536-1.025-2.469s0.364-1.809 1.025-2.469c0.661-0.66 1.54-1.024 2.475-1.024zM9.5 6.007c-2.485 0-4.5 2.011-4.5 4.493s2.015 4.493 4.5 4.493 4.5-2.011 4.5-4.493c0-2.481-2.015-4.493-4.5-4.493v0z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.507 6.507c-0.128 0-0.256-0.049-0.354-0.146l-2.121-2.121c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.121 2.121c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.386 17.614c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l2.121-2.121c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2.121 2.121c-0.098 0.098-0.226 0.146-0.354 0.146z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.493 6.507c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l2.121-2.121c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2.121 2.121c-0.098 0.098-0.226 0.146-0.354 0.146z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.614 17.614c-0.128 0-0.256-0.049-0.354-0.146l-2.121-2.121c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.121 2.121c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z",
    fill: color
  })));
}

LiniSun.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSun;