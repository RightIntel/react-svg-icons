var React = require('react');

var PropTypes = require('prop-types');

function LiniHockey({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniHockey';

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
    d: "M5 12c-2.115 0-3.512-0.328-4.27-1.001-0.73-0.649-0.73-1.461-0.73-1.999 0-1.271 0.729-2 2-2 0.194 0 0.492 0.048 0.943 0.12 0.886 0.142 2.369 0.38 4.057 0.38 2.445 0 5.793 0 8.146-2.354 0.975-0.975 3.944-4.437 3.974-4.472 0.18-0.21 0.495-0.234 0.705-0.054s0.234 0.495 0.054 0.705c-0.123 0.143-3.024 3.526-4.026 4.528-1.178 1.178-2.65 1.938-4.502 2.323-1.55 0.323-3.104 0.323-4.352 0.323-1.767 0-3.3-0.246-4.215-0.393-0.344-0.055-0.67-0.107-0.785-0.107-0.72 0-1 0.28-1 1 0 0.463 0 0.9 0.395 1.251 0.559 0.497 1.772 0.749 3.605 0.749 6.274 0 8.186-0.909 9.519-2.586 0.575-0.724 4.551-5.677 4.591-5.727 0.173-0.215 0.488-0.25 0.703-0.077s0.25 0.488 0.077 0.703c-0.040 0.050-4.014 5.001-4.588 5.723-0.876 1.103-1.86 1.766-3.287 2.219-1.604 0.508-3.833 0.745-7.015 0.745z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.672 14.48c-0.722-0.309-1.671-0.48-2.672-0.48s-1.95 0.17-2.672 0.48c-1.156 0.495-1.328 1.165-1.328 1.52v1.75c0 0.667 0.462 1.265 1.302 1.685 0.729 0.365 1.687 0.565 2.698 0.565s1.969-0.201 2.698-0.565c0.839-0.42 1.302-1.018 1.302-1.685v-1.75c0-0.355-0.173-1.025-1.328-1.52zM12 15c1.861 0 3 0.647 3 1s-1.139 1-3 1-3-0.647-3-1 1.139-1 3-1zM14.251 18.54c-0.584 0.292-1.405 0.46-2.251 0.46s-1.667-0.168-2.251-0.46c-0.469-0.234-0.749-0.53-0.749-0.79v-0.389c0.1 0.055 0.208 0.108 0.328 0.159 0.722 0.309 1.671 0.48 2.672 0.48s1.95-0.17 2.672-0.48c0.12-0.051 0.229-0.105 0.328-0.159v0.389c0 0.26-0.28 0.556-0.749 0.79z",
    fill: color
  })));
}

LiniHockey.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniHockey;