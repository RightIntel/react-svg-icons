var React = require('react');

var PropTypes = require('prop-types');

function LiniCartFull({
  size,
  ...props
}) {
  var className = 'Component Lini LiniCartFull';

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
    d: "M8 20c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM8 17c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 20c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM15 17c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.539 4.467c-0.251-0.297-0.63-0.467-1.039-0.467h-0.293l-2.854-2.854c-0.195-0.195-0.512-0.195-0.707 0l-1 1c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l0.646-0.646 1.793 1.793h-2.586l-3.354-3.354c-0.195-0.195-0.512-0.195-0.707 0l-3.354 3.354h-0.536l-0.099-0.596c-0.131-0.787-0.859-1.404-1.658-1.404h-1c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1c0.307 0 0.621 0.266 0.671 0.569l1.671 10.027c0.131 0.787 0.859 1.404 1.658 1.404h10c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-10c-0.307 0-0.621-0.266-0.671-0.569l-0.247-1.48 9.965-0.867c0.775-0.067 1.483-0.721 1.611-1.489l0.671-4.027c0.067-0.404-0.038-0.806-0.289-1.102zM8.5 1.707l2.293 2.293h-4.586l2.293-2.293zM16.842 5.404l-0.671 4.027c-0.053 0.316-0.391 0.629-0.711 0.657l-10.043 0.873-0.994-5.962h12.076c0.117 0 0.215 0.040 0.276 0.113s0.085 0.176 0.066 0.291z",
    fill: "#000000"
  })));
}

LiniCartFull.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCartFull;