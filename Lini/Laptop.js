var React = require('react');

var PropTypes = require('prop-types');

function LiniLaptop({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniLaptop';

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
    d: "M3.5 14h13c0.827 0 1.5-0.673 1.5-1.5v-8c0-0.827-0.673-1.5-1.5-1.5h-13c-0.827 0-1.5 0.673-1.5 1.5v8c0 0.827 0.673 1.5 1.5 1.5zM3 4.5c0-0.276 0.224-0.5 0.5-0.5h13c0.276 0 0.5 0.224 0.5 0.5v8c0 0.276-0.224 0.5-0.5 0.5h-13c-0.276 0-0.5-0.224-0.5-0.5v-8z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 15h-19c-0.276 0-0.5 0.224-0.5 0.5v1c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-1c0-0.276-0.224-0.5-0.5-0.5zM18.5 17h-17c-0.276 0-0.5-0.224-0.5-0.5v-0.5h18v0.5c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniLaptop.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLaptop;