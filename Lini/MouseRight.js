var React = require('react');

var PropTypes = require('prop-types');

function LiniMouseRight({
  size,
  ...props
}) {
  var className = 'Component Lini LiniMouseRight';

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
    d: "M9.5 4c-3.033 0-5.5 2.467-5.5 5.5v5c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5v-5c0-3.033-2.467-5.5-5.5-5.5zM13.972 9h-3.972v-3.972c2.083 0.231 3.741 1.889 3.972 3.972zM9 5.028v3.972h-3.972c0.231-2.083 1.889-3.741 3.972-3.972zM9.5 19c-2.481 0-4.5-2.019-4.5-4.5v-4.5h9v4.5c0 2.481-2.019 4.5-4.5 4.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 3c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 6h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 4c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l2-2c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2 2c-0.098 0.098-0.226 0.146-0.354 0.146z",
    fill: "#000000"
  })));
}

LiniMouseRight.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMouseRight;