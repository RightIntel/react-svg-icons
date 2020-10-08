var React = require('react');

var PropTypes = require('prop-types');

function LiniCompass({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniCompass';

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
    d: "M10.5 13h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 11c-0.276 0-0.5 0.224-0.5 0.5v0.5h-1c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.971 18.332l-4.176-11.693c0.736-0.447 1.205-1.255 1.205-2.139 0-1.207-0.86-2.217-2-2.45v-1.050h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1.050c-1.14 0.232-2 1.242-2 2.45 0 0.884 0.469 1.692 1.205 2.139l-4.176 11.693c-0.019 0.054-0.029 0.111-0.029 0.168v1c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.913l4.5-12.6 4.5 12.6v0.913c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1c0-0.057-0.010-0.114-0.029-0.168zM9.5 4c-0.211 0-0.4 0.133-0.471 0.332l-0.476 1.332c-0.343-0.28-0.553-0.705-0.553-1.164 0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5c0 0.459-0.211 0.884-0.554 1.164l-0.476-1.332c-0.071-0.199-0.26-0.332-0.471-0.332z",
    fill: color
  })));
}

LiniCompass.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCompass;