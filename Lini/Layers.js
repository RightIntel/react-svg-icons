var React = require('react');

var PropTypes = require('prop-types');

function LiniLayers({
  size,
  ...props
}) {
  var className = 'Component Lini LiniLayers';

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
    d: "M10 12c-0.066 0-0.132-0.013-0.194-0.039l-9.5-4c-0.185-0.078-0.306-0.26-0.306-0.461s0.121-0.383 0.306-0.461l9.5-4c0.124-0.052 0.264-0.052 0.388 0l9.5 4c0.185 0.078 0.306 0.26 0.306 0.461s-0.121 0.383-0.306 0.461l-9.5 4c-0.062 0.026-0.128 0.039-0.194 0.039zM1.788 7.5l8.212 3.457 8.212-3.457-8.212-3.457-8.212 3.457z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 15c-0.066 0-0.132-0.013-0.194-0.039l-9.5-4c-0.254-0.107-0.374-0.4-0.267-0.655s0.4-0.374 0.655-0.267l9.306 3.918 9.306-3.918c0.254-0.107 0.548 0.012 0.655 0.267s-0.012 0.548-0.267 0.655l-9.5 4c-0.062 0.026-0.128 0.039-0.194 0.039z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 18c-0.066 0-0.132-0.013-0.194-0.039l-9.5-4c-0.254-0.107-0.374-0.4-0.267-0.655s0.4-0.374 0.655-0.267l9.306 3.918 9.306-3.918c0.254-0.107 0.548 0.012 0.655 0.267s-0.012 0.548-0.267 0.655l-9.5 4c-0.062 0.026-0.128 0.039-0.194 0.039z",
    fill: "#000000"
  })));
}

LiniLayers.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLayers;