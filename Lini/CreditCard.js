var React = require('react');

var PropTypes = require('prop-types');

function LiniCreditCard({
  size,
  ...props
}) {
  var className = 'Component Lini LiniCreditCard';

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
    d: "M18.5 3h-17c-0.827 0-1.5 0.673-1.5 1.5v11c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-11c0-0.827-0.673-1.5-1.5-1.5zM1.5 4h17c0.276 0 0.5 0.224 0.5 0.5v0.5h-18v-0.5c0-0.276 0.224-0.5 0.5-0.5zM19 6v3h-18v-3h18zM18.5 16h-17c-0.276 0-0.5-0.224-0.5-0.5v-5.5h18v5.5c0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 14h1v1h-1v-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 14h3v1h-3v-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 14h2v1h-2v-1z"
  })));
}

LiniCreditCard.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCreditCard;