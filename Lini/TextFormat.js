var React = require('react');

var PropTypes = require('prop-types');

function LiniTextFormat({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniTextFormat';

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
    d: "M16.5 19h-14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15.96 15.303l-2.57-5.996c-0.001-0.001-0.001-0.003-0.002-0.004l-3.428-8c-0.079-0.184-0.26-0.303-0.46-0.303s-0.381 0.119-0.46 0.303l-3.428 8c-0.001 0.002-0.001 0.003-0.002 0.005l-2.57 5.996c-0.109 0.254 0.009 0.548 0.263 0.657s0.548-0.009 0.657-0.263l2.442-5.697h6.198l2.442 5.697c0.081 0.19 0.266 0.303 0.46 0.303 0.066 0 0.133-0.013 0.197-0.041 0.254-0.109 0.371-0.403 0.263-0.657zM6.83 9l2.67-6.231 2.67 6.231h-5.341z"
  }, pathProps))));
}

LiniTextFormat.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTextFormat;