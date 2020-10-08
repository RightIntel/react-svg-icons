var React = require('react');

var PropTypes = require('prop-types');

function LiniToggleOff({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniToggleOff';

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
    d: "M13 17h-6c-1.87 0-3.628-0.728-4.95-2.050s-2.050-3.080-2.050-4.95c0-1.87 0.728-3.628 2.050-4.95s3.080-2.050 4.95-2.050h6c1.87 0 3.628 0.728 4.95 2.050s2.050 3.080 2.050 4.95c0 1.87-0.728 3.628-2.050 4.95s-3.080 2.050-4.95 2.050zM7 4c-3.308 0-6 2.692-6 6s2.692 6 6 6h6c3.308 0 6-2.692 6-6s-2.692-6-6-6h-6z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 14c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4c0 2.206-1.794 4-4 4zM7 7c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z",
    fill: color
  })));
}

LiniToggleOff.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniToggleOff;