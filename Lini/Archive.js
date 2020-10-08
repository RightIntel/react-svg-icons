var React = require('react');

var PropTypes = require('prop-types');

function LiniArchive({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniArchive';

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
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M11.5 16h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M19.557 11.383l-2.698-6.168c-0.298-0.682-1.115-1.216-1.859-1.216h-10c-0.744 0-1.561 0.534-1.859 1.216l-2.698 6.168c-0.248 0.568-0.443 1.497-0.443 2.117v4c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-4c0-0.619-0.194-1.549-0.443-2.117zM4.057 5.617c0.141-0.323 0.591-0.617 0.943-0.617h10c0.352 0 0.802 0.294 0.943 0.617l2.698 6.168c0.030 0.069 0.060 0.148 0.089 0.233-0.075-0.012-0.152-0.018-0.23-0.018h-17c-0.078 0-0.155 0.006-0.23 0.018 0.029-0.085 0.058-0.164 0.089-0.233l2.698-6.168zM19 17.5c0 0.276-0.224 0.5-0.5 0.5h-17c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v4z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.5 11h-13c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h13c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15.5 9h-11c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M14.5 7h-9c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h9c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniArchive.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniArchive;