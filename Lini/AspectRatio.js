var React = require('react');

var PropTypes = require('prop-types');

function LiniAspectRatio({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniAspectRatio';

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
    d: "M17.5 2h-16c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h7.5v2h-3.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h8c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3.5v-2h7.5c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM18 13.5c0 0.276-0.224 0.5-0.5 0.5h-16c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v10z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 6.5c0-0.827-0.673-1.5-1.5-1.5h-3c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3c0.276 0 0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5h-3c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3c0.276 0 0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5h-3c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3c0.827 0 1.5-0.673 1.5-1.5v-1c0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1v-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 5c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5h-2c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2c0 0.827 0.673 1.5 1.5 1.5h2c0.175 0 0.343-0.031 0.5-0.086v2.586c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 8c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 11c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniAspectRatio.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAspectRatio;