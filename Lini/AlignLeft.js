var React = require('react');

var PropTypes = require('prop-types');

function LiniAlignLeft({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniAlignLeft';

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
    d: "M0.5 20c-0.276 0-0.5-0.224-0.5-0.5v-19c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v19c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 9h-8c-0.827 0-1.5-0.673-1.5-1.5v-4c0-0.827 0.673-1.5 1.5-1.5h8c0.827 0 1.5 0.673 1.5 1.5v4c0 0.827-0.673 1.5-1.5 1.5zM3.5 3c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h8c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-8z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 18h-14c-0.827 0-1.5-0.673-1.5-1.5v-4c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5v4c0 0.827-0.673 1.5-1.5 1.5zM3.5 12c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h14c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-14z",
    fill: color
  })));
}

LiniAlignLeft.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAlignLeft;