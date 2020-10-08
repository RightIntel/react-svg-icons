var React = require('react');

var PropTypes = require('prop-types');

function LiniBorderRight({
  size,
  ...props
}) {
  var className = 'Component Lini LiniBorderRight';

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
    d: "M1 10h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 10h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 10h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 10h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 10h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 10h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 16h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 14h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 8h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 6h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 4h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 2h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 16h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 18h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 14h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 12h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 2h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 8h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 6h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 4h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 18h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 2h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 2h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 2h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 2h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 2h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 2h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 18h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 18h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 18h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 18h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 18h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 18h1v1h-1v-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 19c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v16c0 0.276-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  })));
}

LiniBorderRight.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBorderRight;