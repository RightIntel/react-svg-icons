var React = require('react');

var PropTypes = require('prop-types');

function LiniFindReplace({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniFindReplace';

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
    d: "M17.5 11.5c0.13 0 0.258-0.051 0.354-0.147l2-2c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-1.149 1.149c-0.051-2.060-0.878-3.99-2.341-5.452-1.511-1.511-3.52-2.343-5.657-2.343-2.936 0-5.631 1.604-7.034 4.186-0.132 0.243-0.042 0.546 0.201 0.678s0.546 0.042 0.678-0.201c1.228-2.26 3.586-3.664 6.155-3.664 3.86 0 7 3.14 7 7v1c0 0.202 0.122 0.385 0.309 0.462 0.062 0.026 0.127 0.038 0.191 0.038z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 18c2.974 0 5.686-1.635 7.077-4.266 0.129-0.244 0.036-0.547-0.208-0.676s-0.547-0.036-0.676 0.208c-1.217 2.303-3.59 3.734-6.193 3.734-3.86 0-7-3.14-7-7v-1c0-0.202-0.122-0.385-0.309-0.462s-0.402-0.035-0.545 0.108l-2 2c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l1.149-1.149c0.051 2.060 0.878 3.99 2.341 5.452 1.511 1.511 3.52 2.343 5.657 2.343z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.854 13.146l-2.409-2.409c0.35-0.491 0.556-1.090 0.556-1.737 0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3c0.647 0 1.247-0.206 1.737-0.556l2.409 2.409c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707zM7 9c0-1.103 0.897-2 2-2s2 0.897 2 2c0 1.103-0.897 2-2 2s-2-0.897-2-2z",
    fill: color
  })));
}

LiniFindReplace.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFindReplace;