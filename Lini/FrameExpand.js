var React = require('react');

var PropTypes = require('prop-types');

function LiniFrameExpand({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniFrameExpand';

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
    d: "M18.5 7c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.827 0 1.5 0.673 1.5 1.5v2c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0.5 7c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.827 0.673-1.5 1.5-1.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 18h-2c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 18h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.827-0.673 1.5-1.5 1.5z",
    fill: color
  })));
}

LiniFrameExpand.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFrameExpand;