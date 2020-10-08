var React = require('react');

var PropTypes = require('prop-types');

function LiniBorderOuter({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniBorderOuter';

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
    d: "M3 10h1v1h-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10h1v1h-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 10h1v1h-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 10h1v1h-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 10h1v1h-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 10h1v1h-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 10h1v1h-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 16h1v1h-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 14h1v1h-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12h1v1h-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 8h1v1h-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 6h1v1h-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 4h1v1h-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 19h-14c-0.827 0-1.5-0.673-1.5-1.5v-14c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5v14c0 0.827-0.673 1.5-1.5 1.5zM2.5 3c-0.276 0-0.5 0.224-0.5 0.5v14c0 0.276 0.224 0.5 0.5 0.5h14c0.276 0 0.5-0.224 0.5-0.5v-14c0-0.276-0.224-0.5-0.5-0.5h-14z",
    fill: color
  })));
}

LiniBorderOuter.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBorderOuter;