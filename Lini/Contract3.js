var React = require('react');

var PropTypes = require('prop-types');

function LiniContract3({
  size,
  ...props
}) {
  var className = 'Component Lini LiniContract3';

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
    d: "M17.5 18h-16c-0.827 0-1.5-0.673-1.5-1.5v-12c0-0.827 0.673-1.5 1.5-1.5h16c0.827 0 1.5 0.673 1.5 1.5v12c0 0.827-0.673 1.5-1.5 1.5zM1.5 4c-0.276 0-0.5 0.224-0.5 0.5v12c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-12c0-0.276-0.224-0.5-0.5-0.5h-16z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 12h-3c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.793l-2.146 2.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2.146-2.146v1.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 8h-1.793l2.146-2.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-2.146 2.146v-1.793c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z",
    fill: "#000000"
  })));
}

LiniContract3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniContract3;