var React = require('react');

var PropTypes = require('prop-types');

function LiniForwardCircle({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniForwardCircle';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5c4.687 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 15c-0.064 0-0.129-0.012-0.191-0.038-0.187-0.077-0.309-0.26-0.309-0.462v-8c0-0.202 0.122-0.385 0.309-0.462s0.402-0.035 0.545 0.108l4 4c0.195 0.195 0.195 0.512 0 0.707l-4 4c-0.096 0.096-0.224 0.146-0.354 0.146zM11 7.707v5.586l2.793-2.793-2.793-2.793z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5.5 15c-0.064 0-0.129-0.012-0.191-0.038-0.187-0.077-0.309-0.26-0.309-0.462v-8c0-0.202 0.122-0.385 0.309-0.462s0.402-0.035 0.545 0.108l4 4c0.195 0.195 0.195 0.512 0 0.707l-4 4c-0.096 0.096-0.224 0.146-0.354 0.146zM6 7.707v5.586l2.793-2.793-2.793-2.793z"
  }, pathProps))));
}

LiniForwardCircle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniForwardCircle;