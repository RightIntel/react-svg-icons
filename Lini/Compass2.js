var React = require('react');

var PropTypes = require('prop-types');

function LiniCompass2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniCompass2';

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
    d: "M10 20c-2.671 0-5.182-1.040-7.071-2.929s-2.929-4.4-2.929-7.071c0-2.671 1.040-5.182 2.929-7.071s4.4-2.929 7.071-2.929c2.671 0 5.182 1.040 7.071 2.929s2.929 4.4 2.929 7.071c0 2.671-1.040 5.182-2.929 7.071s-4.4 2.929-7.071 2.929zM10 1c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.941 17.225l2.995-8.67 7.123-5.779-2.995 8.67-7.123 5.779zM8.788 9.151l-1.759 5.092 4.183-3.394 1.759-5.092-4.183 3.394z",
    fill: "#000000"
  })));
}

LiniCompass2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCompass2;