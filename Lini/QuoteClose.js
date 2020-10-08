var React = require('react');

var PropTypes = require('prop-types');

function LiniQuoteClose({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniQuoteClose';

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
    d: "M4.5 13c0.924 0 1.783-0.28 2.499-0.759-1.297 2.245-3.725 3.759-6.499 3.759-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c2.27 0 4.405-0.884 6.010-2.49s2.49-3.74 2.49-6.010c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5 2.019 4.5 4.5 4.5zM4.5 5c1.93 0 3.5 1.57 3.5 3.5 0 0.030-0.001 0.060-0.001 0.090-0.048 1.888-1.599 3.41-3.499 3.41-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 16c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c2.27 0 4.405-0.884 6.010-2.49s2.49-3.74 2.49-6.010c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5 2.019 4.5 4.5 4.5c0.924 0 1.783-0.28 2.499-0.759-1.297 2.245-3.725 3.759-6.499 3.759zM15.5 12c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5c0 0.030-0.001 0.060-0.001 0.090-0.048 1.888-1.599 3.41-3.499 3.41z",
    fill: color
  })));
}

LiniQuoteClose.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniQuoteClose;