var React = require('react');

var PropTypes = require('prop-types');

function LiniResizeHandle({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniResizeHandle';

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
    d: "M16.5 19c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM16.5 15c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 19c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM9.5 15c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 12c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM16.5 8c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5c0-0.827-0.673-1.5-1.5-1.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM16.5 1c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 12c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM9.5 8c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 19c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM2.5 15c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z",
    fill: color
  })));
}

LiniResizeHandle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniResizeHandle;