var React = require('react');

var PropTypes = require('prop-types');

function LiniCashDollar({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniCashDollar';

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
    d: "M18.5 18h-18c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h18c0.276 0 0.5 0.224 0.5 0.5v10c0 0.276-0.224 0.5-0.5 0.5zM1 17h17v-9h-17v9z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 12h-3.5v-1h3.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h3.5v1h-3.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5h1.5c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 6h-16c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 4h-14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniCashDollar.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCashDollar;