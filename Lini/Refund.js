var React = require('react');

var PropTypes = require('prop-types');

function LiniRefund({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniRefund';

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
    d: "M10 20c-3.67 0-7.039-2.005-8.793-5.233-0.132-0.243-0.042-0.546 0.201-0.678s0.546-0.042 0.678 0.201c1.578 2.905 4.611 4.71 7.914 4.71 4.963 0 9-4.037 9-9s-4.037-9-9-9c-3.316 0-6.354 1.815-7.928 4.737-0.118 0.219-0.38 0.318-0.613 0.232s-0.368-0.332-0.315-0.575l0.869-4c0.059-0.27 0.325-0.441 0.595-0.383s0.441 0.325 0.382 0.595l-0.353 1.627c1.869-2.035 4.525-3.233 7.365-3.233 2.671 0 5.182 1.040 7.071 2.929s2.929 4.4 2.929 7.071c0 2.671-1.040 5.182-2.929 7.071s-4.4 2.929-7.071 2.929z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 13c-0.276 0-0.5-0.224-0.5-0.5v-4.5h-0.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 13h-2c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5zM7 12h1v-4h-1v4z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 13h-2c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5zM11 12h1v-4h-1v4z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 13c-0.062 0-0.125-0.012-0.186-0.036-0.256-0.103-0.381-0.394-0.279-0.65l2-5c0.103-0.256 0.393-0.381 0.65-0.279s0.381 0.394 0.279 0.65l-2 5c-0.078 0.195-0.266 0.314-0.464 0.314z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 8c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.26 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 13c-0.132 0-0.26-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z",
    fill: color
  })));
}

LiniRefund.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniRefund;