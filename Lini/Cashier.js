var React = require('react');

var PropTypes = require('prop-types');

function LiniCashier({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniCashier';

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
    d: "M5 11.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 11.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 11.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 11.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 11.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 17.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 8h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 4h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 6h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.658 14.393l-1.658-4.974v-2.919c0-0.827-0.673-1.5-1.5-1.5h-0.5v-1h2.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-6c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h2.5v1h-4v-3.5c0-0.276-0.224-0.5-0.5-0.5h-5c-0.276 0-0.5 0.224-0.5 0.5v3.5h-0.5c-0.827 0-1.5 0.673-1.5 1.5v2.919l-1.658 4.974c-0.192 0.575-0.342 1.501-0.342 2.107v2c0 0.827 0.673 1.5 1.5 1.5h16c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.606-0.15-1.532-0.342-2.107zM12 1h5v2h-5v-2zM5 2h4v5h-4v-5zM3.5 6h0.5v1.5c0 0.276 0.224 0.5 0.5 0.5h5c0.276 0 0.5-0.224 0.5-0.5v-1.5h5.5c0.276 0 0.5 0.224 0.5 0.5v2.5h-13v-2.5c0-0.276 0.224-0.5 0.5-0.5zM2.86 10h13.279l1.57 4.709c0.032 0.095 0.062 0.204 0.091 0.321-0.097-0.020-0.197-0.030-0.3-0.030h-16c-0.103 0-0.203 0.010-0.3 0.030 0.029-0.117 0.059-0.226 0.091-0.321l1.57-4.709zM17.5 19h-16c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniCashier.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCashier;