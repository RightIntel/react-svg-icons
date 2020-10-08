var React = require('react');

var PropTypes = require('prop-types');

function LiniSiren({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniSiren';

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
    d: "M9.5 7c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 13h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 13h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 15.086v-1.586c0-3.033-2.467-5.5-5.5-5.5s-5.5 2.467-5.5 5.5v1.586c-0.582 0.206-1 0.762-1 1.414 0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5 0-0.652-0.418-1.208-1-1.414zM9.5 9c2.481 0 4.5 2.019 4.5 4.5v1.5h-9v-1.5c0-2.481 2.019-4.5 4.5-4.5zM14.5 17h-10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 8.5c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l2-2c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2 2c-0.098 0.098-0.226 0.146-0.354 0.146z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 8.5c-0.128 0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2 2c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z",
    fill: color
  })));
}

LiniSiren.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSiren;