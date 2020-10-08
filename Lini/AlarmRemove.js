var React = require('react');

var PropTypes = require('prop-types');

function LiniAlarmRemove({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniAlarmRemove';

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
    d: "M18.442 4.591c-0.032 0-0.065-0.003-0.098-0.010-0.271-0.054-0.446-0.317-0.392-0.588 0.032-0.161 0.048-0.327 0.048-0.493 0-1.378-1.122-2.5-2.5-2.5-0.296 0-0.586 0.051-0.861 0.152-0.259 0.095-0.547-0.038-0.642-0.297s0.038-0.547 0.297-0.642c0.386-0.142 0.791-0.213 1.206-0.213 1.93 0 3.5 1.57 3.5 3.5 0 0.232-0.023 0.463-0.068 0.689-0.047 0.238-0.256 0.402-0.49 0.402z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M0.56 4.605c-0.233 0-0.441-0.163-0.489-0.4-0.047-0.231-0.071-0.468-0.071-0.705 0-1.93 1.57-3.5 3.5-3.5 0.414 0 0.82 0.072 1.205 0.213 0.259 0.095 0.392 0.382 0.297 0.642s-0.382 0.392-0.642 0.297c-0.275-0.101-0.565-0.152-0.861-0.152-1.378 0-2.5 1.122-2.5 2.5 0 0.17 0.017 0.34 0.051 0.504 0.055 0.271-0.119 0.535-0.39 0.59-0.034 0.007-0.068 0.010-0.101 0.010z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.32 17.113c1.729-1.782 2.68-4.124 2.68-6.613 0-2.538-0.988-4.923-2.782-6.717s-4.18-2.783-6.718-2.783c-2.538 0-4.923 0.988-6.717 2.783s-2.782 4.18-2.782 6.717c0 2.489 0.951 4.831 2.68 6.613l-2.034 2.034c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.147 0.354 0.147s0.256-0.049 0.354-0.147l2.059-2.060c1.705 1.428 3.836 2.206 6.087 2.206s4.382-0.778 6.087-2.206l2.059 2.059c0.098 0.098 0.226 0.147 0.354 0.147s0.256-0.049 0.353-0.147c0.195-0.195 0.195-0.512 0-0.707l-2.034-2.034zM9.5 19c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13.5 11h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniAlarmRemove.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAlarmRemove;