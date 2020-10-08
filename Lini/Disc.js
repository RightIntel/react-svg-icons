var React = require('react');

var PropTypes = require('prop-types');

function LiniDisc({
  size,
  ...props
}) {
  var className = 'Component Lini LiniDisc';

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
    d: "M10 12c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM10 9c-0.551 0-1 0.449-1 1s0.449 1 1 1c0.551 0 1-0.449 1-1s-0.449-1-1-1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.071 2.929c-1.889-1.889-4.4-2.929-7.071-2.929s-5.182 1.040-7.071 2.929c-1.889 1.889-2.929 4.4-2.929 7.071s1.040 5.182 2.929 7.071c1.889 1.889 4.4 2.929 7.071 2.929s5.182-1.040 7.071-2.929c1.889-1.889 2.929-4.4 2.929-7.071s-1.040-5.182-2.929-7.071zM17.906 5.702l-4.534 2.148c-0.314-0.49-0.731-0.908-1.221-1.221l2.148-4.534c1.521 0.83 2.777 2.087 3.608 3.608zM7 10c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zM10 1c1.201 0 2.347 0.237 3.395 0.665l-2.148 4.534c-0.393-0.129-0.812-0.199-1.247-0.199-2.206 0-4 1.794-4 4 0 0.435 0.070 0.854 0.199 1.247l-4.534 2.148c-0.428-1.048-0.665-2.194-0.665-3.395 0-4.963 4.037-9 9-9zM2.094 14.298l4.534-2.148c0.314 0.49 0.731 0.908 1.221 1.221l-2.148 4.534c-1.521-0.83-2.777-2.087-3.608-3.608zM10 19c-1.201 0-2.347-0.237-3.395-0.665l2.148-4.534c0.393 0.129 0.812 0.199 1.247 0.199 2.206 0 4-1.794 4-4 0-0.435-0.070-0.854-0.199-1.247l4.534-2.148c0.428 1.048 0.665 2.194 0.665 3.395 0 4.963-4.037 9-9 9z",
    fill: "#000000"
  })));
}

LiniDisc.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDisc;