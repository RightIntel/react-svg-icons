var React = require('react');

var PropTypes = require('prop-types');

function LiniCool({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniCool';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.4 5.199c-0.094-0.126-0.243-0.2-0.4-0.2l-4 0c-0.157 0-0.305 0.074-0.4 0.2-0.185 0.247-0.329 0.516-0.429 0.8h-1.341c-0.101-0.284-0.244-0.554-0.43-0.801-0.094-0.126-0.243-0.2-0.4-0.2l-4 0c-0.157 0-0.305 0.074-0.4 0.2-0.393 0.523-0.6 1.145-0.6 1.801s0.208 1.278 0.6 1.801c0.094 0.126 0.243 0.2 0.4 0.2l4-0c0.157 0 0.305-0.074 0.4-0.2 0.393-0.523 0.6-1.145 0.6-1.8 0 0 0 0 0-0h1c0 0 0 0 0 0 0 0.655 0.208 1.278 0.6 1.801 0.094 0.126 0.243 0.2 0.4 0.2l4-0c0.157 0 0.305-0.074 0.4-0.2 0.393-0.523 0.6-1.145 0.6-1.8s-0.208-1.278-0.6-1.801zM7.733 8l-3.465 0c-0.176-0.303-0.267-0.644-0.267-1s0.092-0.698 0.267-1l3.465-0c0.108 0.186 0.184 0.386 0.227 0.596 0.001 0.004 0.002 0.008 0.003 0.012 0.025 0.128 0.038 0.259 0.038 0.392-0 0.356-0.092 0.697-0.267 1zM14.733 8l-3.465 0c-0.176-0.303-0.267-0.644-0.267-1 0-0.133 0.013-0.264 0.038-0.392 0.001-0.004 0.002-0.008 0.003-0.012 0.043-0.209 0.119-0.41 0.227-0.596l3.465-0c0.176 0.303 0.267 0.644 0.267 1s-0.092 0.697-0.267 1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 17c-1.547 0-3.045-0.553-4.22-1.556-1.161-0.992-1.939-2.363-2.191-3.862-0.046-0.272 0.138-0.53 0.41-0.576s0.53 0.138 0.576 0.41c0.445 2.655 2.727 4.583 5.424 4.583 0.967 0 1.918-0.254 2.75-0.736 0.239-0.138 0.545-0.057 0.683 0.182s0.057 0.545-0.182 0.683c-0.984 0.569-2.108 0.87-3.25 0.87z",
    fill: color
  })));
}

LiniCool.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCool;