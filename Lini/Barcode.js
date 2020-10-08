var React = require('react');

var PropTypes = require('prop-types');

function LiniBarcode({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniBarcode';

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
    d: "M0 3h1v14h-1v-14z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3h0.5v14h-0.5v-14z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 3h0.5v14h-0.5v-14z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3h1v14h-1v-14z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 3h1v14h-1v-14z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 3h0.5v14h-0.5v-14z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 3h1v14h-1v-14z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 3h0.5v14h-0.5v-14z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 3h1v14h-1v-14z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3h0.5v14h-0.5v-14z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 3h1v14h-1v-14z",
    fill: color
  })));
}

LiniBarcode.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBarcode;