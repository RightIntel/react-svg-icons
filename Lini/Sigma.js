var React = require('react');

var PropTypes = require('prop-types');

function LiniSigma({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniSigma';

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
    d: "M14.5 18h-10c-0.187 0-0.359-0.105-0.445-0.271s-0.071-0.367 0.038-0.519l4.792-6.709-4.792-6.709c-0.109-0.152-0.123-0.353-0.038-0.519s0.257-0.271 0.445-0.271h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-9.028l4.435 6.209c0.124 0.174 0.124 0.407 0 0.581l-4.435 6.209h9.028c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniSigma.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSigma;