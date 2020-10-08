var React = require('react');

var PropTypes = require('prop-types');

function LiniTextFormatRemove({
  size,
  ...props
}) {
  var className = 'Component Lini LiniTextFormatRemove';

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
    d: "M13.5 1h-12c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5.41l-1.903 11.418c-0.045 0.272 0.139 0.53 0.411 0.575 0.028 0.005 0.056 0.007 0.083 0.007 0.24 0 0.452-0.173 0.493-0.418l1.93-11.582h5.576c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 16h-9c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h9c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.707 16.5l1.646-1.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-1.646 1.646-1.646-1.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1.646 1.646-1.646 1.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l1.646-1.646 1.646 1.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1.646-1.646z"
  })));
}

LiniTextFormatRemove.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTextFormatRemove;