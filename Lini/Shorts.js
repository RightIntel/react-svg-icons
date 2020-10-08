var React = require('react');

var PropTypes = require('prop-types');

function LiniShorts({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniShorts';

  if (props.className) {
    className += ' ' + props.className;
  }

  const pathProps = {};

  if (color) {
    pathProps.fill = color;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.968 12.324l-3-8c-0.073-0.195-0.26-0.324-0.468-0.324h-12c-0.208 0-0.395 0.129-0.468 0.324l-3 8c-0.090 0.24 0.016 0.508 0.245 0.623l6 3c0.216 0.108 0.479 0.046 0.624-0.147l2.6-3.467 2.6 3.467c0.097 0.13 0.247 0.2 0.4 0.2 0.076 0 0.152-0.017 0.223-0.053l6-3c0.229-0.114 0.334-0.383 0.245-0.623zM3.847 5h11.307l0.375 1h-12.057l0.375-1zM12.65 14.866l-2.75-3.666c-0.094-0.126-0.243-0.2-0.4-0.2s-0.306 0.074-0.4 0.2l-2.75 3.666-5.224-2.612 1.97-5.254h4.577c-0.055 0.074-0.109 0.153-0.16 0.235-0.35 0.561-0.493 1.12-0.499 1.144-0.067 0.268 0.096 0.539 0.364 0.606s0.539-0.096 0.606-0.364c0.004-0.016 0.435-1.621 1.515-1.621 1.084 0 1.508 1.595 1.515 1.622 0.057 0.227 0.261 0.378 0.484 0.378 0.040 0 0.081-0.005 0.122-0.015 0.268-0.067 0.431-0.338 0.364-0.606-0.006-0.024-0.148-0.583-0.499-1.144-0.051-0.082-0.105-0.161-0.16-0.235h4.577l1.97 5.254-5.224 2.612z"
  }, pathProps))));
}

LiniShorts.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniShorts;