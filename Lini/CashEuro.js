var React = require('react');

var PropTypes = require('prop-types');

function LiniCashEuro({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniCashEuro';

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
    d: "M18.5 18h-18c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h18c0.276 0 0.5 0.224 0.5 0.5v10c0 0.276-0.224 0.5-0.5 0.5zM1 17h17v-9h-17v9z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 6h-16c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 4h-14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.75 14.067c-0.239-0.138-0.545-0.057-0.683 0.182-0.252 0.435-0.854 0.75-1.433 0.75-0.682 0-1.297-0.43-1.533-1h1.399c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-1h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.399c0.235-0.57 0.851-1 1.533-1 0.579 0 1.182 0.316 1.433 0.75 0.138 0.239 0.444 0.321 0.683 0.182s0.321-0.444 0.182-0.683c-0.426-0.736-1.371-1.249-2.299-1.249-0.658 0-1.321 0.261-1.819 0.717-0.392 0.359-0.653 0.803-0.76 1.283h-0.555c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.555c0.107 0.48 0.368 0.924 0.76 1.283 0.498 0.456 1.161 0.717 1.819 0.717 0.928 0 1.873-0.514 2.299-1.25 0.138-0.239 0.057-0.545-0.182-0.683z",
    fill: color
  })));
}

LiniCashEuro.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCashEuro;