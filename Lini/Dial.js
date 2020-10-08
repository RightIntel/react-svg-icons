var React = require('react');

var PropTypes = require('prop-types');

function LiniDial({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniDial';

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
    d: "M5 5c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM5 2c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 5c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM10 2c-0.551 0-1 0.449-1 1s0.449 1 1 1c0.551 0 1-0.449 1-1s-0.449-1-1-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 5c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM15 2c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM5 7c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 10c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM10 7c-0.551 0-1 0.449-1 1s0.449 1 1 1c0.551 0 1-0.449 1-1s-0.449-1-1-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 10c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM15 7c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM5 12c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 15c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM10 12c-0.551 0-1 0.449-1 1s0.449 1 1 1c0.551 0 1-0.449 1-1s-0.449-1-1-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 15c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM15 12c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 20c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM10 17c-0.551 0-1 0.449-1 1s0.449 1 1 1c0.551 0 1-0.449 1-1s-0.449-1-1-1z",
    fill: color
  })));
}

LiniDial.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDial;