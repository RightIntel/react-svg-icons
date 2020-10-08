var React = require('react');

var PropTypes = require('prop-types');

function LiniGlasses({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniGlasses';

  if (props.className) {
    className += ' ' + props.className;
  }

  const pathProps = {};

  if (color) {
    pathProps.fill = color;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.5 9h-0.647c-0.079-0.301-0.2-0.585-0.385-0.845-0.552-0.777-1.564-1.155-3.093-1.155h-9.75c-1.529 0-2.541 0.378-3.093 1.155-0.185 0.261-0.306 0.545-0.385 0.845h-0.647c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.511c-0.009 0.195-0.011 0.394-0.011 0.594 0 1.974 1.393 3.406 3.313 3.406 0.912 0 2.063-0.614 3.077-1.643 0.756-0.767 1.283-1.605 1.5-2.357h1.22c0.217 0.752 0.744 1.59 1.5 2.357 1.015 1.029 2.165 1.643 3.077 1.643 1.919 0 3.313-1.433 3.313-3.406 0-0.2-0.002-0.399-0.011-0.594h0.511c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM10.013 9h-1.027c-0.038-0.397-0.16-0.729-0.367-1h1.761c-0.208 0.271-0.329 0.603-0.367 1zM6.678 11.655c-0.806 0.817-1.734 1.345-2.365 1.345-1.362 0-2.313-0.989-2.313-2.406 0-0.361 0.007-0.691 0.045-0.985 0.005-0.024 0.009-0.049 0.010-0.074 0.148-0.971 0.68-1.534 2.57-1.534 3.14 0 3.375 0.507 3.375 1.281 0 0.627-0.519 1.558-1.322 2.373zM14.688 13c-0.631 0-1.559-0.528-2.365-1.345-0.803-0.815-1.322-1.746-1.322-2.373 0-0.774 0.235-1.281 3.375-1.281 1.889 0 2.422 0.564 2.57 1.534 0.002 0.025 0.005 0.050 0.010 0.074 0.038 0.294 0.045 0.624 0.045 0.985 0 1.417-0.951 2.406-2.313 2.406z"
  }, pathProps))));
}

LiniGlasses.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniGlasses;